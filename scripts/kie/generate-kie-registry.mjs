#!/usr/bin/env node
/**
 * Generate the KIE model registry from `catalog.json`.
 *
 * Why a generator rather than a hand-kept list: KIE's public surface is 98
 * market cards that expand to ~200 API endpoints, and three different strings
 * name the same model — the marketing slug (`kie.ai/kling-o3`), the docs path
 * (`docs.kie.ai/market/flux2/pro-text-to-image`) and the API id that
 * `POST /api/v1/jobs/createTask` actually accepts (`flux-2/pro-text-to-image`).
 * Hand-transcribing between them is what put ids in this registry that KIE
 * answers with `422 The model name you specified is not supported`.
 *
 * catalog.json is scraped from kie.ai's own sitemap + model pages, and carries
 * the required `input` fields each endpoint rejects the request without.
 *
 *   node scripts/kie/generate-kie-registry.mjs           # write
 *   node scripts/kie/generate-kie-registry.mjs --check   # CI: fail if stale
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const REGISTRY = join(ROOT, "open-sse/config/providers/registry/kie");
const CATALOG = join(REGISTRY, "catalog.json");
const CHECK = process.argv.includes("--check");

/**
 * Fields the gateway can satisfy on its own, with the value KIE's enum accepts.
 * `resolution` is case-sensitive upstream — "1k" is rejected, "1K" is not.
 */
const AUTO_DEFAULTS = { quality: "basic", resolution: "1K" };

/**
 * Fields only the caller can supply (source images, upscale factors). They are
 * recorded so the handler can refuse with a precise message instead of paying
 * for a round trip that upstream will reject.
 */
const CALLER_SUPPLIED = new Set([
  "image",
  "image_url",
  "image_urls",
  "input_urls",
  "reference_image_urls",
  "mask_url",
  "video_url",
  "video_urls",
  "audio_url",
  "upscale_factor",
  "task_id",
  "hex",
  "ratio",
]);

/** "flux-2/pro-text-to-image" → "Flux 2 Pro Text To Image" */
function displayName(id) {
  return (
    id
      // Split on separators, but keep a dot that sits between digits: "1.5" is a
      // version, "flux-2/pro" is two words.
      .split(/[/\-_ ]|\.(?!\d)|(?<!\d)\./)
      .filter(Boolean)
      .map((w) => (/^\d/.test(w) ? w : w[0].toUpperCase() + w.slice(1)))
      .join(" ")
      .replace(/\bText To Image\b/, "T2I")
      .replace(/\bImage To Image\b/, "I2I")
      .replace(/\bText To Video\b/, "T2V")
      .replace(/\bImage To Video\b/, "I2V")
  );
}

function literal(value) {
  return JSON.stringify(value);
}

function entryLine(m) {
  const parts = [`id: ${literal(m.id)}`, `name: ${literal(displayName(m.id))}`];
  // Every market endpoint goes through POST /api/v1/jobs/createTask; the legacy
  // per-model /generate paths are direct-only and not represented here.
  parts.push("isMarket: true");

  const defaults = {};
  const caller = [];
  for (const field of m.required || []) {
    if (field in AUTO_DEFAULTS) defaults[field] = AUTO_DEFAULTS[field];
    else if (CALLER_SUPPLIED.has(field)) caller.push(field);
  }
  if (Object.keys(defaults).length) parts.push(`requiredInput: ${literal(defaults)}`);
  if (caller.length) parts.push(`callerRequired: ${literal(caller)}`);

  return `  { ${parts.join(", ")} },`;
}

const raw = JSON.parse(readFileSync(CATALOG, "utf8"));
const catalog = raw.endpoints;
const counts = catalog.reduce(
  (acc, m) => ({ ...acc, [m.modality]: (acc[m.modality] || 0) + 1 }),
  {}
);

const byModality = (m) =>
  catalog.filter((e) => e.modality === m).sort((a, b) => a.id.localeCompare(b.id));

/**
 * KIE serves synthesis and transcription through one `kie-audio` format, but
 * the registry splits them across AUDIO_SPEECH_PROVIDERS and
 * AUDIO_TRANSCRIPTION_PROVIDERS, so the audio slice is split the same way.
 */
const TRANSCRIPTION = /speech-to-text|audio-isolation|transcri/i;
const audio = byModality("audio");

const SLICES = [
  {
    file: "imageModels.ts",
    symbol: "KIE_IMAGE_MODELS",
    label: "image-generation",
    rows: byModality("image"),
  },
  {
    file: "videoModels.ts",
    symbol: "KIE_VIDEO_MODELS",
    label: "video-generation",
    rows: byModality("video"),
  },
  {
    file: "musicModels.ts",
    symbol: "KIE_MUSIC_MODELS",
    label: "music-generation",
    rows: byModality("music"),
  },
  { file: "chatModels.ts", symbol: "KIE_CHAT_MODELS", label: "chat", rows: byModality("chat") },
  {
    file: "audioModels.ts",
    symbol: "KIE_SPEECH_MODELS",
    label: "speech-synthesis",
    rows: audio.filter((m) => !TRANSCRIPTION.test(m.id)),
    extra: {
      symbol: "KIE_TRANSCRIPTION_MODELS",
      rows: audio.filter((m) => TRANSCRIPTION.test(m.id)),
    },
  },
];

function render({ symbol, label, rows, extra }) {
  const head = `/**
 * KIE ${label} model catalog — GENERATED, do not edit by hand.
 *
 * Source: open-sse/config/providers/registry/kie/catalog.json
 * Regenerate: node scripts/kie/generate-kie-registry.mjs
 *
 * ${catalog.length} endpoints behind KIE's ${raw.marketCards} market cards
 * (${Object.entries(counts)
   .map(([k, v]) => `${k}: ${v}`)
   .join(", ")}); this file carries the
 * ${label} ones. \`requiredInput\` holds fields the gateway fills in itself,
 * \`callerRequired\` the ones only the caller can provide.
 */

export interface KieModelEntry {
  id: string;
  name: string;
  isMarket?: boolean;
  /** Defaults merged into the task \`input\` when the caller omits them. */
  requiredInput?: Record<string, unknown>;
  /** Fields the caller must supply; the handler rejects the request without them. */
  callerRequired?: string[];
}

export const ${symbol}: KieModelEntry[] = [
${rows.map(entryLine).join("\n")}
];
`;
  if (!extra) return head;
  return `${head}
export const ${extra.symbol}: KieModelEntry[] = [
${extra.rows.map(entryLine).join("\n")}
];
`;
}

let stale = false;
for (const slice of SLICES) {
  // imageModels.ts predates the split and still exports the image-specific
  // interface name imageRegistry.ts imports; keep that alias.
  const body =
    slice.file === "imageModels.ts"
      ? render(slice).replace(/KieModelEntry/g, "KieImageModelEntry")
      : render(slice);
  const target = join(REGISTRY, slice.file);
  if (CHECK) {
    let current = "";
    try {
      current = readFileSync(target, "utf8");
    } catch {
      current = "";
    }
    if (current !== body) {
      console.error(`stale: ${slice.file}`);
      stale = true;
    }
  } else {
    writeFileSync(target, body);
    console.log(
      `wrote ${slice.file} — ${slice.rows.length + (slice.extra?.rows.length ?? 0)} endpoints`
    );
  }
}

if (CHECK) {
  if (stale) {
    console.error("run: node scripts/kie/generate-kie-registry.mjs");
    process.exit(1);
  }
  console.log(`kie registry up to date (${catalog.length} endpoints)`);
}

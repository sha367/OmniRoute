/**
 * KIE chat model catalog — GENERATED, do not edit by hand.
 *
 * Source: open-sse/config/providers/registry/kie/catalog.json
 * Regenerate: node scripts/kie/generate-kie-registry.mjs
 *
 * 200 endpoints behind KIE's 98 market cards
 * (image: 54, video: 69, chat: 52, audio: 5, music: 20); this file carries the
 * chat ones. `requiredInput` holds fields the gateway fills in itself,
 * `callerRequired` the ones only the caller can provide.
 */

export interface KieModelEntry {
  id: string;
  name: string;
  isMarket?: boolean;
  /** Defaults merged into the task `input` when the caller omits them. */
  requiredInput?: Record<string, unknown>;
  /** Fields the caller must supply; the handler rejects the request without them. */
  callerRequired?: string[];
}

export const KIE_CHAT_MODELS: KieModelEntry[] = [
  { id: "claude-fable-5", name: "Claude Fable 5", isMarket: true },
  { id: "claude-haiku-4-5", name: "Claude Haiku 4 5", isMarket: true },
  { id: "claude-opus-4-5", name: "Claude Opus 4 5", isMarket: true },
  { id: "claude-opus-4-6", name: "Claude Opus 4 6", isMarket: true },
  { id: "claude-opus-4-7", name: "Claude Opus 4 7", isMarket: true },
  { id: "claude-opus-4-8", name: "Claude Opus 4 8", isMarket: true },
  { id: "claude-opus-5", name: "Claude Opus 5", isMarket: true },
  { id: "claude-sonnet-4-5", name: "Claude Sonnet 4 5", isMarket: true },
  { id: "claude-sonnet-4-6", name: "Claude Sonnet 4 6", isMarket: true },
  { id: "claude-sonnet-5", name: "Claude Sonnet 5", isMarket: true },
  { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash", isMarket: true },
  { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro", isMarket: true },
  { id: "gemini-3-5-flash", name: "Gemini 3 5 Flash", isMarket: true },
  { id: "gemini-3-5-flash-openai", name: "Gemini 3 5 Flash Openai", isMarket: true },
  { id: "gemini-3-6-flash", name: "Gemini 3 6 Flash", isMarket: true },
  { id: "gemini-3-6-flash-openai", name: "Gemini 3 6 Flash Openai", isMarket: true },
  { id: "gemini-3-7-flash", name: "Gemini 3 7 Flash", isMarket: true },
  { id: "gemini-3-7-flash-openai", name: "Gemini 3 7 Flash Openai", isMarket: true },
  { id: "gemini-3-flash", name: "Gemini 3 Flash", isMarket: true },
  { id: "gemini-3-flash-v1betamodels", name: "Gemini 3 Flash V1betamodels", isMarket: true },
  { id: "gemini-3-pro", name: "Gemini 3 Pro", isMarket: true },
  { id: "gemini-3.1-pro", name: "Gemini 3.1 Pro", isMarket: true },
  { id: "gemini-omni-audio", name: "Gemini Omni Audio", isMarket: true },
  { id: "gemini-omni-character", name: "Gemini Omni Character", isMarket: true },
  { id: "gpt-5-2", name: "Gpt 5 2", isMarket: true },
  { id: "gpt-5-4", name: "Gpt 5 4", isMarket: true },
  { id: "gpt-5-5", name: "Gpt 5 5", isMarket: true },
  { id: "gpt-5-6-luna", name: "Gpt 5 6 Luna", isMarket: true },
  { id: "gpt-5-6-sol", name: "Gpt 5 6 Sol", isMarket: true },
  { id: "gpt-5-6-terra", name: "Gpt 5 6 Terra", isMarket: true },
  { id: "gpt-5-codex", name: "Gpt 5 Codex", isMarket: true },
  { id: "gpt-5.1-codex", name: "Gpt 5.1 Codex", isMarket: true },
  { id: "gpt-5.2-codex", name: "Gpt 5.2 Codex", isMarket: true },
  { id: "gpt-5.3-codex", name: "Gpt 5.3 Codex", isMarket: true },
  { id: "gpt-5.4-codex", name: "Gpt 5.4 Codex", isMarket: true },
  { id: "grok-4-3", name: "Grok 4 3", isMarket: true },
  { id: "grok-4-5", name: "Grok 4 5", isMarket: true },
  { id: "grok-4-6", name: "Grok 4 6", isMarket: true },
  {
    id: "grok-imagine/extend",
    name: "Grok Imagine Extend",
    isMarket: true,
    callerRequired: ["task_id"],
  },
  {
    id: "grok-imagine/upscale",
    name: "Grok Imagine Upscale",
    isMarket: true,
    callerRequired: ["task_id"],
  },
  {
    id: "infinitalk/from-audio",
    name: "Infinitalk From Audio",
    isMarket: true,
    callerRequired: ["image_url", "audio_url"],
  },
  { id: "omnihuman-1-5", name: "Omnihuman 1 5", isMarket: true },
  {
    id: "omnihuman-1-5/human-identification",
    name: "Omnihuman 1 5 Human Identification",
    isMarket: true,
  },
  {
    id: "omnihuman-1-5/subject-detection",
    name: "Omnihuman 1 5 Subject Detection",
    isMarket: true,
  },
  { id: "pixverse-v6/extend", name: "Pixverse V6 Extend", isMarket: true },
  { id: "pixverse-v6/transition", name: "Pixverse V6 Transition", isMarket: true },
  { id: "runway", name: "Runway", isMarket: true },
  { id: "v3-api", name: "V3 Api", isMarket: true },
  {
    id: "wan/2-2-animate-move",
    name: "Wan 2 2 Animate Move",
    isMarket: true,
    callerRequired: ["video_url", "image_url"],
  },
  {
    id: "wan/2-2-animate-replace",
    name: "Wan 2 2 Animate Replace",
    isMarket: true,
    callerRequired: ["video_url", "image_url"],
  },
  { id: "wan/2-7-r2v", name: "Wan 2 7 R2v", isMarket: true },
  { id: "wan/2-7-videoedit", name: "Wan 2 7 Videoedit", isMarket: true },
];

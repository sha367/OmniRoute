/**
 * KIE music-generation model catalog — GENERATED, do not edit by hand.
 *
 * Source: open-sse/config/providers/registry/kie/catalog.json
 * Regenerate: node scripts/kie/generate-kie-registry.mjs
 *
 * 198 endpoints behind KIE's 98 market cards
 * (image: 55, video: 80, chat: 38, audio: 5, music: 20); this file carries the
 * music-generation ones. `requiredInput` holds fields the gateway fills in itself,
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

export const KIE_MUSIC_MODELS: KieModelEntry[] = [
  { id: "ai-music-api/add-instrumental", name: "Ai Music Api Add Instrumental", isMarket: true },
  { id: "ai-music-api/add-vocals", name: "Ai Music Api Add Vocals", isMarket: true },
  { id: "ai-music-api/boost-music-style", name: "Ai Music Api Boost Music Style", isMarket: true },
  { id: "ai-music-api/check-voice", name: "Ai Music Api Check Voice", isMarket: true },
  {
    id: "ai-music-api/convert-to-wav-format",
    name: "Ai Music Api Convert To Wav Format",
    isMarket: true,
  },
  { id: "ai-music-api/cover-generate", name: "Ai Music Api Cover Generate", isMarket: true },
  {
    id: "ai-music-api/create-music-video",
    name: "Ai Music Api Create Music Video",
    isMarket: true,
  },
  { id: "ai-music-api/extend", name: "Ai Music Api Extend", isMarket: true },
  { id: "ai-music-api/generate", name: "Ai Music Api Generate", isMarket: true },
  { id: "ai-music-api/generate-lyrics", name: "Ai Music Api Generate Lyrics", isMarket: true },
  {
    id: "ai-music-api/generate-midi-from-audio",
    name: "Ai Music Api Generate Midi From Audio",
    isMarket: true,
  },
  { id: "ai-music-api/generate-persona", name: "Ai Music Api Generate Persona", isMarket: true },
  { id: "ai-music-api/generate-voice", name: "Ai Music Api Generate Voice", isMarket: true },
  { id: "ai-music-api/mashup", name: "Ai Music Api Mashup", isMarket: true },
  { id: "ai-music-api/replace-section", name: "Ai Music Api Replace Section", isMarket: true },
  { id: "ai-music-api/separate-vocals", name: "Ai Music Api Separate Vocals", isMarket: true },
  { id: "ai-music-api/sounds", name: "Ai Music Api Sounds", isMarket: true },
  {
    id: "ai-music-api/timeStamped-lyrics",
    name: "Ai Music Api TimeStamped Lyrics",
    isMarket: true,
  },
  {
    id: "ai-music-api/upload-and-cover-audio",
    name: "Ai Music Api Upload And Cover Audio",
    isMarket: true,
  },
  {
    id: "ai-music-api/upload-and-extend-audio",
    name: "Ai Music Api Upload And Extend Audio",
    isMarket: true,
  },
];

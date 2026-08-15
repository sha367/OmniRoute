/**
 * KIE speech-synthesis model catalog — GENERATED, do not edit by hand.
 *
 * Source: open-sse/config/providers/registry/kie/catalog.json
 * Regenerate: node scripts/kie/generate-kie-registry.mjs
 *
 * 200 endpoints behind KIE's 98 market cards
 * (image: 54, video: 69, chat: 52, audio: 5, music: 20); this file carries the
 * speech-synthesis ones. `requiredInput` holds fields the gateway fills in itself,
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

export const KIE_SPEECH_MODELS: KieModelEntry[] = [
  { id: "elevenlabs/text-to-dialogue-v3", name: "Elevenlabs Text To Dialogue V3", isMarket: true },
  {
    id: "elevenlabs/text-to-speech-multilingual-v2",
    name: "Elevenlabs Text To Speech Multilingual V2",
    isMarket: true,
  },
  {
    id: "elevenlabs/text-to-speech-turbo-2-5",
    name: "Elevenlabs Text To Speech Turbo 2 5",
    isMarket: true,
  },
  { id: "google/gemini-2-5-pro-tts", name: "Google Gemini 2 5 Pro Tts", isMarket: true },
  { id: "google/gemini-3-1-flash-tts", name: "Google Gemini 3 1 Flash Tts", isMarket: true },
];

export const KIE_TRANSCRIPTION_MODELS: KieModelEntry[] = [];

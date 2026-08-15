/**
 * KIE video-generation model catalog — GENERATED, do not edit by hand.
 *
 * Source: open-sse/config/providers/registry/kie/catalog.json
 * Regenerate: node scripts/kie/generate-kie-registry.mjs
 *
 * 198 endpoints behind KIE's 98 market cards
 * (image: 55, video: 80, chat: 38, audio: 5, music: 20); this file carries the
 * video-generation ones. `requiredInput` holds fields the gateway fills in itself,
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

export const KIE_VIDEO_MODELS: KieModelEntry[] = [
  { id: "bytedance/seedance-1.5-pro", name: "Bytedance Seedance 1.5 Pro", isMarket: true },
  { id: "bytedance/seedance-2", name: "Bytedance Seedance 2", isMarket: true },
  { id: "bytedance/seedance-2-5", name: "Bytedance Seedance 2 5", isMarket: true },
  { id: "bytedance/seedance-2-fast", name: "Bytedance Seedance 2 Fast", isMarket: true },
  { id: "bytedance/seedance-2-mini", name: "Bytedance Seedance 2 Mini", isMarket: true },
  {
    id: "bytedance/v1-lite-image-to-video",
    name: "Bytedance V1 Lite I2V",
    isMarket: true,
    callerRequired: ["image_url"],
  },
  { id: "bytedance/v1-lite-text-to-video", name: "Bytedance V1 Lite T2V", isMarket: true },
  {
    id: "bytedance/v1-pro-fast-image-to-video",
    name: "Bytedance V1 Pro Fast I2V",
    isMarket: true,
    callerRequired: ["image_url"],
  },
  {
    id: "bytedance/v1-pro-image-to-video",
    name: "Bytedance V1 Pro I2V",
    isMarket: true,
    callerRequired: ["image_url"],
  },
  { id: "bytedance/v1-pro-text-to-video", name: "Bytedance V1 Pro T2V", isMarket: true },
  { id: "gemini-omni-video", name: "Gemini Omni Video", isMarket: true },
  { id: "grok-imagine-video-1-5-preview", name: "Grok Imagine Video 1 5 Preview", isMarket: true },
  {
    id: "grok-imagine/extend",
    name: "Grok Imagine Extend",
    isMarket: true,
    callerRequired: ["task_id"],
  },
  { id: "grok-imagine/image-to-video", name: "Grok Imagine I2V", isMarket: true },
  { id: "grok-imagine/text-to-video", name: "Grok Imagine T2V", isMarket: true },
  {
    id: "hailuo/02-image-to-video-pro",
    name: "Hailuo 02 I2V Pro",
    isMarket: true,
    callerRequired: ["image_url"],
  },
  {
    id: "hailuo/02-image-to-video-standard",
    name: "Hailuo 02 I2V Standard",
    isMarket: true,
    callerRequired: ["image_url"],
  },
  { id: "hailuo/02-text-to-video-pro", name: "Hailuo 02 T2V Pro", isMarket: true },
  { id: "hailuo/02-text-to-video-standard", name: "Hailuo 02 T2V Standard", isMarket: true },
  {
    id: "hailuo/2-3-image-to-video-pro",
    name: "Hailuo 2 3 I2V Pro",
    isMarket: true,
    callerRequired: ["image_url"],
  },
  {
    id: "hailuo/2-3-image-to-video-standard",
    name: "Hailuo 2 3 I2V Standard",
    isMarket: true,
    callerRequired: ["image_url"],
  },
  {
    id: "happyhorse-1-1/image-to-video",
    name: "Happyhorse 1 1 I2V",
    isMarket: true,
    callerRequired: ["image_urls"],
  },
  {
    id: "happyhorse-1-1/reference-to-video",
    name: "Happyhorse 1 1 Reference To Video",
    isMarket: true,
  },
  { id: "happyhorse-1-1/text-to-video", name: "Happyhorse 1 1 T2V", isMarket: true },
  { id: "happyhorse/image-to-video", name: "Happyhorse I2V", isMarket: true },
  { id: "happyhorse/reference-to-video", name: "Happyhorse Reference To Video", isMarket: true },
  { id: "happyhorse/text-to-video", name: "Happyhorse T2V", isMarket: true },
  { id: "happyhorse/video-edit", name: "Happyhorse Video Edit", isMarket: true },
  {
    id: "infinitalk/from-audio",
    name: "Infinitalk From Audio",
    isMarket: true,
    callerRequired: ["image_url", "audio_url"],
  },
  {
    id: "kling-2.6/image-to-video",
    name: "Kling 2.6 I2V",
    isMarket: true,
    callerRequired: ["image_urls"],
  },
  {
    id: "kling-2.6/motion-control",
    name: "Kling 2.6 Motion Control",
    isMarket: true,
    callerRequired: ["input_urls", "video_urls"],
  },
  { id: "kling-2.6/text-to-video", name: "Kling 2.6 T2V", isMarket: true },
  { id: "kling-3.0-omni/image-to-video", name: "Kling 3.0 Omni I2V", isMarket: true },
  {
    id: "kling-3.0-omni/reference-to-video",
    name: "Kling 3.0 Omni Reference To Video",
    isMarket: true,
  },
  { id: "kling-3.0-omni/text-to-video", name: "Kling 3.0 Omni T2V", isMarket: true },
  { id: "kling-3.0-omni/transformation", name: "Kling 3.0 Omni Transformation", isMarket: true },
  {
    id: "kling-3.0/motion-control",
    name: "Kling 3.0 Motion Control",
    isMarket: true,
    callerRequired: ["input_urls", "video_urls"],
  },
  { id: "kling-3.0/video", name: "Kling 3.0 Video", isMarket: true },
  {
    id: "kling/ai-avatar-pro",
    name: "Kling Ai Avatar Pro",
    isMarket: true,
    callerRequired: ["image_url", "audio_url"],
  },
  {
    id: "kling/ai-avatar-standard",
    name: "Kling Ai Avatar Standard",
    isMarket: true,
    callerRequired: ["image_url", "audio_url"],
  },
  {
    id: "kling/v2-1-master-image-to-video",
    name: "Kling V2 1 Master I2V",
    isMarket: true,
    callerRequired: ["image_url"],
  },
  { id: "kling/v2-1-master-text-to-video", name: "Kling V2 1 Master T2V", isMarket: true },
  { id: "kling/v2-1-pro", name: "Kling V2 1 Pro", isMarket: true, callerRequired: ["image_url"] },
  {
    id: "kling/v2-1-standard",
    name: "Kling V2 1 Standard",
    isMarket: true,
    callerRequired: ["image_url"],
  },
  { id: "kling/v2-5-turbo-image-to-video-pro", name: "Kling V2 5 Turbo I2V Pro", isMarket: true },
  { id: "kling/v2-5-turbo-text-to-video-pro", name: "Kling V2 5 Turbo T2V Pro", isMarket: true },
  {
    id: "kling/v3-turbo-image-to-video",
    name: "Kling V3 Turbo I2V",
    isMarket: true,
    requiredInput: { resolution: "1K" },
    callerRequired: ["image_urls"],
  },
  {
    id: "kling/v3-turbo-text-to-video",
    name: "Kling V3 Turbo T2V",
    isMarket: true,
    requiredInput: { resolution: "1K" },
  },
  { id: "minimax-h3/image-to-video", name: "Minimax H3 I2V", isMarket: true },
  { id: "minimax-h3/reference-to-video", name: "Minimax H3 Reference To Video", isMarket: true },
  { id: "minimax-h3/text-to-video", name: "Minimax H3 T2V", isMarket: true },
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
  { id: "pixverse-v6/image-to-video", name: "Pixverse V6 I2V", isMarket: true },
  { id: "pixverse-v6/reference-to-video", name: "Pixverse V6 Reference To Video", isMarket: true },
  { id: "pixverse-v6/text-to-video", name: "Pixverse V6 T2V", isMarket: true },
  { id: "pixverse-v6/transition", name: "Pixverse V6 Transition", isMarket: true },
  { id: "runway/extend-ai-video", name: "Runway Extend Ai Video", isMarket: true },
  {
    id: "topaz/video-upscale",
    name: "Topaz Video Upscale",
    isMarket: true,
    callerRequired: ["video_url"],
  },
  { id: "veo-3-1", name: "Veo 3 1", isMarket: true },
  { id: "veo/extend", name: "Veo Extend", isMarket: true },
  { id: "veo/get-1080p-video", name: "Veo Get 1080p Video", isMarket: true },
  { id: "veo/get-4k-video", name: "Veo Get 4k Video", isMarket: true },
  {
    id: "volcengine/video-to-video-lip-sync",
    name: "Volcengine Video To Video Lip Sync",
    isMarket: true,
  },
  {
    id: "wan/2-2-a14b-image-to-video-turbo",
    name: "Wan 2 2 A14b I2V Turbo",
    isMarket: true,
    callerRequired: ["image_url"],
  },
  {
    id: "wan/2-2-a14b-speech-to-video-turbo",
    name: "Wan 2 2 A14b Speech To Video Turbo",
    isMarket: true,
    callerRequired: ["image_url", "audio_url"],
  },
  { id: "wan/2-2-a14b-text-to-video-turbo", name: "Wan 2 2 A14b T2V Turbo", isMarket: true },
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
  { id: "wan/2-5-image-to-video", name: "Wan 2 5 I2V", isMarket: true },
  { id: "wan/2-5-text-to-video", name: "Wan 2 5 T2V", isMarket: true },
  {
    id: "wan/2-6-image-to-video",
    name: "Wan 2 6 I2V",
    isMarket: true,
    callerRequired: ["image_urls"],
  },
  { id: "wan/2-6-text-to-video", name: "Wan 2 6 T2V", isMarket: true },
  {
    id: "wan/2-6-video-to-video",
    name: "Wan 2 6 Video To Video",
    isMarket: true,
    callerRequired: ["video_urls"],
  },
  { id: "wan/2-7-image-to-video", name: "Wan 2 7 I2V", isMarket: true },
  { id: "wan/2-7-r2v", name: "Wan 2 7 R2v", isMarket: true },
  { id: "wan/2-7-text-to-video", name: "Wan 2 7 T2V", isMarket: true },
  { id: "wan/2-7-videoedit", name: "Wan 2 7 Videoedit", isMarket: true },
];

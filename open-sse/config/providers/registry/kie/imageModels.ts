/**
 * KIE image-generation model catalog — GENERATED, do not edit by hand.
 *
 * Source: open-sse/config/providers/registry/kie/catalog.json
 * Regenerate: node scripts/kie/generate-kie-registry.mjs
 *
 * 198 endpoints behind KIE's 98 market cards
 * (image: 55, video: 80, chat: 38, audio: 5, music: 20); this file carries the
 * image-generation ones. `requiredInput` holds fields the gateway fills in itself,
 * `callerRequired` the ones only the caller can provide.
 */

export interface KieImageModelEntry {
  id: string;
  name: string;
  isMarket?: boolean;
  /** Defaults merged into the task `input` when the caller omits them. */
  requiredInput?: Record<string, unknown>;
  /** Fields the caller must supply; the handler rejects the request without them. */
  callerRequired?: string[];
}

export const KIE_IMAGE_MODELS: KieImageModelEntry[] = [
  { id: "4o-image-api", name: "4o Image Api", isMarket: true },
  { id: "bytedance/seedream", name: "Bytedance Seedream", isMarket: true },
  {
    id: "bytedance/seedream-v4-edit",
    name: "Bytedance Seedream V4 Edit",
    isMarket: true,
    callerRequired: ["image_urls"],
  },
  { id: "bytedance/seedream-v4-text-to-image", name: "Bytedance Seedream V4 T2I", isMarket: true },
  {
    id: "flux-2/flex-image-to-image",
    name: "Flux 2 Flex I2I",
    isMarket: true,
    requiredInput: { resolution: "1K" },
    callerRequired: ["input_urls"],
  },
  {
    id: "flux-2/flex-text-to-image",
    name: "Flux 2 Flex T2I",
    isMarket: true,
    requiredInput: { resolution: "1K" },
  },
  {
    id: "flux-2/pro-image-to-image",
    name: "Flux 2 Pro I2I",
    isMarket: true,
    requiredInput: { resolution: "1K" },
    callerRequired: ["input_urls"],
  },
  {
    id: "flux-2/pro-text-to-image",
    name: "Flux 2 Pro T2I",
    isMarket: true,
    requiredInput: { resolution: "1K" },
  },
  { id: "flux1-kontext", name: "Flux1 Kontext", isMarket: true },
  { id: "google/imagen4", name: "Google Imagen4", isMarket: true },
  { id: "google/imagen4-fast", name: "Google Imagen4 Fast", isMarket: true },
  { id: "google/imagen4-ultra", name: "Google Imagen4 Ultra", isMarket: true },
  { id: "google/nano-banana", name: "Google Nano Banana", isMarket: true },
  {
    id: "google/nano-banana-edit",
    name: "Google Nano Banana Edit",
    isMarket: true,
    callerRequired: ["image_urls"],
  },
  { id: "gpt-image-2-image-to-image", name: "Gpt Image 2 I2I", isMarket: true },
  { id: "gpt-image-2-text-to-image", name: "Gpt Image 2 T2I", isMarket: true },
  {
    id: "gpt-image/1.5-image-to-image",
    name: "Gpt Image 1.5 I2I",
    isMarket: true,
    requiredInput: { quality: "basic" },
    callerRequired: ["input_urls"],
  },
  {
    id: "gpt-image/1.5-text-to-image",
    name: "Gpt Image 1.5 T2I",
    isMarket: true,
    requiredInput: { quality: "basic" },
  },
  {
    id: "grok-imagine-image-2-0/image-edit",
    name: "Grok Imagine Image 2 0 Image Edit",
    isMarket: true,
  },
  {
    id: "grok-imagine-image-2-0/segment-map",
    name: "Grok Imagine Image 2 0 Segment Map",
    isMarket: true,
  },
  {
    id: "grok-imagine-image-2-0/text-to-image",
    name: "Grok Imagine Image 2 0 T2I",
    isMarket: true,
  },
  {
    id: "grok-imagine/image-to-image",
    name: "Grok Imagine I2I",
    isMarket: true,
    callerRequired: ["image_urls"],
  },
  { id: "grok-imagine/text-to-image", name: "Grok Imagine T2I", isMarket: true },
  {
    id: "grok-imagine/upscale",
    name: "Grok Imagine Upscale",
    isMarket: true,
    callerRequired: ["task_id"],
  },
  {
    id: "ideogram/character",
    name: "Ideogram Character",
    isMarket: true,
    callerRequired: ["reference_image_urls"],
  },
  {
    id: "ideogram/character-edit",
    name: "Ideogram Character Edit",
    isMarket: true,
    callerRequired: ["image_url", "mask_url", "reference_image_urls"],
  },
  {
    id: "ideogram/character-remix",
    name: "Ideogram Character Remix",
    isMarket: true,
    callerRequired: ["image_url", "reference_image_urls"],
  },
  { id: "ideogram/v3-edit", name: "Ideogram V3 Edit", isMarket: true },
  { id: "ideogram/v3-remix", name: "Ideogram V3 Remix", isMarket: true },
  { id: "ideogram/v3-text-to-image", name: "Ideogram V3 T2I", isMarket: true },
  { id: "nano-banana-2", name: "Nano Banana 2", isMarket: true },
  { id: "nano-banana-2-lite", name: "Nano Banana 2 Lite", isMarket: true },
  { id: "nano-banana-pro", name: "Nano Banana Pro", isMarket: true },
  { id: "qwen/image-edit", name: "Qwen Image Edit", isMarket: true, callerRequired: ["image_url"] },
  { id: "qwen/image-to-image", name: "Qwen I2I", isMarket: true, callerRequired: ["image_url"] },
  { id: "qwen/text-to-image", name: "Qwen T2I", isMarket: true },
  {
    id: "qwen2/image-edit",
    name: "Qwen2 Image Edit",
    isMarket: true,
    callerRequired: ["image_url"],
  },
  { id: "qwen2/text-to-image", name: "Qwen2 T2I", isMarket: true },
  { id: "qwen3/image-to-image", name: "Qwen3 I2I", isMarket: true },
  { id: "qwen3/pro-image-to-image", name: "Qwen3 Pro I2I", isMarket: true },
  { id: "qwen3/pro-text-to-image", name: "Qwen3 Pro T2I", isMarket: true },
  { id: "qwen3/text-to-image", name: "Qwen3 T2I", isMarket: true },
  {
    id: "recraft/crisp-upscale",
    name: "Recraft Crisp Upscale",
    isMarket: true,
    callerRequired: ["image"],
  },
  {
    id: "recraft/remove-background",
    name: "Recraft Remove Background",
    isMarket: true,
    callerRequired: ["image"],
  },
  {
    id: "seedream/4.5-edit",
    name: "Seedream 4.5 Edit",
    isMarket: true,
    requiredInput: { quality: "basic" },
    callerRequired: ["image_urls"],
  },
  {
    id: "seedream/4.5-text-to-image",
    name: "Seedream 4.5 T2I",
    isMarket: true,
    requiredInput: { quality: "basic" },
  },
  {
    id: "seedream/5-lite-image-to-image",
    name: "Seedream 5 Lite I2I",
    isMarket: true,
    requiredInput: { quality: "basic" },
    callerRequired: ["image_urls"],
  },
  {
    id: "seedream/5-lite-text-to-image",
    name: "Seedream 5 Lite T2I",
    isMarket: true,
    requiredInput: { quality: "basic" },
  },
  {
    id: "seedream/5-pro-image-to-image",
    name: "Seedream 5 Pro I2I",
    isMarket: true,
    requiredInput: { quality: "basic" },
    callerRequired: ["image_urls"],
  },
  {
    id: "seedream/5-pro-layer-decomposition",
    name: "Seedream 5 Pro Layer Decomposition",
    isMarket: true,
  },
  {
    id: "seedream/5-pro-text-to-image",
    name: "Seedream 5 Pro T2I",
    isMarket: true,
    requiredInput: { quality: "basic" },
  },
  {
    id: "topaz/image-upscale",
    name: "Topaz Image Upscale",
    isMarket: true,
    callerRequired: ["image_url", "upscale_factor"],
  },
  { id: "wan/2-7-image", name: "Wan 2 7 Image", isMarket: true },
  {
    id: "wan/2-7-image-pro",
    name: "Wan 2 7 Image Pro",
    isMarket: true,
    callerRequired: ["hex", "ratio"],
  },
  { id: "z-image", name: "Z Image", isMarket: true },
];

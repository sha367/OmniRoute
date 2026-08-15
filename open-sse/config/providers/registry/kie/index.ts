import type { RegistryEntry } from "../../shared.ts";
import { KIE_CHAT_MODELS } from "./chatModels.ts";

export const kieProvider: RegistryEntry = {
  id: "kie",
  alias: "kie",
  format: "openai",
  executor: "default",
  baseUrl: "https://api.kie.ai/v1/chat/completions",
  authType: "apikey",
  authHeader: "bearer",
  defaultContextLength: 128000,
  models: KIE_CHAT_MODELS,
};

import {z} from "zod";
import {
  CLM_PROMPT_PLACEHOLDERS,
  RLM_PROMPT_PLACEHOLDERS
} from "./contants";

const schema = z.object({
  // RLM: Retrieval Language Model
  isRLMCustomPrompt: z.boolean(),
  rlmPrompt: z.string().optional(),
  rLlm: z.string().nonempty(),
  rApiKey: z.string().optional(),
  // CLM: Conversational Language Model
  isCLMCustomPrompt: z.boolean(),
  clmPrompt: z.string().optional(),
  cLlm: z.string().nonempty(),
  cApiKey: z.string().optional(),
}).refine((data) => {
  return !(data.isRLMCustomPrompt && !data.rlmPrompt);

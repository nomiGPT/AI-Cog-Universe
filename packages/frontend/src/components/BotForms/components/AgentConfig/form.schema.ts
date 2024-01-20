import {z} from "zod";

const schema = z.object({
  llm: z.string().nonempty(),
  api
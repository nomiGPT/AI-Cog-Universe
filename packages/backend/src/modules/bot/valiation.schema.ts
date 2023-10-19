import {
  BotAvatarType,
  BotType,
  VALID_BOT_NAME_REGEX,
} from '@my-monorepo/shared';
import { z } from 'zod';

const botBaseValidation = z.object({
  name: z.string().nonempty().regex(VALID_BOT_NAME_REGEX, {
    message: 'Name must be alphanumeric, underscores and dashes are allowed!',
  }),
  description: z.string().optional(),
  type: z.enum(
    [BotType.CONVERSATIONAL, BotType.RETRIEVAL_CONVERSATIONAL, BotType.AGENT],
    {
      errorMap: () => ({ message: 'Bot type error!' }),
    },
  ),
  configVersion: z.enum(['v0.0.1'], {
    errorMap: () => ({ message: 'Config version error!' }),
  }),
});

const imageAvatarValidation = z.object({
  type: z.enum([BotAvatarType.BOT_AVATAR_IMAGE], {
    errorMap: () => ({ message: 'Avatar type error!' }),
  }),
  
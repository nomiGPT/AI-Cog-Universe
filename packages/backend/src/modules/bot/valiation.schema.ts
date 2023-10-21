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
  url: z.string().url(),
});

const emoteAvatarValidation = z.object({
  type: z.enum([BotAvatarType.BOT_AVATAR_EMOTE], {
    errorMap: () => ({ message: 'Avatar type error!' }),
  }),
  backgroundColor: z.string().regex(/^#[0-9a-fA-F]{6}$/i),
});

const discordIntegrationValidation = z
  .object({
    isPrivate: z.boolean(),
    allowedChannels: z.array(z.string()),
  })
  .refine(
    ({ isPrivate, allowedChannels }) => {
      if (isPrivate && Array.isArray(allowedChannels)) {
        return allowedChannels.length > 0;
      }
      return !isPrivate;
    },
    { message: 'Discord integration error!' },
  );

const integrationValidation = z.object({
  discord: discordIntegrationValidation.optional(),
});

const baseBotConfigValidation = z.object({
  name: z.string().nonempty().regex(VALID_BOT_NAME_REGEX, {
    message: 'Name must be alphanumeric, underscores and dashes are allowed!',
  }),
  description: z.string().optional(),
  type: z.enum([BotType.CONVERSATIONAL, BotType.RETRIEVAL_CONVERSATIONAL], {
    errorMap: () => ({ message: 'Bot type error!' }),
  }),
  version: z.enum(['v0.0.1'], {
    errorMap: () => ({ message: 'Config version error!' }),
  }),
  avatar: z.union([imageAvatarValidation, emoteAvatarValidation]),
  thirdPartyIntegration: integrationValidation.optional(),
});

const lmConfigValidation = z.object({
  modelName: z.string().nonempty(),
  prompt: z.string().optional(),
  apiKey: z.string().optional(),
});

// ====================================
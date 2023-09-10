import {
  BotAvatar,
  ConversationalBotConfiguration,
  RcBotConfiguration,
  LmConfig,
  RcBot,
  ConversationalBot,
  ThirdPartyIntegration,
} from '@my-monorepo/shared/dist/types/bot/bot-configuration/0.0.1';
import { BOT_CONFIG_VERSION_V0_0_1 } from '@my-monorepo/shared';
import { BotType } from '@my-monorepo/shared';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class ConversationalBotConfigurationDto
  implements ConversationalBotConfiguration
{
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  version: typeof BOT_CONFIG_VERSION_V0_0_1;

  @ApiProperty()
  type: typeof BotType.CONVERSATIONAL;

  @ApiProperty()
  description: string;

  @ApiProperty()
  avatar: BotAvatar;

  @ApiProperty()
  lm?: LmConfig;

  @ApiProperty()
  thirdPartyIntegration?: ThirdPartyIntegration;
}

export class RcBotConfigurationDto implements RcBotConfiguration {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  version: typeof BOT_CONFIG_VERSION_V0_0_1;

  @ApiProperty()
  type: typeof BotType.RETRIEVAL_CONVERSATIONAL;

  @ApiProperty()
  description: string;

  @ApiProperty()
  avatar: BotAvatar;

  @ApiProperty()
  retrievalLm?: LmConfig;

  @ApiProperty()
  conversationalLm?: LmConfig;

  @ApiProperty()
  thirdPartyIntegration?: ThirdPartyIntegration;
}

export class RcBotDto implements RcBot {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
 
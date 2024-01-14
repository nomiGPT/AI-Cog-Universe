import {InputType} from "./form.schema";
import {BOT_CONFIG_VERSION_LATEST, NewBot, BotAvatarType, BotType} from "@my-monorepo/shared";

export function getNewBot(data: InputType): NewBot {
  const {botInfo, botConfig, integration} = data;
  return {
    name: botInfo.name,
    description: botInfo.description ?? null,
    type: BotType.RETRIEVAL_CONVERSATIONAL,
    configVersion: BOT_CONFIG_VERSION_LATEST,
    configuration: {
      nam
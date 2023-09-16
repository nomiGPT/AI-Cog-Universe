import { ConversationalBotConfiguration } from '@my-monorepo/shared/dist/types/bot/bot-configuration/0.0.1';
import {
  BotType,
  InternalServerException,
  KeyNotSetException,
} from '@my-monorepo/shared';
import { ConversationalChain } from '../chains';
import { BufferMemory } from 'langchain/memory';
import { BaseChainBuilder, IChainBuilderInput } from './base-chain-builder';

export type ConversationalChainBuilderInput = Omit<
  IChainBuilderInput & {
    botConfig: ConversationalBotConfiguration;
  },
  'vectorStore'
>;
export class ConversationalChainBuilder extends BaseChainBuilder {
  build(input: ConversationalChainBuilderInput) {
    const botConfig = input.botConfig;
    if (botConfig.type !== BotType.CONVERSATIONAL) {
      throw new InternalServerException('Bot type error');
    }

    const llm 
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BotType, Conversation, KeyNotSetException } from '@my-monorepo/shared';
import { CallbackManager } from 'langchain/callbacks';
import createLlm from '../../llm/create-llm';
import { BufferMemory } from 'langchain/memory';
import ConversationalChain from 'src/lib/chains/conversational.chain';
import { ChatHistoryBuilderService } from '../../chat-history-builder/chat-history-builder.service';
import { ConversationalChainBuilder } from 'src/lib/chain-builder';

@Injectable()
export class ConversationalChainService extends ConversationalChainBuilder {
  constructor(
    private conf
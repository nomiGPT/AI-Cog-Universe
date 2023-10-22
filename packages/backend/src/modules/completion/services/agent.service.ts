import { Injectable, Logger } from '@nestjs/common';
import { AgentService as AgentBuilderService } from 'src/services/chains/agent/agent.service';
import {
  Bot,
  BotType,
  Conversation,
  InternalServerException,
  NewMessage,
} from '@my-monorepo/shared';
import { Subject } from 'rxjs';
import { CallbackManager } from 'langchain/callbacks';
import { ChatHistoryBuilderService } from 'src/services/chat-history-builder/chat-history-builder.service';
import { BaseChainStream } from './base-chain-stream';
import
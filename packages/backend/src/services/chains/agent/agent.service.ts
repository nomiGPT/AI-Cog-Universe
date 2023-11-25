import { Injectable, Logger } from '@nestjs/common';
import { AgentBuilder } from 'src/lib/chain-builder';
import { Conversation } from '@my-monorepo/shared';
import { CallbackManager } from 'langchain/callbacks';
import { ChatHistoryBuilderService } from 'src/services/chat-history-builder/chat-history-builder.service';
import { AgentLLMBuilder } from 'src/lib/llm-builder/agent-llm-builder';
import { formatToOpenAITool, SerpAPI, WolframAlphaTool 
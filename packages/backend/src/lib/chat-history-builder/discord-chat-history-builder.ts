import {
  DiscordMessage,
  MessageTypeNotSupportedException,
} from '@my-monorepo/shared';
import { ChatMessageHistory } from 'langchain/memory';
import { ChatMessage } from '../chat-message';
import { BaseChatHistoryBuilder } 
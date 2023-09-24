import {
  MessageTypeNotSupportedException,
  SlackMessage,
} from '@my-monorepo/shared';
import { ChatMessageHistory } from 'langchain/memory';
import { ChatMessage } from '../chat-message';
import { BaseChatHistoryBuilder } from './base-chat-history-builder';

export class SlackChatHistoryBuilder extends BaseChatHistoryBuilder<SlackMessage> {
  build(chatHistory: SlackMessage[]): ChatMessageHistory {
    const messages = chatHistory.map((message) => {
      switch (message.isBot) {
        case false:
          return ChatMessage.createHumanM
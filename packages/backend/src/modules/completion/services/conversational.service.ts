import { Injectable, Logger } from '@nestjs/common';
import { ConversationalChainService } from 'src/services/chains/conversational-chain/conversational-chain.service';
import { Bot, BotType, Conversation, NewMessage } from '@my-monorepo/shared';
import { Subject } from 'rxjs';
import { CallbackManager } from 'langchain/callbacks';
import { ChatHistoryBuilderService } from 'src/services/chat-history-builder/chat-history-builder.service';
import { BaseChainStream } from 'src/modules/completion/services/base-chain-stream';

@Injectable()
export class ConversationalService extends BaseChainStream {
  logger = new Logger(ConversationalService.name);

  constructor(
    private conversationalChainService: ConversationalChainService,
    private chatHistoryBuilder: ChatHistoryBuilderService,
  ) {
    super();
  }

  protected async getCompletion(
    question: string,
    conversation: Conversation,
    subject: Subject<NewMessage>,
  ) {
    const bot = conversation.bot as Bot;
    if (bot.type !== BotType.CONVERSATIONAL) {
      throw Error('Bot is not of the Conversational type');
    }

    const callbackManager: CallbackManager = CallbackManager.fromHan
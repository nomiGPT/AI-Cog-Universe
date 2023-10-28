import { Injectable } from '@nestjs/common';
import { RetrievalConversationalService } from './retrieval-conversational.service';
import { ConversationalService } from './conversational.service';
import { BotType } from '@prisma/client';
import { BotTypeNotSupportedException } from '@my-monorepo/shared';
import { AgentService } from './agent.service';

@Injectable()
export class ChainStreamService {
  constructor(
    private rcService: RetrievalConversationalService,
    private conversationalService: ConversationalService,
    private agentService: AgentService,
  ) {}

  getService(type: 
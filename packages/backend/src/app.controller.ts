import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { ConversationRepository } from 'src/repositories/conversation/conversation.repository';
import { Conversation } from '@prisma/client';
import { SecureRequest } from './types/secure-request';

@Controller('api')
export class AppController {
  constructor(private conversationRepository: ConversationRepository) {}

  @Get('conversations')
  async getConversations(
    @Request() request: SecureRequest,
  ): Promise<Conversation[]> {
    const creatorId = request.authPayload.uid;
    return await this.conversationRepository.conversati
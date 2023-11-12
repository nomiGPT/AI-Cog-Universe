import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Conversation, NewConversation } from '@my-monorepo/shared';

@Injectable()
export class ConversationRepository {
  constructor(private prisma: PrismaService) {}

  async conversations(creatorId: string): Promise<Conversation[]> {
    return this.prisma.conversation.findMany({
      where: {
        creatorId,
      },
      orderBy: {
        id: 'desc',
      },
    }) as unknown as Promise<Conversation[]>;
  }

  async createConversation(
    creatorId: string,
    data: NewConversation,
  ): Promise<Conversation> {
    const conversationData: Prisma.ConversationCreateInput = {
      title: data.title,
      chatHistory: {
        create: [],
      },
      bot: {
    
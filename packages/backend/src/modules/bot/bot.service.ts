import { Injectable } from '@nestjs/common';
import { BotRepository } from 'src/repositories/bot/bot.repository';
import { Prisma } from '@prisma/client';
import { Bot, NewBot, UpdatedBot } from '@my-monorepo/shared';

@Injectable()
export class BotService {
  constructor(private botRepository: BotRepository) {}

  createBot(creatorId: string, newBot: NewBot) {
    const copy = { ...newBot };
    delete copy.boundDocumentId;
    const botData: Prisma.BotCreateInput = {
      ...copy,
      boundDocument: newBot.boundDocumentId
        ? { connect: { id: newBot.boundDocumentId } }
        : undefined,
      creator: {
        connect
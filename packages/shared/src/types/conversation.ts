import {Message, Conversation as PrismaConversation} from '@prisma/client';
import {DocumentMetadata} from "./document-metadata";
import {Bot} from "./bot";
import {Account} from "./account";

export type Conversation = PrismaConversation & {
  docu
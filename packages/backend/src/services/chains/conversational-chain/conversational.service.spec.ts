import { Test, TestingModule } from '@nestjs/testing';
import { ConversationalChainService } from './conversational-chain.service';

describe('ConversationalService', () => {
  let service: ConversationalChainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      prov
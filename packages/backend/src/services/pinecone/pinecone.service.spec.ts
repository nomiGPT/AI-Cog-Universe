import { Test, TestingModule } from '@nestjs/testing';
import { PineconeService } from './pinecone.service';

describe('PineconeService', () => {
  let service: PineconeService;

  beforeEach(async () => {
    const module: TestingModule = aw
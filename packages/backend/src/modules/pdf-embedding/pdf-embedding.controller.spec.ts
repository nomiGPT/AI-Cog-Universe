import { Test, TestingModule } from '@nestjs/testing';
import { PdfEmbeddingController } from './pdf-embedding.controller';

describe('PdfEmbeddingController', () => {
  let controller: PdfEmbeddingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfEmbeddingControl
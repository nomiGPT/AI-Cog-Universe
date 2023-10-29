import { Inject, Injectable, Scope } from '@nestjs/common';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { DOC_EMBEDDING_MODEL, ENV } from 'src/constants';
import { ConfigService } from '@nestjs/config';
import { PineconeService } from 'src/services/pinecone/pinecone.service';
import { WebPDFLoader } from 'langchain/document_loaders/web/pdf';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { REQUEST } from '@nestjs/core';
import { SecureRequest } from 'src/types/secure-request';

@Injectable({
  scope: Scope.REQUEST,
})
export class StoreService {
  constructor(
    @Inject('PARENT_SPLITTER')
    private readonly splitter: RecursiveCharacterTextSplit
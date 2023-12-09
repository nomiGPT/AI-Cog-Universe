import { Module } from '@nestjs/common';
import { PineconeService } from './pinecone/pinecone.service';
import { PdfSplitterService } from './pdf-splitter/pdf-splitter.service';
import { DocumentNamespaceService } from './document-namespace/document-namespace.service';
import { VectorStoreModule } from './vector-store/v
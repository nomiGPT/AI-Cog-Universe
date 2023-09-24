
import {
  ConversationalRetrievalQAChain,
  ConversationalRetrievalQAChainInput,
  LLMChain,
  loadQAChain,
  QAChainParams,
} from 'langchain/chains';
import { ChainValues } from 'langchain/schema';
import { BaseRetriever } from 'langchain/schema/retriever';
import { CallbackManagerForChainRun } from 'langchain/callbacks';
import { Document } from 'langchain/document';
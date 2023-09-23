import { ChatPromptTemplate, MessagesPlaceholder } from 'langchain/prompts';
import { Runnable, RunnableSequence } from 'langchain/schema/runnable';
import { AgentExecutor } from 'langchain/agents';
import { formatToOpenAIToolMessages } from 'langchain/agents/format_scratchpad/openai_tools';
import {
  OpenAIToolsAgentOutputParser,
  type ToolsAgentStep,
} from 'langchain/agents/openai/output_parser';
import { StructuredTool } from 'langchain/tools';
import { Bot, BotTypeNotSupportedException } from '@my-monorepo/shared';
import { ChatMessage } from 'src/lib/chat-message';
import { Base
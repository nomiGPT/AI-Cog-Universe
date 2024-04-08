import React, {createContext, useRef} from "react";
import QueryForm from "@/components/QueryForm";
import ChatThread from "@/components/ChatThread";
import useChatHistory from "@/hooks/use-chat-history.hook";
import useConversation from "@/hooks/use-conversation.hook";
import {useRouter} from "next/router";
import useConversations from "@/hooks/use-conversations.hook";
import SelectBot, {SelectionRef} from "@/components/SelectBot";
import ConversationElements from "@/components/ConversationElements";
import {NextPageWithLayout} from "@/pages/_app";
import styles from "./styles.module.scss";
import {getLayout} from "@/components/Layouts/DefaultLayout/ConversationsNestedLayout";
import {noop} from "lodash";

export const SendMessageContext = createContext<Function>(noop);

const Conversation: NextPageWithLayout = () => {
  const router = useRouter()
  const conversationId = parseInt(router.query.conversationId as string)
  const [newlyCreatedConversationId, setNewlyCreatedConversationId] = React.useState<number>()

  const {data, isLoading} = useConversations(conversationId || newlyCreatedConversationId)
  const {history, appendOptimistic, appendSuccess} = useChatHistory(data?.chatHistory);
  const {resp
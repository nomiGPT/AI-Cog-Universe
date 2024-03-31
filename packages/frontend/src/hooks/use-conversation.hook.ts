import {useCallback, useState} from 'react'
import {io} from "socket.io-client";
import {Message} from "@/types/ChatThread";
import {NewMessage, Conversation, NewTitelessConversation} from '@my-monorepo/shared';
import {LOCAL_STORAGE} from "@/constants";
import {useQueryClient} from "react-query";
import {toast} from "react-toastify";

const PATH = process.env.NEXT_PUBLIC_BACKEND_API + '/generation'

const useConversation = (
  onQuestionReceived: (message: Message) => void,
  onLatestResponseComplete: (message: Message) => void,
  setConversationId: (id: number) => void) => {
  const queryClient = useQueryClient()
  const [response, setResponse] = useState<NewMessage>();
  const [resources, setResources] = useState<any>();

  const sendQuestion = useCallback(
import {useCallback, useEffect, useState} from "react";
import {ChatHistory} from "@/types/ChatRequest";
import {Message} from "@/types/ChatThread";
import { NewMessage } from '@my-monorepo/shared';

export default function useChatHistory(initHistory?: Message[]) {
  const [history, setHistory] = useState<ChatHistory>([])
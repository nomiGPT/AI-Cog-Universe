import React, {FunctionComponent} from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import {Message} from "@/types/ChatThread";
import {BotAvatar, NewMessage} from '@my-monorepo/shared';
import Sender from "@/components/Sender";
import Markdown from "react-markdown";
import GeneratedUI from "@/components/GeneratedUI";
import Image from "next/image";

export type MessageBoxProps = {
  message: Message | NewMessage;
  avatar?: BotAvatar;
  bubble?: boolean;
};

const MessageBox: FunctionComponent<MessageBoxProps> = ({
                                                          message,
                                                          bubble,
                                                          avatar,
                                                        }) => {

  const shouldWrapInBubbl
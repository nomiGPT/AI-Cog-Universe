import React, {FunctionComponent} from 'react';
import RetrievalConversationalConfig from "../components/RCConfig";
import Integration from "../components/Integration";
import {NewBot} from "@my-monorepo/shared";
import Steps from "../components/Steps";

import Portal from "@/components/Portal";
import {STEPS, INSIGHT, UPDATE_STEPS, UPDATE_INSIGHT} from "./constants";
import styles from "@/components/BotForms/ConversationalForm/styles.m
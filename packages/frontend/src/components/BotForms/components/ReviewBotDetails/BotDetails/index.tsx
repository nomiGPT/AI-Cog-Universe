import React, {FunctionComponent} from 'react';
import DetailsItem from "@/components/DetailsItem";
import {BotAvatarType, BotType, NewBot} from "@my-monorepo/shared";
import {Planet} from "react-kawaii";
import styles from './styles.module.scss';

type Props = {
  data: NewBot
}

const BotDetails: FunctionComponent<Props> = ({
  d
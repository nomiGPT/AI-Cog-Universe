import React, {FunctionComponent} from 'react';
import DetailsItem from "@/components/DetailsItem";
import {BotAvatarType, BotType, NewBot} from "@my-monorepo/shared";
import {Planet} from "react-kawaii";
import styles from './styles.module.scss';

type Props = {
  data: NewBot
}

const BotDetails: FunctionComponent<Props> = ({
  data,
                                             }) => {
  const avatar = data.configuration.avatar;
  return (
    <section className={styles.detailsSection}>
      {avatar.type === BotAvatarType.BOT_AVATAR_EMOTE && <Planet size={100} mood="happy" color={avatar.backgroundColor} />}
      <div className={styles.botInfo}>
        <DetailsItem label={'name'} value={data.name} />
        <DetailsItem label={'bot type'} value={data.type} />
        {data.description && (
          <DetailsItem
            label={'Description'}
            valueClassName={styles.ellipsis}
            value={data.description}
          />
        )}
        {data.public && (
          <DetailsItem
            label={'public'}
            valueClassName={styles.ellipsis}
            value={data.public ? 'yes' : 'no'}
          />
        )}

        {data.configuration.type === BotType.CONVERSATIONAL && data.configuration.lm?.prompt && (
          <DetailsItem
            label={'custom prompt'}
            valueClassName={styles.ellipsis}
            value={data.configuration.lm.prompt}
          />
        )}
        {data.configuration.type === BotType.CONVERSATIONAL && data.configuration.lm?.modelName && (
          <DetailsItem
            label={'model'}
            valueClassName={styles.ellipsis}
            value={data.configuration.lm.modelName}
          />
        )}
        {data.configuration.type === BotType.CONVERSATIONAL && data.configuration.lm?.apiKey && (
          <DetailsItem
            label={'api key'}
   
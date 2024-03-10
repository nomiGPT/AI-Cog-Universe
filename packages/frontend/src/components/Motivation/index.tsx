import React, {FunctionComponent} from 'react';
import {ArcherContainer, ArcherElement} from "react-archer";
import InfoCard from "@/components/Motivation/InfoCard";
import Logo from "@/components/Logo";
import styles from './styles.module.scss';
import DiscordIcon from "@/components/icons/Discord.icon";
import SlackIcon from "@/components/icons/Slack.icon";

const Motivation: FunctionComponent = () => {
  return (
    <ArcherContainer strokeColor={"var(--primary-foreground)"}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.element}>
            <InfoCard
              status={'inactive'}
              description={'CogniVerse is a platform for building bots and agents that can be integrated with messaging platforms like Discord, Slack, Telegram, etc.'}
              background={"var(--color-2-dim)"}
            >
              Build bots and agents
            </InfoCard>
          </div>
          {/*Instructions*/}
          <ArcherElement
            id="instructions"
            relations={[
              {
                targetId: 'cogniverse',
                targetAnchor: 'left',
                sourceAnchor: 'right',
                className: styles.relation
              },
            ]}
          >
            <div className={styles.element}>
              <InfoCard
                description={'Use custom prompts and instructions to dictate how the bot operate and behave'}
              >
                Custom Instructions
              </InfoCard>
            </div>
          </ArcherElement>
          {/*Language models*/}
          <ArcherElement
            id="language-models"
            relations={[
              {
                targetId: 'cogniverse',
                targetAnchor: 'left',
                sourceA
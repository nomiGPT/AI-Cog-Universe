import React, {FunctionComponent} from 'react';

type Props = {
  width: string;
  height: string;
}

const DiscordIcon: FunctionComponent<Props> = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 -28.5 256 256" preserveAspectRatio="xMidYMid">
      <path
        fillRule="evenodd"
        fill={'currentColor'}
        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106
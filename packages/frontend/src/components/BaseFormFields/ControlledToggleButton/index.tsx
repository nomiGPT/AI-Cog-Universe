import React, {FunctionComponent, useCallback, useEffect} from 'react';
import styles from './styles.module.scss';
import clsx from "clsx";

type Props = {
  id: string;
  pressed: boolean;
  onToggle: (pressed: boolean) => void;
  options: [string, string];
  className?: string
}

const ControlledToggleButton: FunctionComponent<Props> = ({
  id,
  pressed,
  onToggle,
  options,
  className
  }) => {
  return
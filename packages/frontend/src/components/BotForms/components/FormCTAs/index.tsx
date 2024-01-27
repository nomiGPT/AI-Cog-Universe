import React, {FunctionComponent} from 'react';
import Button from "@/components/Button";
import styles from "../RCConfig/styles.module.scss";

type Props = {
  onNext?: () => void
  onBack?: () => void
  forwardLabel?: string
  backLabel?: string
  loading?: boolean
}

const FormCTAs: FunctionComponent<Props> = ({
  onNext,
  onBack,
  forwardLabel,
  backLabel,
  loading
                                            }) => {
  return (
    <
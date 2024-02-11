import React, {FunctionComponent} from 'react';
import {Bot, DocumentMetadata} from "@my-monorepo/shared";
import GridItem from "@/components/Docs/Grid/GridItem";
import Link from "next/link";
import {PlusIcon} from "@heroicons/react/24/outline";
import clsx from "clsx";
import styles from './styles.module.scss';

type Props = {
  docs: DocumentMetadata[]
}

const DocsGrid: FunctionComponent<Props> = ({
  docs
                                         }) => {
  return (
    <div className={styles.DocsGri
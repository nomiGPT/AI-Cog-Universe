import React from 'react';
import {NextPageWithLayout} from "@/pages/_app";
import { getLayout } from "@/components/Layouts/DefaultLayout/BotNestedLayout";
import {useAccountHook} from "@/hooks/account/use-account.hook";
import DetailsItem from "@/components/DetailsItem";
import styles from './styles.module.scss'
import ManageAccountKeys from "../../components/ManageAccountKeys";
import Image from "next/image";
import {OAuthProvider} from "@my-monorepo/shared";

const 
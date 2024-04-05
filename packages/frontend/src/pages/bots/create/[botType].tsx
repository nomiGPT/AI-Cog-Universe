import React from 'react';
import CreateBot from "../../../components/CreateBot";
import {NextPageWithLayout} from "@/pages/_app";
import {getLayout} from "@/components/Layouts/DefaultLayout/CreateBotNestedLayout";
import {useRouter} from "next/router";
import BotType from "@my-monorepo/shared/dist/types/bot/bot-type";

const Create: NextPageWithLayout = () => {
  const router = useRouter();
  const botType = router.query.bot
import React, {FunctionComponent} from 'react';
import {UseSelectReturnValue} from "downshift";
import SelectOption from "@/types/SelectOption";
import clsx from "clsx";
import buttonStyle from "@/components/Button/styles.module.scss";
import styles from './styles.module.scss';
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import Portal from "@/components/Portal";
import useOverlay fro
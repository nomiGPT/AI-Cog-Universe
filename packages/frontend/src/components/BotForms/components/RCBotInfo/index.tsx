import React, {FunctionComponent} from 'react';
import {Controller, UseFormReturn} from "react-hook-form";
import FormFieldWrapper from "@/components/FormFieldWrapper";
import TextInput from "@/components/BaseFormFields/TextInput";
import {InputType} from "./form.schema";
import SimpleColorPicker from "@/components/BaseFormFields/SimpleColorPicker";
import {Planet} from "react-kawaii";
import {COLOR_OPTIONS} from "@/constants";
import Checkbox from "@/components/BaseFormFields/Checkbox";
import EmbeddedDocumentsSelector from "@/components/EmbeddedDocumentsSelector";
import styles from '../RCConfig/styles.module.scss';


type Props = {
  form: UseFormReturn<{
    botInfo: InputType

import React, {FunctionComponent} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import SelectFile from "../BaseFormFields/SelectFile";
import FormFieldWrapper from "@/components/FormFieldWrapper";
import TextInput from "@/components/BaseFormFields/TextInput";
import Button from "@/components/Button";
import {InputType} from "@/components/EmbedPdfForm/types";
import {getRequestBody} from "./helpers";
import {useMutateDocs} from "@/components/EmbedPdfForm/mutate-docs.hook";
import {zodResolver} from "@hookform/resolvers/zod";
import schema from "./form.schema";
import {DocumentCheckIcon} from "@heroicons/react/24/outline";
import styles from './styles.module.scss';

const EmbedPdfForm: FunctionComponent = (props) => {
  const [uploadStatus, setUploadStatus] = React.useState<string>();
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
    reset,
  } = useForm<InputType>({
    resolver: zodResolver(schema)
  });

  const files = watch('files');
  const selectedFile = files && files[0]?.name;

  const mutation = useMutateDocs(
    setUploadStatus,
    () => {
      reset()
    },
    () => {
      setIsProcessing(false);
    });

  const onSubmit: SubmitHandler<InputType> = (data) => {
    mutation.mutate(getRequestBody(data));
    setIsProcessing(true);
  }
  return (
    <form className={styles.EmbedPdfForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.formTitle}>Embed Your PDF</h2>
      <FormFieldWrapper
        htmlFor="block_size"
        label={'Block size'}
        fieldError={errors.blockSize}
      >
        <TextInp
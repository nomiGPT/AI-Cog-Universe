import React, { FunctionComponent } from 'react';
import TextInput from '@/components/BaseFormFields/TextInput';
import FormFieldWrapper from '@/components/FormFieldWrapper';
import styles from './styles.module.scss';
import clsx from 'clsx';
import apiInstance from '@/helpers/api';
import { toast } from 'react-toastify';
import Button from '@/components/Button';

type Props = {
  className?: string;
};

async function register(email: string) {
  const res = await apiInstance.post('/test-register/google-api-app', {
    email,
  });
  toast(res.data.message, {
    type: 'success',
  });
}

const RegisterForTest: FunctionComponent<Props> = ({ className }) => {
  const [email, setEmail] = React.useState('');
  return (
    <section className={clsx(styles.RegisterForTest, className)}>
      <h2>Regis
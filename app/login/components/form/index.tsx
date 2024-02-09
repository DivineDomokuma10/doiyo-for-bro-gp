'use client';

import { useForm } from 'react-hook-form';
import React, { ReactElement } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, CircularProgress, FormControlLabel } from '@mui/material';

import { loginSchema } from '../../login-form.schema';
import { FormWrapper } from '../../../components/formInputs/form.styles';
import { PasswordInput, TextInput } from '../../../components/formInputs/formInputs';

import useLoginMutation from '../../../hooks/api-hooks/useLoginMutation';
import { Wrapper } from '../../../styles/wrapper.styles';
import { HeaderText, LinkText, TitleText } from '../../../styles/text.styles';
import { CustomButton } from '../../../styles/layout.styles';

export interface LoginFormData {
  email: string;
  password: string;
  rememberUser?: boolean;
}

const Form = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const { mutate, isPending } = useLoginMutation();

  const onSubmit = (credentials: LoginFormData): void => {
    mutate(credentials);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <TitleText $margin="0px">Login into your account</TitleText>
      </Wrapper>

      <div>
        <TextInput
          name="email"
          register={register}
          label="Email Address"
          placeholder="Enter your email"
          errors={errors}
        />
        <PasswordInput
          errors={errors}
          name="password"
          register={register}
          label="Password"
          placeholder="Enter your password"
        />
        <div>
          <FormControlLabel
            control={<Checkbox {...register('rememberUser')} />}
            label="Remember for 30 days"
          />
          <LinkText href="/forgot-password">Forgot password</LinkText>
        </div>
      </div>
      <div>
        <CustomButton
          sx={{ height: 45 }}
          type="submit"
          disabled={isPending || !isValid}
          fullWidth
          variant="contained">
          {isPending ? <CircularProgress size={24} /> : 'Login'}
        </CustomButton>
        <HeaderText>
          New to Doiyo? <LinkText href="/create-account">Create an account</LinkText>
        </HeaderText>
      </div>
    </FormWrapper>
  );
};

export default Form;

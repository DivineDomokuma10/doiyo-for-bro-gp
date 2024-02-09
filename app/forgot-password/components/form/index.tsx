'use client';
import { CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import React, { ReactElement } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { Wrapper } from '../../../styles/wrapper.styles';
import { HeaderText, TitleText } from '../../../styles/text.styles';
import { TextInput } from '../../../components/formInputs/formInputs';
import { forgotPasswordSchema } from '../../forget-password-form.schema';
import { FormWrapper } from '../../../components/formInputs/form.styles';
import useRequestPasswordResetMutation from '../../../hooks/api-hooks/useRequestPasswordResetMutation';
import { CustomButton } from '../../../styles/layout.styles';

interface ForgetPasswordFormData {
  email: string;
}

interface Props {
  handleResetPasswordLinkSent: () => void;
}

const Form = ({ handleResetPasswordLinkSent }: Props): ReactElement => {
  const { mutate, isPending } = useRequestPasswordResetMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ForgetPasswordFormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(forgotPasswordSchema)
  });

  const onSubmit = (data: ForgetPasswordFormData): void => {
    mutate(data, {
      onSuccess: () => {
        handleResetPasswordLinkSent();
      }
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <TitleText>Forgot your password?</TitleText>
      </Wrapper>

      <Wrapper>
        <HeaderText>
          Let us know your email and we will email you a password reset link to create a new one
        </HeaderText>
      </Wrapper>

      <div>
        <TextInput
          name="email"
          errors={errors}
          register={register}
          label="Email Address"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <CustomButton
          $height="45px"
          type="submit"
          disabled={!isValid || isPending}
          fullWidth
          variant="contained">
          {isPending ? <CircularProgress size={24} /> : 'Send Link'}
        </CustomButton>
      </div>
    </FormWrapper>
  );
};

export default Form;

import { CircularProgress } from '@mui/material';
import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useResetPasswordMutation from '../../../hooks/api-hooks/useResetPasswordMutation';
import { PasswordFormat, PasswordFormatContainer } from '../format.styles';
import { PasswordInput } from '../../../components/formInputs/formInputs';
import { FormWrapper } from '../../../components/formInputs/form.styles';
import { resetPasswordSchema } from '../../reset-password-form.schema';
import { PASSWORD_FORMAT } from '../../../utils/constants';
import { HeaderText, TitleText } from '../../../styles/text.styles';
import { Wrapper } from '../../../styles/wrapper.styles';
import { CustomButton } from '../../../styles/layout.styles';

interface ResetPassword {
  newPassword: string;
  confirmPassword: string;
}

interface Props {
  authData: {
    token: string;
    userId: string;
  };
}

const Form = ({ authData: { userId, token } }: Props): ReactNode => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ResetPassword>({
    resolver: yupResolver(resetPasswordSchema),
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const { mutate, isPending } = useResetPasswordMutation();

  const onSubmit = (data: ResetPassword): void => {
    mutate({ userId, token, password: data.newPassword });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <TitleText>Reset your password</TitleText>
        <HeaderText>Fill in your new password details</HeaderText>
      </Wrapper>

      <div>
        <PasswordInput
          errors={errors}
          register={register}
          label="New Password"
          name="newPassword"
          placeholder="Enter Password"
        />
        <PasswordFormatContainer>
          {PASSWORD_FORMAT.map((format) => (
            <PasswordFormat key={format}>{format}</PasswordFormat>
          ))}
        </PasswordFormatContainer>
      </div>

      <PasswordInput
        errors={errors}
        register={register}
        label="Confirm Password"
        name="confirmPassword"
        placeholder="Enter Password"
      />

      <CustomButton $height="45px" type="submit" disabled={!isValid} fullWidth variant="contained">
        {isPending ? <CircularProgress size={24} /> : 'Reset Password'}
      </CustomButton>
    </FormWrapper>
  );
};

export default Form;

import React, { Fragment, ReactElement } from 'react';
import {
  FormHeaderTextContainer,
  FormInputsWrapper,
  PasswordIndicator,
  PasswordIndicatorItems
} from '../create-account.styles';
import { PasswordInput } from '../../components/formInputs/formInputs';
import { useFormContext } from 'react-hook-form';
import { TitleText } from '../../styles/text.styles';

export const StepThree = (): ReactElement => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <Fragment>
      <FormHeaderTextContainer $widthValue={'60%'}>
        <TitleText $margin="" $align="">
          Create Password
        </TitleText>
      </FormHeaderTextContainer>
      <FormInputsWrapper $width="62%">
        <PasswordInput
          name="password"
          register={register}
          errors={errors}
          label="Password"
          placeholder="Enter password (min. 8 characters)"
        />
      </FormInputsWrapper>
      <PasswordIndicator>
        <PasswordIndicatorItems>8 characters</PasswordIndicatorItems>
        <PasswordIndicatorItems>A number</PasswordIndicatorItems>
        <PasswordIndicatorItems>A lowercase letter</PasswordIndicatorItems>
        <PasswordIndicatorItems>An uppercase letter</PasswordIndicatorItems>
        <PasswordIndicatorItems>A special character</PasswordIndicatorItems>
      </PasswordIndicator>
      <FormInputsWrapper $width="62%">
        <PasswordInput
          name="confirmPassword"
          register={register}
          errors={errors}
          label="Confirm Password"
          placeholder="Re-enter password"
        />
      </FormInputsWrapper>
    </Fragment>
  );
};

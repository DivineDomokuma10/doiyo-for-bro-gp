import React, { Fragment, ReactElement } from 'react';
import { MuiTelInput } from 'mui-tel-input';

import {
  FormHeaderTextContainer,
  PhoneNumberContainer,
  FormInputsWrapper,
  TopInputsWrapper
} from '../create-account.styles';
import { TextInput } from '../../components/formInputs/formInputs';
import { Controller, useFormContext } from 'react-hook-form';
import { FormLabelText, TitleText } from '../../styles/text.styles';

export const StepTwo = (): ReactElement => {
  const {
    register,
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Fragment>
      <FormHeaderTextContainer $widthValue={'75%'}>
        <TitleText $margin="" $align="">
          Enter your information
        </TitleText>
      </FormHeaderTextContainer>
      <TopInputsWrapper>
        <TextInput
          register={register}
          errors={errors}
          name="firstName"
          label="Legal First Name"
          placeholder="Enter your first name"
        />
        <TextInput
          register={register}
          errors={errors}
          name="lastName"
          label="Legal Last Name"
          placeholder="Enter your last name"
        />
      </TopInputsWrapper>
      <FormInputsWrapper $width="75%">
        <TextInput
          register={register}
          errors={errors}
          name="username"
          label="Username"
          placeholder="Enter your Username"
        />
      </FormInputsWrapper>
      <FormInputsWrapper $width="75%">
        <TextInput
          register={register}
          errors={errors}
          name="email"
          label="Email Address"
          placeholder="Enter your Email"
        />
      </FormInputsWrapper>
      <PhoneNumberContainer>
        <FormLabelText>Phone number</FormLabelText>
        <FormInputsWrapper $width="100%">
          <Controller
            control={control}
            name="phone"
            render={({ field, fieldState }) => (
              <MuiTelInput
                error={fieldState?.invalid}
                helperText={fieldState?.invalid && 'Invalid Phone Number'}
                {...field}
                defaultCountry="NG"
                fullWidth
              />
            )}
          />
        </FormInputsWrapper>
      </PhoneNumberContainer>
      <FormInputsWrapper $width="75%">
        <TextInput
          register={register}
          errors={errors}
          name="referral"
          label="Referral Code (optional)"
          placeholder="Enter referral code"
        />
      </FormInputsWrapper>
    </Fragment>
  );
};

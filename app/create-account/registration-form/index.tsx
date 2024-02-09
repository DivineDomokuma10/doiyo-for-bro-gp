'use client';
import { Button, CircularProgress } from '@mui/material';
import React, { ReactElement, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import SyncIcon from '@mui/icons-material/Sync';

import {
  ButtonWrapper,
  CreateAccountFormWrapper,
  ResendOTPWrapper
} from '../create-account.styles';
import { RegistrationFormInterface } from '../../utils/interfaces/user.interface';
import { useRegistrationFormState } from '../../hooks/useRegistrationFormState';
import useRegistrationMutation from '../../hooks/api-hooks/useRegistrationMutation';
import useVerificationMutation from '../../hooks/api-hooks/useVerificationMutation';

import { StepOne } from './step-one';
import { StepTwo } from './step-two';
import { StepFour } from './step-four';
import { StepThree } from './step-three';
import { NUMBERS } from '../../utils/constants';
import Stepper from '../../components/stepper/stepper';
import { Steps } from '../constants';
import UseResendVerificationCodeMutation from '../../hooks/useResendVerificationCodeMutation';
import { CustomizableText } from '../../styles/text.styles';
import { Wrapper } from '../../styles/layout.styles';
import Link from 'next/link';

const RegistrationForm = (): ReactElement => {
  const [activeStep, setActiveStep] = useState<number>(NUMBERS.ONE);
  const [completedStep, setCompletedStep] = useState(NUMBERS.ZERO);
  const { formMethods, handleSubmit, isValid } = useRegistrationFormState(activeStep);
  const { mutate, isPending, data } = useRegistrationMutation();
  const { mutate: verificationMutate, isPending: isVerificationPending } =
    useVerificationMutation();
  const [userId, setUserId] = useState<string>('');

  const { mutate: resendVerificationCodeMutate, isPending: isVerificationCodePending } =
    UseResendVerificationCodeMutation();

  const isButtonDisabled = isPending || !isValid || isVerificationPending;

  const onSubmit = (credentials: RegistrationFormInterface): void => {
    if (activeStep === NUMBERS.ONE) {
      setCompletedStep(NUMBERS.ONE);
      setActiveStep(NUMBERS.TWO);
      return;
    }
    if (activeStep === NUMBERS.TWO) {
      setActiveStep(NUMBERS.THREE);
      setCompletedStep(NUMBERS.TWO);
      return;
    }
    if (activeStep === NUMBERS.THREE) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, referral, ...rest } = credentials;
      const phone = rest.phone.replace(/\s+/g, '');

      mutate(
        { ...rest, phone, ...(referral && { referral }) },
        {
          onSuccess: (data): void => {
            setUserId(data.data._id);
            const newUrl: string = `/create-account/${data.data._id}`;
            setActiveStep(NUMBERS.FOUR);
            setCompletedStep(NUMBERS.THREE);
            window.history.replaceState(
              { ...window.history.state, as: newUrl, url: newUrl },
              '',
              newUrl
            );
          }
        }
      );
    }
    if (activeStep === NUMBERS.FOUR) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { otp, ...rest } = credentials;
      verificationMutate({ otp, userId: String(data?.data._id) });
    }
  };

  const resendVerification = (): void => {
    resendVerificationCodeMutate(userId);
  };

  const goToPreviousStep = (): void => {
    setActiveStep(activeStep - NUMBERS.ONE);
    setCompletedStep(completedStep - NUMBERS.ONE);
  };

  return (
    <CreateAccountFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Stepper
        goToPreviousStep={goToPreviousStep}
        steps={Steps}
        activeStep={activeStep}
        completedStep={completedStep}
      />

      <FormProvider {...formMethods}>
        {activeStep === NUMBERS.ONE && <StepOne />}
        {activeStep === NUMBERS.TWO && <StepTwo />}
        {activeStep === NUMBERS.THREE && <StepThree />}
        {activeStep === NUMBERS.FOUR && <StepFour />}
      </FormProvider>
      {activeStep === NUMBERS.THREE && (
        <Wrapper $display="flex" $align="center" $justify="center">
          <CustomizableText>
            By clicking register, you accept our{' '}
            <Link href="https://www.doiyo.ng/terms-of-service" target="_blank">
              Terms of service
            </Link>
          </CustomizableText>
        </Wrapper>
      )}
      <ButtonWrapper
        $margin="auto"
        $width={
          activeStep === NUMBERS.FOUR || activeStep === NUMBERS.THREE || activeStep === NUMBERS.ONE
            ? '60%'
            : '75%'
        }>
        <Button
          disabled={isButtonDisabled}
          type="submit"
          sx={{ height: 50 }}
          fullWidth
          title="Continue"
          variant="contained">
          {isPending || isVerificationPending ? (
            <CircularProgress size={24} />
          ) : (
            `${
              activeStep === NUMBERS.THREE
                ? 'Register'
                : activeStep === NUMBERS.FOUR
                  ? 'Verify Email'
                  : 'Continue'
            }`
          )}
        </Button>
      </ButtonWrapper>
      {activeStep === NUMBERS.FOUR && (
        <ResendOTPWrapper onClick={resendVerification}>
          {isVerificationCodePending ? (
            <CircularProgress size={24} />
          ) : (
            <SyncIcon sx={{ color: '#138829', fontSize: 18 }} />
          )}
          <CustomizableText $color="#667085" $size="14px" $fontWeight="400" $lineHeight="20px">
            Resend Code
          </CustomizableText>
        </ResendOTPWrapper>
      )}
    </CreateAccountFormWrapper>
  );
};

export default RegistrationForm;

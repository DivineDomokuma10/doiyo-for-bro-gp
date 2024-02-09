import { Controller, useFormContext } from 'react-hook-form';
import React, { Fragment, ReactElement } from 'react';

import { FormHeaderTextContainer, OtpInputWrapper } from '../create-account.styles';
import { CarouselFooterLink } from '../components/carousel/carousel.styles';
import { TitleText } from '../../styles/text.styles';

export const StepFour = (): ReactElement => {
  const { control } = useFormContext();

  return (
    <Fragment>
      <FormHeaderTextContainer $widthValue={'60%'}>
        <TitleText $margin="0">Verify Email</TitleText>
      </FormHeaderTextContainer>
      <CarouselFooterLink $width="60%">
        Please enter the one-time password (OTP) that we sent to the email address you provided. Be
        sure to check your spam folder.
      </CarouselFooterLink>
      <Controller
        control={control}
        name="otp"
        render={({ field }) => (
          <OtpInputWrapper
            length={6}
            {...field}
            // onComplete={handleComplete}
            autoFocus
          />
        )}
      />
    </Fragment>
  );
};

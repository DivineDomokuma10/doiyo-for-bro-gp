'use client';
import React, { ReactElement } from 'react';

// Components
import Image from 'next/image';
import { Carousel } from '../components/carousel/carousel';
import RegistrationForm from '../registration-form';

// Styled Components
import {
  Container,
  FormContainerLink,
  FormContainer,
  FormContainerTop,
  LoginLink,
  SignUpFooter,
  SignUpTopImageContainer
} from '../create-account.styles';

// Images
import { LOGO_PATH } from '../../utils/constants';
import { HeaderText, TitleText } from '../../styles/text.styles';

const CreateAccount = (): ReactElement => {
  return (
    <Container>
      <Carousel />
      <FormContainer>
        <FormContainerTop>
          <SignUpTopImageContainer>
            <Image src={LOGO_PATH} width={75} height={24} alt="logo" />
          </SignUpTopImageContainer>
          <TitleText $align="center" $margin="">
            Create an account
          </TitleText>
          <HeaderText>Let’s get you started with secure and transparent FX exchange</HeaderText>
          <RegistrationForm />
          <FormContainerLink>
            Already on Doiyo?
            <LoginLink href={'/login'}>Login</LoginLink>
          </FormContainerLink>
        </FormContainerTop>
        <SignUpFooter>
          <Image src={LOGO_PATH} width={75} height={24} alt="logo" />
        </SignUpFooter>
      </FormContainer>
    </Container>
  );
};

export default CreateAccount;

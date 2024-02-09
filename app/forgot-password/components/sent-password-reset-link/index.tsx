'use client';
import { Container } from '@mui/material';
import Image from 'next/image';
import { ReactElement } from 'react';
import { IconContainer, TextContainer } from './styles';
import { HeaderText, LinkText, TitleText } from '../../../styles/text.styles';

interface Props {
  resendResetPasswordLink: () => void;
}

const SentPasswordResetLink = ({ resendResetPasswordLink }: Props): ReactElement => {
  return (
    <Container>
      <IconContainer>
        <Image
          width={64}
          height={60.381}
          alt="verification link icon"
          src="/verification-link-icon.svg"
        />
      </IconContainer>

      <TextContainer>
        <TitleText>Password Reset link sent</TitleText>
        <HeaderText>
          please check your email inbox and click on the link to reset your password. if you
          didn&apos;t receive email.
        </HeaderText>
        <LinkText onClick={resendResetPasswordLink}>click here to resend.</LinkText>
      </TextContainer>
    </Container>
  );
};

export default SentPasswordResetLink;

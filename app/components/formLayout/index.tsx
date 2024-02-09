'use client';
import Image from 'next/image';
import React, { ReactElement } from 'react';

import { FormFieldContainer, FormSection, LogoContainer } from './formLayout.styles';

interface Prop {
  children: ReactElement;
}

const FormContainer = ({ children }: Prop): ReactElement => {
  return (
    <FormSection>
      <LogoContainer>
        <Image alt="doiyo logo" src="/logo.svg" width={74.667} height={24} className="" />
      </LogoContainer>

      <FormFieldContainer>{children}</FormFieldContainer>
    </FormSection>
  );
};

export default FormContainer;

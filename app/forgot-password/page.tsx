'use client';
import React, { useCallback, useState } from 'react';

import Form from './components/form';
import FormContainer from '../components/formLayout';
import SentPasswordResetLink from './components/sent-password-reset-link';

const ForgotPassword = (): React.ReactElement => {
  const [isResetPasswordLinkSent, setIsResetPasswordLinkSent] = useState(false);

  const handleResetPasswordLinkSent = useCallback((): void => {
    setIsResetPasswordLinkSent(!isResetPasswordLinkSent);
  }, [isResetPasswordLinkSent]);
  return (
    <section>
      <FormContainer>
        {isResetPasswordLinkSent ? (
          <SentPasswordResetLink resendResetPasswordLink={handleResetPasswordLinkSent} />
        ) : (
          <Form handleResetPasswordLinkSent={handleResetPasswordLinkSent} />
        )}
      </FormContainer>
    </section>
  );
};

export default ForgotPassword;

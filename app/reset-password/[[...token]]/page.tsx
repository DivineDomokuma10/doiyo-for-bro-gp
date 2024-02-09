'use client';
import React, { ReactNode, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import useVerifyTokenValidityMutation from '../../hooks/api-hooks/useVerifyTokenValidityMutation';
import FormContainer from '../../components/formLayout';
import Form from '../components/form';

function RestPassword(): ReactNode {
  const params = useSearchParams();
  const token = params.get('token') || '';
  const userId = params.get('id') || '';
  const { mutate } = useVerifyTokenValidityMutation();

  const authData = useMemo(() => ({ token, userId }), [token, userId]);

  useEffect((): void => {
    if (token) {
      mutate({ token, userId });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, userId]);
  return (
    <FormContainer>
      <Form authData={authData} />
    </FormContainer>
  );
}

export default RestPassword;

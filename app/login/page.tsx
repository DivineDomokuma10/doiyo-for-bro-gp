import React, { ReactElement } from 'react';

import FormContainer from '../components/formLayout';
import Form from './components/form';

const Login = (): ReactElement => {
  return (
    <section>
      <FormContainer>
        <Form />
      </FormContainer>
    </section>
  );
};

export default Login;

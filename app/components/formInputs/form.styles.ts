import { FormControl } from '@mui/material';
import styled from 'styled-components';

interface FormWrapperProps {
  $width?: string;
}

export const FormWrapper = styled.form<FormWrapperProps>`
  border-radius: 8px;
  padding: 0px 25px;
  padding-bottom: 25px;
  border: 1px solid rgba(235, 243, 255, 0.5);
  background: #fff;
  width: ${(props) => (props.$width === '100%' ? '100%' : '90%')};
  backdrop-filter: blur(14px);
  @media (max-width: 600px) {
    border: none;
  }
`;
export const PasswordInputWrapper = styled(FormControl)`
  margin-bottom: 40px;
`;

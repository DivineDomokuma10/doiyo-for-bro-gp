import styled from 'styled-components';
import { FormWrapper } from '../../../components/formInputs/form.styles';

export const Container = styled(FormWrapper)`
  row-gap: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: center;
`;

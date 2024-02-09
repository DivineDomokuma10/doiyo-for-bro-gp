import { Backdrop, Box, TextField } from '@mui/material';
import styled from 'styled-components';
import { Input } from '../../../create-account/create-account.styles';
import Link from 'next/link';
import { Wrapper, WrapperProps } from '../../../styles/layout.styles';

export const CardIcon = styled.span<{ $active: boolean }>`
  display: flex;
  color: white;
  width: 30px;
  font-weight: bold;
  height: 30px;
  padding: 5px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background: ${({ $active }) => ($active ? '#19B536' : '#999999')};
`;

export const CardContainer = styled.div<{
  $active: boolean;
  $padding: string;
  $boxSizing?: string;
}>`
  display: flex;
  column-gap: 15px;
  align-items: center;
  border-radius: 6px;
  height: ${(props) => (props.$boxSizing ? '40px' : '')};
  justify-content: space-between;
  box-sizing: ${(props) => props.$boxSizing};
  padding: ${({ $padding }) => $padding};
  background: ${({ $active }) => ($active ? '#f9fBf9' : 'white')};
  border: ${({ $active }) => ($active ? '2px solid #19B536' : '2px solid #999999')};
`;

export const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

interface AddAccountWrapperProps {
  $width?: string;
}

export const AddAccountWrapper = styled.div<AddAccountWrapperProps>`
  background-color: white;
  min-height: 400px;
  width: ${(props) => props.$width && props.$width};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const AddAccountCloseSectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CreateAdStepTwoWrapper = styled.div``;

interface InputWrapperProps {
  $width?: string;
  $height?: string;
}
export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  align-items: center;
  border: 1px solid #d0d5dd;
  padding: 0px 15px;
  border-radius: 4px;
  width: ${(props) => props.$width && props.$width};
  height: ${(props) => props.$height && props.$height};
`;

export const MinimumAmountInput = styled(Input)`
  border: none;
  outline: none;
  width: 80%;
  height: 100%;
  font-size: 14px;
`;

export const TabWrapper = styled(Wrapper)`
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled(Link)<{ $width?: string; $mobileWidth: string }>`
  display: block;
  width: ${(props) => props.$width && props.$width};
  text-decoration: none;
  @media (max-width: 600px) {
    width: ${(props) => props.$mobileWidth && props.$mobileWidth};
  }
`;

export const UploadLabel = styled.label<WrapperProps>`
  background-color: ${(props) => props.$bg && props.$bg};
  display: ${(props) => props.$display && props.$display};
  border-radius: ${(props) => props.$borderRadius && props.$borderRadius};
  padding-left: ${(props) => props.$paddingL && props.$paddingL};
  padding-bottom: ${(props) => props.$paddingB && props.$paddingB};
  padding-top: ${(props) => props.$paddingT && props.$paddingT};
  padding-right: ${(props) => props.$paddingR && props.$paddingR};
  align-items: ${(props) => props.$align && props.$align};
  gap: ${(props) => props.$gap && props.$gap};
  cursor: ${(props) => props.$cursor && props.$cursor};
  justify-content: ${(props) => props.$justify && props.$justify};
  @media (max-width: 600px) {
    width: ${(props) => props.$mobileWidth && props.$mobileWidth};
  }
`;

export const BoxWrapper = styled(Box)`
  padding: 24px;

  @media (max-width: 600px) {
    padding: 20px 0px;
  }
`;

export const AmountTextField = styled(TextField)`
  width: 49%;
  border-radius: 4px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

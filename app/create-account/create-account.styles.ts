import { MuiOtpInput } from 'mui-one-time-password-input';
import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: white;
  height: 100vh;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 10px;
    height: 100%;
    overflow: auto;
  }
`;

export const Title = styled.h3`
  color: #138829;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 15px;
  margin-top: 30px;
`;

export const Text = styled.p`
  color: #3a3a3a;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 70%;
  margin: auto;
`;

export const FormContainer = styled.div`
  width: 63%;
  padding-top: 60px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
  color: #434547;
  overflow-y: scroll;
  height: 100%;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
  }
`;

export const FormContainerTop = styled.section`
  padding-right: 100px;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const CreateAccountFormWrapper = styled.form`
  margin-top: 30px;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

interface FormInputsWrapperProp {
  $width?: string;
  $margin?: string;
}

export const FormInputsWrapper = styled.div<FormInputsWrapperProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$width && props.$width};
  margin: ${(props) => props.$margin || 'auto'};
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const PageText = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
`;

export const Input = styled.input`
  color: #434547;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  background-color: transparent;
`;

export const FlexActive = styled.div`
  width: 384px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #d0d5dd;
  padding: 0 17px;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Flex = styled.div`
  width: 384px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #75d386;
  padding-right: 17px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ContainerTwo = styled.select`
  width: 348px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #75d386;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #98a2b3;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  appearance: none;
  border-left: none;
  border-right: none;
  outline: none;
  padding: 0 17px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`;

export const StateName = styled.option`
  margin-bottom: 10px;
`;

export const PaginatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 10px;
`;

interface PaginatorItemStyleProps {
  $isActive: boolean;
}
export const PaginatorItem = styled.div<PaginatorItemStyleProps>`
  width: 32px;
  height: 4px;
  border-radius: 8px;
  background: ${(props) => (props.$isActive ? '#19b536' : '#f0f0f0')};
  transition: ease all 300ms;
`;

export const FormContainerLink = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 40px;
  margin-top: 60px;
`;

export const LoginLink = styled.a`
  color: #19b536 !important;
  margin-left: 4px;
  font-weight: 600;
`;

export const HideCarouselItem = styled(ItemContainer)`
  display: none;
`;

export const SignUpFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const SignUpTopImageContainer = styled(SignUpFooter)`
  padding-right: 0px;
  display: none;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 10px;
  }
`;

interface ButtonWrapperProp {
  $width?: string;
  $marginTop?: string;
  $margin?: string;
  $marginLeft?: string;
  $auto?: string;
}

export const ButtonWrapper = styled.div<ButtonWrapperProp>`
  width: ${(props) => (props.$width ? props.$width : '')};
  margin-top: ${(props) => props.$marginTop && props.$marginTop};
  margin-left: ${(props) => props.$marginLeft && props.$marginLeft};
  margin-top: ${(props) => (props.$margin ? props.$margin : 'auto')};
  margin: ${(props) => props.$margin};
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0px;
  }
`;

interface FormHeaderTextContainerProp {
  $widthValue?: string;
}

export const FormHeaderTextContainer = styled.div<FormHeaderTextContainerProp>`
  display: flex;
  width: ${(props) => props.$widthValue && props.$widthValue};
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const TopInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: auto;
  gap: 12px;

  @media (max-width: 600px) {
    width: 96%;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    gap: 0px;
  }
`;

export const PhoneNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: auto;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const PasswordIndicator = styled.div`
  display: flex;
  gap: 5px;
  width: 60%;
  margin: auto;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const PasswordIndicatorItems = styled.p`
  border-radius: 16px;
  border: 1px dashed rgba(152, 162, 179, 0.48);
  color: #98a2b3;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.2px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
`;

export const OtpInputWrapper = styled(MuiOtpInput)`
  width: 60%;
  margin: auto;

  @media (max-width: 600px) {
    width: 97%;
    gap: 10px;
  }
`;

export const ResendOTPWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

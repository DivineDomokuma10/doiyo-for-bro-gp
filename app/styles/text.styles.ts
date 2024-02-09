import { FormLabel } from '@mui/material';
import styled from 'styled-components';

interface TitleTextProps {
  $align?: string;
  $margin?: string;
}

export const TitleText = styled.h1<TitleTextProps>`
  color: #000759;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  margin: ${(props) => props.$margin && '0'};
  text-align: ${(props) => (props.$align ? props.$align : '')};
  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const HeaderText = styled.p`
  width: 100%;
  margin: 20px 0px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 12px;
    width: 80%;
    margin: 30px auto;
    margin-top: 0;
  }
`;

export const FormLabelText = styled(FormLabel)`
  color: #2a2a2a;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 10px;
`;

export const LinkText = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: green;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

interface TextProps {
  $size?: string;
  $fontWeight?: string;
  $color?: string;
  $lineHeight?: string;
  $align?: string;
  $width?: string;
  $margin?: string;
  $visibility?: string;
  $textTransform?: string;
  $letterSpacing?: string;
  $mobileSize?: string;
  $mobileWeight?: string;
  $alignText?: string;
  $marginB?: string;
  $mobileWidth?: string;
  $cursor?: string;
}
export const CustomizableText = styled.p<TextProps>`
  font-size: ${(props) => props.$size};
  color: ${(props) => props.$color};
  font-weight: ${(props) => props.$fontWeight};
  font-style: normal;
  line-height: ${(props) => props.$lineHeight};
  text-align: ${(props) => props.$align};
  width: ${(props) => props.$width};
  margin: ${(props) => props.$margin};
  margin-bottom: ${(props) => props.$marginB};
  visibility: ${(props) => props.$visibility};
  text-transform: ${(props) => props.$textTransform};
  letter-spacing: ${(props) => props.$letterSpacing};
  text-align: ${(props) => props.$alignText};
  cursor: ${(props) => props.$cursor};
  @media (max-width: 600px) {
    font-size: ${(props) => props.$mobileSize};
    font-weight: ${(props) => props.$mobileWeight};
    width: ${(props) => props.$mobileWidth};
  }
`;

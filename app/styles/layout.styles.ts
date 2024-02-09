import { Button } from '@mui/material';
import styled from 'styled-components';

interface IFlexWrapper<T> {
  $margin?: T;
  $backgroundColor?: T;
  $desktop?: {
    $width?: T;
    $items?: T;
    $spaceX?: T;
    $spaceY?: T;
    $justify?: T;
    $direction?: 'column' | 'row';
  };
  $mobile?: {
    $width?: T;
    $items?: T;
    $spaceX?: T;
    $spaceY?: T;
    $justify?: T;
    $direction?: 'column' | 'row';
  };
}

interface ICustomButton {
  $width?: {
    $mobile?: string;
    $desktop?: string;
  };
  $height?: string;
  $bgColor?: string;
}

export interface WrapperProps {
  $width?: string;
  $height?: string;
  $display?: string;
  $align?: string;
  $justify?: string;
  $mobileJustify?: string;
  $borderLeft?: string;
  $paddingL?: string;
  $paddingR?: string;
  $paddingT?: string;
  $paddingB?: string;
  $gap?: string;
  $direction?: string;
  $marginL?: string;
  $marginR?: string;
  $marginT?: string;
  $mobileMarginT?: string;
  $marginB?: string;
  $mobileMarginB?: string;
  $borderRadius?: string;
  $bg?: string;
  $border?: string;
  $mobileColumn?: string;
  $mobileWidth?: string;
  $wrap?: string;
  $opacity?: number;
  $borderBottom?: string;
  $cursor?: string;
  $padding?: string;
  $mobileGap?: string;
  $mobileHeight?: string;
  $overflow?: string;
  $mobileBg?: string;
  $mobileAlign?: string;
}

export const TradeContainer = styled.main<{ $padding?: string }>`
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: ${(props) => props.$padding};
  flex-direction: column;
  row-gap: 5px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const SimpleText = styled.p<{ $width?: string }>`
  font-size: 14px;
  font-weight: 100;
  color: #444444;
  line-height: 24px;
  width: ${(props) => props.$width};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FlexWrapper = styled.div<IFlexWrapper<string>>`
  display: flex;
  width: ${(props) => props.$desktop?.$width};
  row-gap: ${(props) => props.$desktop?.$spaceY};
  column-gap: ${(props) => props.$desktop?.$spaceX};
  align-items: ${(props) => props.$desktop?.$items};
  background-color: ${(props) => props.$backgroundColor};
  margin: ${(props) => props.$margin};
  justify-content: ${(props) => props.$desktop?.$justify};
  flex-direction: ${(props) => props.$desktop?.$direction};

  @media (max-width: 600px) {
    width: ${(props) => props.$mobile?.$width};
    row-gap: ${(props) => props.$mobile?.$spaceY};
    column-gap: ${(props) => props.$mobile?.$spaceX};
    align-items: ${(props) => props.$mobile?.$items};
    justify-content: ${(props) => props.$mobile?.$justify};
    flex-direction: ${(props) => props.$mobile?.$direction};
  }
`;

export const CustomButton = styled(Button)<ICustomButton>`
  gap: 8px;
  display: flex;
  padding: 10px 18px;
  align-items: center;
  justify-content: center;
  font-size: 16px !important;
  font-weight: 700 !important;
  font-style: normal !important;
  text-transform: capitalize !important;
  min-width: ${({ $width }) => $width?.$desktop};
  background: ${({ $bgColor }) => $bgColor} !important;
  height: ${({ $height }) => $height || '44px'};

  @media (max-width: 600px) {
    width: ${({ $width }) => $width?.$mobile};
  }
`;

export interface WrapperProps {
  $width?: string;
  $height?: string;
  $display?: string;
  $align?: string;
  $justify?: string;
  $mobileJustify?: string;
  $borderLeft?: string;
  $paddingL?: string;
  $paddingR?: string;
  $paddingT?: string;
  $paddingB?: string;
  $gap?: string;
  $direction?: string;
  $marginL?: string;
  $marginR?: string;
  $marginT?: string;
  $mobileMarginT?: string;
  $marginB?: string;
  $mobileMarginB?: string;
  $borderRadius?: string;
  $bg?: string;
  $border?: string;
  $mobileColumn?: string;
  $mobileWidth?: string;
  $wrap?: string;
  $opacity?: number;
  $borderBottom?: string;
  $cursor?: string;
  $padding?: string;
  $mobileGap?: string;
  $mobileHeight?: string;
  $overflow?: string;
  $mobileBg?: string;
  $mobileAlign?: string;
  $margin?: string;
  $backgroundColor?: string;
  $columnGap?: string;
  $rowGap?: string;
  $boxSizing?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: ${(props) => props.$display};
  background-color: ${(props) => props.$backgroundColor};
  align-items: ${(props) => props.$align};
  flex-direction: ${(props) => props.$direction};
  justify-content: ${(props) => props.$justify};
  gap: ${(props) => props.$gap};
  row-gap: ${(props) => props.$rowGap};
  width: ${(props) => props.$width};
  border-left: ${(props) => props.$borderLeft};
  padding-left: ${(props) => props.$paddingL};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  padding-bottom: ${(props) => props.$paddingB};
  padding-top: ${(props) => props.$paddingT};
  padding-right: ${(props) => props.$paddingR};
  margin-left: ${(props) => props.$marginL};
  margin-bottom: ${(props) => props.$marginB};
  margin-top: ${(props) => props.$marginT};
  margin-right: ${(props) => props.$marginR};
  border-radius: ${(props) => props.$borderRadius};
  background-color: ${(props) => props.$bg};
  border: ${(props) => props.$border};
  flex-wrap: ${(props) => props.$wrap};
  height: ${(props) => props.$height};
  opacity: ${(props) => props.$opacity};
  border-bottom: ${(props) => props.$borderBottom};
  cursor: ${(props) => props.$cursor};
  box-sizing?: ${(props) => props.$boxSizing};

  @media (max-width: 600px) {
    flex-direction: ${(props) => props.$mobileColumn};
    width: ${(props) => props.$mobileWidth};
    height: ${(prop) => prop.$mobileHeight || '100%'};
    padding: ${(props) => props.$padding && props.$padding};
    margin-top: ${(props) => props.$mobileMarginT};
    gap: ${(props) => props.$mobileGap};
    margin-bottom: ${(props) => props.$mobileMarginB};
    overflow-x: ${(props) => props.$overflow};
    justify-content: ${(props) => props.$mobileJustify};
    background: ${(props) => props.$mobileBg};
    align-items: ${(props) => props.$mobileAlign};
  }
`;

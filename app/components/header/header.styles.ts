import Link from 'next/link';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: #000759;
  height: 65px;
  padding: 0 40px;
  margin: 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const HeaderItemsLeftWrapper = styled.div`
  height: 100%;
  display: flex;
`;
export const HeaderItemsRightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const HeaderItemOneLastItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

interface HeaderButtonProps {
  $color?: string;
  $filter?: boolean;
  $active?: boolean;
}

export const HeaderButton = styled.a<HeaderButtonProps>`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  display: flex;
  padding: 0 20px;
  align-items: center;
  border-bottom: ${(props) => (props.$active ? '3px solid #19b536' : '')};
  text-decoration: none;
  gap: 7px;
  text-transform: capitalize;
  @media (max-width: 600px) {
    border-radius: ${(props) => (props.$color ? '5px' : '24px')};
    border: 1px solid
      ${(props) => (props.$filter ? '#3C366B' : props.$color ? props.$color : '#19b536')};
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    height: ${(props) => (props.$color ? '30px' : '44px')};
    width: ${(props) => (props.$color ? '70px' : '111px')};
    color: ${(props) => (props.$filter ? '#3C366B' : props.$color ? props.$color : '#19b536')};
    font-size: 12px;
    font-weight: ${(props) => (props.$color ? '400' : '600')};
    line-height: 16px;
    padding: 8px;
    flex-direction: ${(props) => (props.$color ? 'row-reverse' : '')};
  }
`;

export const WelcomeButton = styled(HeaderButton)`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: center;
    width: 150px;
  }
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
export const HeaderNameText = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: white;
`;

export const MobileHeader = styled.div`
  display: none;
  @media (max-width: 600px) {
    height: 65px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(19, 136, 41, 0.24);
    padding: 0 10px;
    justify-content: space-between;
  }
`;

export const HamburgerSect = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 600px) {
    border-radius: 2px;
    border: 1px solid #d0d5dd;
    display: flex;
    padding: 6px;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderNavigationDropdown = styled.div`
  border-radius: 4px;
  background: white;
  display: flex;
  padding: 16px;
  flex-direction: column;
  position: absolute;
  right: 0;
  margin: 20px;
`;

interface LinkTextProp {
  $width?: string;
  $display?: string;
  $align?: string;
  $gap?: string;
}

export const LinkText = styled(Link)<LinkTextProp>`
  color: #666;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  margin-bottom: 15px;
  width: ${(props) => props.$width};
  display: ${(props) => props.$display};
  align-items: ${(props) => props.$align};
  gap: ${(props) => props.$gap};
`;

export const DropDownArrowWrapper = styled.div`
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;

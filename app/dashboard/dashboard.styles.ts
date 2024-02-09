import styled from 'styled-components';
import GridViewIcon from '@mui/icons-material/GridView';
import SellIcon from '@mui/icons-material/Sell';
import { Button, Card, TextField } from '@mui/material';
import { FormLabelText } from '../styles/text.styles';
import Image from 'next/image';

export const DashboardWrapper = styled.section``;

export const DashboardMainWrapper = styled.div<{ $noPadding?: boolean }>`
  // max-width: 100vw;
  min-height: calc(100vh - 64px);
  display: flex;
  justify-content: space-between;
  padding: ${(props) => (props.$noPadding ? '' : '30px 50px')};
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 30px 10px;
    min-height: auto;
  }
`;

export const SideBarWrapper = styled.aside`
  width: 370px;
  background-color: #f9fafb;
  @media (max-width: 600px) {
    width: 100%;
    background-color: #fff;
  }
`;

export const SideBarContentsWrapper = styled.div`
  width: 76%;
  margin: auto;
  box-sizing: border-box;
  padding: 50px 0;

  @media (max-width: 600px) {
    padding: 0;
    width: 100%;
  }
`;

export const SideBarHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0px;
  @media (max-width: 600px) {
    justify-content: space-between;
    border-bottom: none;
  }
`;

interface SideBarHeaderTextWrapperProps {
  $active?: boolean;
}

export const SideBarHeaderTextWrapper = styled.div<SideBarHeaderTextWrapperProps>`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  border-bottom: ${(props) => (props.$active ? '#19B536 solid 3px' : '')};
  padding-bottom: 10px;
  @media (max-width: 600px) {
    display: none;
  }
`;

interface SellButtonProps {
  $activeBtn?: boolean;
}

export const MobileTradeButton = styled(Button)<SellButtonProps>`
  display: none !important;
  @media (max-width: 600px) {
    display: block !important;
    border-radius: 6px;
    border: ${(props) => (props.$activeBtn ? 'none' : '1px solid #e0e0e0')} !important;
    background: ${(props) => (props.$activeBtn ? '#19b536' : '')} !important;
    color: ${(props) => (props.$activeBtn ? '#fff' : '#333')}!important;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    width: 50%;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const SideBarHeaderText = styled.h3`
  color: #999;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

export const SideBarHeaderSvg = styled(GridViewIcon)`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
`;

export const WelcomeSect = styled.div``;
export const WelcomeSectOne = styled.div`
  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
  }
`;
export const WelcomeTextsWrapper = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const WelcomeText = styled.p`
  color: #1a202c;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  margin-bottom: 10px;
`;

interface WelcomeBoldTextProps {
  $color?: string;
}

export const WelcomeBoldText = styled.h3<WelcomeBoldTextProps>`
  color: ${(props) => (props.$color ? props.$color : '#1a202c')};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
`;
export const SellIconSvg = styled(SellIcon)`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
`;

interface SideBarBodyProps {
  $filter?: boolean;
}

export const SideBarBody = styled.div<SideBarBodyProps>`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 600px) {
    display: ${(props) => (props.$filter ? 'flex' : 'none')};
  }
`;

export const TradeAdWrapper = styled.div`
  width: 75%;
  padding: 50px;
  @media (max-width: 600px) {
    width: 100%;
    padding: 20px 0;
  }
`;

export const TradAdHeaderText = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.48px;
  margin: 0;
  margin-bottom: 60px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const TradeAdContainer = styled.div``;
export const TradeAddContainerHeader = styled.div`
  border-bottom: 1px solid #e5e7eb;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 10px;
  @media (max-width: 600px) {
    display: none;
  }
`;
interface TradeAdContainerHeaderTextProps {
  $textTransform?: boolean;
  $width?: string;
  $weight?: number;
  $align?: string;
  $fontSize?: string;
  $color?: string;
  $marginTop?: string;
  $cursor?: string;
}

export const TradeAdContainerHeaderText = styled.p<TradeAdContainerHeaderTextProps>`
  color: ${(props) => (props.$color ? props.$color : props.$fontSize ? '#138829' : '')};
  text-transform: ${(props) => (props.$textTransform ? 'capitalize' : 'uppercase')};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '12px')};
  font-weight: ${(props) => (props.$weight ? props.$weight : '500')};
  text-align: ${(props) => (props.$align ? props.$align : '')};
  width: ${(props) => (props.$width ? props.$width : '16.7%')};
  margin: 0;
  line-height: 16px;

  @media (max-width: 600px) {
    font-size: 13px;
    width: 100%;
  }
`;

export const TradeAdListWrapper = styled.div`
  margin-top: 25px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 0;
  }
`;
export const TradeAdBodyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #e5e7eb;
  border-right: 3px solid #000759;
  padding-right: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const MobileTradeAddBodyItem = styled.div`
  display: none;

  @media (max-width: 600px) {
    border-radius: 8px;
    border: 1px solid #eaeaea;
    padding: 16px;
    display: flex;
    justify-content: space-between;
  }
`;
export const MobileAddListItem = styled.div``;

export const MobileTradeAdBodyItemSectOne = styled.div`
  @media (max-width: 600px) {
    width: 50%;
  }
`;
export const MobileTradeAdBodyItemSectTwo = styled.div`
  @media (max-width: 600px) {
    width: 50%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-between;
  }
`;
interface TradeAddItemSectOneProps {
  $width?: string;
  $cursor?: string;
}

export const TradeAdItemSectOne = styled.div<TradeAddItemSectOneProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: ${(props) => props.$cursor};
  width: ${(props) => (props.$width ? props.$width : '16.7%')};
`;
export const TradeAdItemUserNameSect = styled.div``;

interface TradeAdUserNameProps {
  $gap?: string;
  $margin?: string;
  $display?: string;
  $align?: string;
}
export const TradeAdUserName = styled.h3<TradeAdUserNameProps>`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  text-overflow: ellipsis;
  gap: ${(props) => props.$gap};
  margin-bottom: ${(props) => props.$margin};
  @media (max-width: 600px) {
    display: ${(props) => props.$display};
    align-items: ${(props) => props.$align};
  }
`;

export const TextFlag = styled(Image)`
  margin-top: 4px;
`;

export const NumberOfTradeText = styled.p`
  color: #999;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  margin-top: 2px;
`;

interface TradeAdPaymentMethodSectProps {
  $direction?: string;
}

export const TradeAdPaymentMethodSect = styled.div<TradeAdPaymentMethodSectProps>`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  width: 25.8%;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: ${(props) => (props.$direction ? props.$direction : '')};
    flex-wrap: no-wrap;
  }
`;

export const TradeAdPercentText = styled.p`
  color: #138829;
  font-size: 9px;
  font-weight: 400;
  line-height: 12px;
  margin: 0;
  margin-top: 5px;
`;

interface SideBarAmountWrapperProps {
  $width?: string;
  $margin?: string;
  $flexDirection?: string;
}

export const SideBarAmountWrapper = styled.div<SideBarAmountWrapperProps>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.$flexDirection};
  width: ${(props) => props.$width};
  margin: ${(props) => props.$margin};
`;

interface SelectedCurrencyWrapperProps {
  $border?: string;
  $height?: string;
}

export const SelectedCurrencyWrapper = styled.div<SelectedCurrencyWrapperProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: 10px;
  border-radius: ${(props) => (props.$border ? props.$border : ' 4px 0px 0px 4px')};
  border: 1px solid #d0d5dd;
  border-right: ${(props) => (props.$border ? '1px solid #d0d5dd' : 'none')};
  border-left: ${(props) => (props.$border ? 'none' : '1px solid #d0d5dd')};
  padding: 0 10px;
  background: ${(props) => (props.$border ? '' : '#f2f2f2')};
  height: ${(props) => props.$height || '40px'};
`;

export const SelectedCurrencyText = styled.h3`
  color: #2a2a2a;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
`;

export const SidebarAmountInput = styled(TextField)({
  '& .MuiInputBase-root': {
    color: 'black',
    borderRadius: '0px 4px 4px 0px',
    height: 40,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500
  }
});

export const TradeAdViewInputs = styled.input<{ $width?: string }>`
  height: 40px;
  box-sizing: border-box;
  width: ${({ $width }) => $width || '95%'};
  padding: 0 20px;
  border-radius: 4px 0px 0px 4px;
  border: 2px solid #d0d5dd;
  outline: none;
  color: black;
  margin: auto;
  font-weight: 500;
  font-size: 16px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  transition: border-color 0.3s ease; /* Optional: Add a smooth transition effect */

  &:focus {
    border: 2px solid #19b536;
    outline: none;
  }
`;
interface SidebarLabelTextProps {
  $marginLeft?: string;
}

export const SidebarLabelText = styled(FormLabelText)<SidebarLabelTextProps>`
  margin-bottom: 0px;
  margin-left: ${(props) => props.$marginLeft};
`;

interface BtnProps {
  $width?: string;
}

export const CustomButton = styled(Button)<BtnProps>`
  text-transform: none !important;
  border-radius: 4px;
  border: 1px solid #19b536;
  background: #19b536 !important;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  color: #fff !important;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-transform: capitalize;
  display: ${(props) => (props.$width ? 'none !important' : 'block')};
  height: ${(props) => (props.$width ? '45px' : '')};
  &:hover {
    color: #19b536;
  }
  @media (max-width: 600px) {
    display: flex !important;
    width: ${(props) => (props.$width ? '100%' : '80px')};
  }
`;

export const TradeAdViewWrapper = styled.div`
  width: 80%;
  margin: auto;
  padding: 30px 0;
  @media (max-width: 600px) {
    width: auto;
    margin: 0;
  }
`;
export const TradeAdItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

export const TradeAdIndicatorText = styled.p`
  color: #444;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
`;

interface TransferTextProps {
  $color?: string;
  $marginTop?: string;
  $align?: string;
}

export const TransferText = styled(TradeAdIndicatorText)<TransferTextProps>`
  font-weight: 400;
  margin-top: ${(props) => props.$marginTop};
  color: ${(props) => props.$color && props.$color};

  text-align: ${(props) => (props.$align ? props.$align : '')};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

interface TradeAdTextWrapperProps {
  $justify?: string;
  $width?: string;
  $marginTop?: string;
  $direction?: string;
}

export const TradeAdTextWrapper = styled.div<TradeAdTextWrapperProps>`
  display: flex;
  align-items: space-around;
  flex-direction: ${(props) => props.$direction};
  margin-top: ${(props) => props.$marginTop}
  justify-content: ${(props) => props.$justify || 'space-between'};

  & ${TransferText} {
    margin-top: 0;
    width: ${(props) => (props.$width ? props.$width : '40%')};
  }

  & ${TradeAdUserName} {
    width: 40%;
  }
  & ${TradeAdPercentText} {
    width: 20%;
  }
  & ${TradeAdPaymentMethodSect} {
    width: 60%;
  }

  @media (max-width: 600px) {
    align-items: ${(props) => (props.$direction ? 'start' : '')};
    flex-direction: ${(props) => (props.$direction ? props.$direction : 'row')};
    flex-wrap: ${(props) => (props.$direction ? 'wrap' : '')};

    & ${TradeAdPaymentMethodSect} {
      width: 100%;
    }
  }
`;

export const TradeAdViewItemOne = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 600px) {
    width: auto;
    padding: 10px;
  }
`;
export const TradeAdViewItemTwo = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
  padding: 20px;
  height: auto;
  @media (max-width: 600px) {
    width: 85%;
    margin: auto;
    margin-top: 30px;
  }
`;

interface TradeAdViewHeaderTextProps {
  $fontSize?: string;
  $margin?: string;
  $borderBottom?: string;
  $color?: string;
}

export const TradeAdViewHeaderText = styled.h1<TradeAdViewHeaderTextProps>`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '32px')};
  font-weight: 700;
  line-height: ${(props) => (props.$fontSize ? '28px' : '40px')};
  color: ${(props) => (props.$color ? props.$color : '#000759')};
  margin-top: ${(props) => (props.$margin ? '0px' : props.$fontSize ? '50px' : '')};
  margin-bottom: ${(props) => (props.$fontSize ? '20px' : '')};
  border-bottom: ${(props) => (props.$borderBottom ? '1px solid #E5E7EB' : '')};
  padding-bottom: ${(props) => props.$borderBottom && '20px'};
  span {
    color: #19b536;
  }

  @media (max-width: 600px) {
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : '25px')};
    line-height: 30px;
  }
`;

export const TradeAmountNotificationWrapper = styled.div`
  border-radius: 6px;
  background: #f8ffef;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 25px 0;
`;

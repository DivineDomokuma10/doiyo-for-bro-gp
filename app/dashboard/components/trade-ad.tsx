import React, { ReactElement } from 'react';

import Image from 'next/image';

import {
  TradeAdBodyItem,
  TradeAdContainerHeaderText,
  TradeAdItemSectOne,
  TradeAdItemUserNameSect,
  TradeAdPaymentMethodSect,
  TradeAdPercentText,
  TradeAdUserName,
  NumberOfTradeText,
  MobileTradeAdBodyItemSectOne,
  MobileTradeAdBodyItemSectTwo,
  TradeAdContainer,
  MobileTradeAddBodyItem,
  TextFlag,
  CustomButton
} from '../dashboard.styles';
import { ButtonWrapper } from '../../create-account/create-account.styles';
import { TRADE_AD_TYPE } from '../../utils/interfaces/trade-ad.interface';
import { getCurrencySymbol, getPaymentMethodsName } from '../../helperMethods';
import { PAYMENT_METHOD, SUPPORTED_CURRENCIES } from '../../utils/constants';
import { UploadImage } from '../../account-settings/account-settings.styles';

export interface TradeAdItemProps {
  payMethods: string[];
  creator: {
    username: string;
  };
  exCurrency: SUPPORTED_CURRENCIES;
  price: number;
  minAmount: number;
  maxAmount: number;
  type: TRADE_AD_TYPE;
  availableAmount: number;
  _id: string;
  avatar: string;
  state: string;
}

export const TradeAd = ({
  payMethods,
  creator: { username },
  exCurrency,
  price,
  minAmount,
  maxAmount,
  availableAmount,
  _id,
  type,
  avatar,
  state
}: TradeAdItemProps): ReactElement => {
  const paymentMethods = getPaymentMethodsName(payMethods as PAYMENT_METHOD[]);
  const exCurrencySymbol = getCurrencySymbol(exCurrency);
  return (
    <>
      <TradeAdBodyItem>
        <TradeAdItemSectOne $width="18%">
          <UploadImage
            src={avatar ? avatar : '/assets/avatar2.svg'}
            alt={username}
            $width={'40px'}
            $height={'40px'}
          />
          <TradeAdItemUserNameSect>
            <TradeAdUserName>@{username}</TradeAdUserName>
            <NumberOfTradeText>-300 Trades</NumberOfTradeText>
          </TradeAdItemUserNameSect>
        </TradeAdItemSectOne>
        <TradeAdPaymentMethodSect>
          {paymentMethods.map((methodText, index) => (
            <TradeAdContainerHeaderText $textTransform key={index}>
              {methodText}
            </TradeAdContainerHeaderText>
          ))}
        </TradeAdPaymentMethodSect>
        <TradeAdItemSectOne $width="10%">
          <Image
            src={'/assets/nigeria-flag.svg'}
            alt={username}
            width={20}
            height={20}
            quality={100}
          />
          <TradeAdItemUserNameSect>
            <TradeAdUserName>{'Nigeria'}</TradeAdUserName>
            <NumberOfTradeText>{state}</NumberOfTradeText>
          </TradeAdItemUserNameSect>
        </TradeAdItemSectOne>
        <TradeAdItemSectOne $width="23%">
          <TradeAdItemUserNameSect>
            <TradeAdUserName>
              {exCurrencySymbol}
              {minAmount.toLocaleString()} - {exCurrencySymbol}
              {maxAmount.toLocaleString()}
            </TradeAdUserName>
            <NumberOfTradeText>
              ~(₦{(minAmount * price).toLocaleString()} - ₦{(maxAmount * price).toLocaleString()})
              Min - Max
            </NumberOfTradeText>
          </TradeAdItemUserNameSect>
        </TradeAdItemSectOne>
        <TradeAdItemSectOne>
          <TradeAdItemUserNameSect>
            <TradeAdUserName>
              {exCurrencySymbol}
              {availableAmount}
            </TradeAdUserName>
            <NumberOfTradeText>
              {exCurrencySymbol}1 = ₦{price.toLocaleString()}
            </NumberOfTradeText>
            <TradeAdPercentText>5% above market</TradeAdPercentText>
          </TradeAdItemUserNameSect>
        </TradeAdItemSectOne>
        <ButtonWrapper $width="7.5%">
          <CustomButton href={`/trade-ad-detail/${_id}`}>
            {type === TRADE_AD_TYPE.BUY ? 'Sell' : 'Buy'} {exCurrencySymbol}
          </CustomButton>
        </ButtonWrapper>
      </TradeAdBodyItem>
      <MobileTradeAddBodyItem>
        <MobileTradeAdBodyItemSectOne>
          <TradeAdUserName $align="center" $display="flex" $gap={'10px'}>
            @{username}
            <TextFlag
              src={'/assets/nigeria-flag-2.svg'}
              width={18}
              height={18}
              quality={100}
              alt="flag"
            />
          </TradeAdUserName>
          <NumberOfTradeText style={{ marginTop: 20 }}>Min - Max</NumberOfTradeText>
          <TradeAdUserName $margin="20px">
            {exCurrencySymbol}
            {minAmount.toLocaleString()} - {exCurrencySymbol}
            {maxAmount.toLocaleString()}
          </TradeAdUserName>
          <TradeAdPaymentMethodSect>
            {paymentMethods.map((methodText, index) => (
              <TradeAdContainerHeaderText $textTransform key={index}>
                {methodText}
              </TradeAdContainerHeaderText>
            ))}
          </TradeAdPaymentMethodSect>
        </MobileTradeAdBodyItemSectOne>
        <MobileTradeAdBodyItemSectTwo>
          <TradeAdContainer>
            <TradeAdUserName style={{ marginBottom: 10 }}>
              {exCurrencySymbol}
              {availableAmount.toLocaleString()}
            </TradeAdUserName>
            <NumberOfTradeText>
              1{exCurrencySymbol} = ₦{price.toLocaleString()}{' '}
            </NumberOfTradeText>
            <TradeAdPercentText>5% above market</TradeAdPercentText>
          </TradeAdContainer>
          <CustomButton href={`/trade-ad-detail/${_id}`}>
            {' '}
            {type === TRADE_AD_TYPE.BUY ? 'Sell' : 'Buy'} {exCurrencySymbol}
          </CustomButton>
        </MobileTradeAdBodyItemSectTwo>
      </MobileTradeAddBodyItem>
    </>
  );
};

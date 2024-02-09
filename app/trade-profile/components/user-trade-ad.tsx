import React from 'react';
import { Button } from '@mui/material';
import { Wrapper } from '../../styles/layout.styles';
import { CustomizableText } from '../../styles/text.styles';
import { TradeAdInterface } from '../../utils/interfaces/trade-ad.interface';
import { getCurrencySymbol, getPaymentMethodsName } from '../../helperMethods';

interface Props {
  tradeAd: TradeAdInterface;
}

const UserTradeAd = ({
  tradeAd: { payMethods, exCurrency, minAmount, availableAmount, maxAmount, price, type }
}: Props) => {
  const paymentMethods = getPaymentMethodsName(payMethods);

  const currencySymbol = getCurrencySymbol(exCurrency);

  return (
    <Wrapper $gap="30px" $display="flex" $align="center" $marginB="10px" $justify="space-between">
      <Wrapper $display="flex" $gap="10px" $align="center" $wrap="wrap" $width="30%">
        {paymentMethods.map((method, index) => (
          <Wrapper $display="flex" $align="center" $gap="2px" key={index}>
            <CustomizableText $margin="0px" $size="12px" $fontWeight="600" $lineHeight="16px">
              {method}
            </CustomizableText>
          </Wrapper>
        ))}
      </Wrapper>
      <Wrapper $display="flex" $direction="column" $gap="5px" $width="30%">
        <CustomizableText
          $alignText="right"
          $size="14px"
          $fontWeight="600"
          $lineHeight="20px"
          $margin="0px">
          {currencySymbol}
          {minAmount} - {currencySymbol}
          {maxAmount}
        </CustomizableText>
        <CustomizableText
          $alignText="right"
          $color="#999"
          $fontWeight="400"
          $size="12px"
          $lineHeight="16px"
          $margin="0px">
          Min - Max
        </CustomizableText>
      </Wrapper>
      <Wrapper $display="flex" $direction="column" $gap="5px" $width="25%">
        <CustomizableText
          $color="#138829"
          $size="16px"
          $fontWeight="700"
          $alignText="right"
          $margin="0px">
          {currencySymbol} {availableAmount}
        </CustomizableText>
        <CustomizableText
          $alignText="right"
          $color="#999"
          $fontWeight="400"
          $size="12px"
          $lineHeight="16px"
          $margin="0px">
          {currencySymbol}1 = ₦{price}
        </CustomizableText>
        <CustomizableText
          $color="#138829"
          $size="10px"
          $fontWeight="400"
          $alignText="right"
          $margin="0px"
          $lineHeight="12px">
          {currencySymbol} {availableAmount}
        </CustomizableText>
      </Wrapper>
      <Button sx={{ width: '15%', fontWeight: 600 }} variant="contained">
        {type} {currencySymbol}
      </Button>
    </Wrapper>
  );
};

export default UserTradeAd;

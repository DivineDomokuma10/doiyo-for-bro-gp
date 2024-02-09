import React, { ReactElement } from 'react';
import Summary from '../../../components/summary';
import { SummaryItem } from '../../../components/summary/summary.styles';
import { CustomizableText } from '../../../styles/text.styles';
import { TRADE_AD_TYPE } from '../../../utils/interfaces/trade-ad.interface';
import { SUPPORTED_CURRENCIES } from '../../../utils/constants';
import { useFormContext } from 'react-hook-form';
import { getCurrencySymbol } from '../../../helperMethods';

const SummaryWrapper = (): ReactElement => {
  const { getValues } = useFormContext();
  const { type, exCurrency, totalAmount, duration, price } = getValues();
  const exCurrencySymbol = getCurrencySymbol(exCurrency);
  return (
    <Summary subTitle="Trade Details" summaryTitle="Summary">
      <SummaryItem>
        <CustomizableText $color="#666" $size="12px" $fontWeight="400">
          Type
        </CustomizableText>
        <CustomizableText $color="#2A2A2A" $size="12px" $fontWeight="600">
          {type === TRADE_AD_TYPE.BUY ? 'Buy FX' : type === TRADE_AD_TYPE.SELL ? 'Sell FX' : ''}
        </CustomizableText>
      </SummaryItem>

      {type && (
        <SummaryItem>
          <CustomizableText $color="#666" $size="12px" $fontWeight="400">
            {type === TRADE_AD_TYPE.BUY ? 'Buying' : 'Selling'}
          </CustomizableText>
          <CustomizableText $color="#2A2A2A" $size="12px" $fontWeight="600">
            {exCurrency === SUPPORTED_CURRENCIES.GBP
              ? 'Pounds'
              : exCurrency === SUPPORTED_CURRENCIES.USD
                ? 'Dollar'
                : exCurrency === SUPPORTED_CURRENCIES.EUR
                  ? 'Euro'
                  : 'Tether'}
          </CustomizableText>
        </SummaryItem>
      )}

      {price && (
        <SummaryItem>
          <CustomizableText $color="#666" $size="12px" $fontWeight="400">
            Price
          </CustomizableText>
          <CustomizableText $color="#2A2A2A" $size="12px" $fontWeight="600">
            ₦{Number(price).toLocaleString()}/{exCurrencySymbol}
          </CustomizableText>
        </SummaryItem>
      )}

      {totalAmount && (
        <SummaryItem>
          <CustomizableText $color="#666" $size="12px" $fontWeight="400">
            Amount
          </CustomizableText>
          <CustomizableText $color="#2A2A2A" $size="12px" $fontWeight="600">
            {Number(totalAmount).toLocaleString()}
          </CustomizableText>
        </SummaryItem>
      )}

      {duration && (
        <SummaryItem>
          <CustomizableText $color="#666" $size="12px" $fontWeight="400">
            Trade Duration
          </CustomizableText>
          <CustomizableText $color="#2A2A2A" $size="12px" $fontWeight="600">
            {duration} mins
          </CustomizableText>
        </SummaryItem>
      )}

      <SummaryItem>
        <CustomizableText $color="#666" $size="12px" $fontWeight="400">
          Location
        </CustomizableText>
        <CustomizableText $color="#2A2A2A" $size="12px" $fontWeight="600">
          Lagos, Nigeria
        </CustomizableText>
      </SummaryItem>
    </Summary>
  );
};

export default SummaryWrapper;

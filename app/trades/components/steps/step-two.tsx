import React, { ReactElement } from 'react';
import { InfoRounded } from '@mui/icons-material';

import { GreenWrapper, StepWrapper } from './steps.styles';
import { FlexWrapper } from '../../../styles/layout.styles';
import { CustomizableText } from '../../../styles/text.styles';
import { plusJakartaSans } from '../../../utils/fonts';
import PaymentDetails from '../payment-details';
import { PAYMENT_METHOD, TRADE_POINT } from '../../../utils/constants';
import DragAndDrop from '../drag-and-drop';
import { filteredPaymentMethods, getStepTwoInfoText } from '../../helperMethods';
import { PaymentMethodInterface } from '../../../utils/interfaces/user.interface';
import { getPaymentMethodName } from '../../../helperMethods';
// import { getPaymentMethodName } from '../../../helperMethods';

interface Props<T> {
  amount: T;
  paymentMethods: PaymentMethodInterface[];
  paymentMethod: T;
  payableAmount: T;
  isUserBuyer: boolean;
  tradePoint: TRADE_POINT;
  sellerName: string;
  buyerName: string;
  exCurrencySymbol: string;
}

const StepTwo = ({
  amount,
  paymentMethods,
  paymentMethod,
  payableAmount,
  isUserBuyer,
  sellerName,
  buyerName,
  tradePoint,
  exCurrencySymbol
}: Props<string>): ReactElement => {
  const infoText = getStepTwoInfoText({
    tradePoint,
    amount,
    payableAmount,
    isUserBuyer,
    sellerName,
    buyerName
  });

  const paymentMethodName = getPaymentMethodName(paymentMethod as PAYMENT_METHOD);

  const structuredPaymentMethod = filteredPaymentMethods(paymentMethods, paymentMethod);

  return (
    <StepWrapper>
      <GreenWrapper>
        <FlexWrapper $desktop={{ $direction: 'column', $items: 'center', $spaceY: '10px' }}>
          <InfoRounded fontSize="small" htmlColor="#19B536" />

          <CustomizableText
            $size="16px"
            $fontWeight="600"
            $alignText="center"
            $margin="0"
            $color="#138829"
            className={plusJakartaSans.className}>
            {infoText}
          </CustomizableText>
        </FlexWrapper>
      </GreenWrapper>

      {!isUserBuyer && tradePoint === TRADE_POINT.SELLER_TO_MAKE_PAYMENT && (
        <PaymentDetails
          paymentMethodName={paymentMethodName}
          paymentMethod={structuredPaymentMethod}
          exCurrencySymbol={exCurrencySymbol}
        />
      )}
      {isUserBuyer && tradePoint !== TRADE_POINT.SELLER_TO_MAKE_PAYMENT && <DragAndDrop />}
    </StepWrapper>
  );
};

export default StepTwo;

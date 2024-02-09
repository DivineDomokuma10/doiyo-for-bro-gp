import React, { ReactElement } from 'react';
import { InfoRounded } from '@mui/icons-material';

import { GreenWrapper, StepWrapper } from './steps.styles';
import { FlexWrapper } from '../../../styles/layout.styles';
import { CustomizableText } from '../../../styles/text.styles';
import { plusJakartaSans } from '../../../utils/fonts';
import PaymentDetails from '../payment-details';
import { TRADE_STATUS } from '../../../utils/constants';
import { PaymentMethodInterface } from '../../../utils/interfaces/user.interface';

interface Props {
  isUserBuyer: boolean;
  payableAmount: string;
  exCurrencySymbol: string;
  status: TRADE_STATUS;
}

const StepOne = ({ isUserBuyer, payableAmount, status }: Props): ReactElement => {
  const doiyoAccountDetails = {
    accountName: 'Doiyo Software ltd',
    accountNumber: '1229025041'
  };
  const infoText = isUserBuyer
    ? `You are to make payment of ₦${payableAmount} to Doiyo’s account details below.`
    : 'Waiting for Buyer to make Payment to Escrow';
  const isTradeCancelled = status === TRADE_STATUS.CANCELLED;
  return (
    <StepWrapper>
      <GreenWrapper $isTradeCancelled={isTradeCancelled}>
        <FlexWrapper $desktop={{ $direction: 'column', $items: 'center', $spaceY: '10px' }}>
          <InfoRounded fontSize="small" htmlColor={isTradeCancelled ? '#feebeb' : '#19B536'} />

          <CustomizableText
            $alignText="center"
            className={plusJakartaSans.className}
            $color={isTradeCancelled ? 'gray' : '#19B536'}
            $size="16px"
            $margin="0"
            $fontWeight="600">
            {isTradeCancelled ? 'This Trade was cancelled' : infoText}
          </CustomizableText>

          {!isTradeCancelled && isUserBuyer && (
            <PaymentDetails
              paymentMethod={doiyoAccountDetails as PaymentMethodInterface}
              paymentMethodName="Zenith Bank"
            />
          )}
        </FlexWrapper>
      </GreenWrapper>
    </StepWrapper>
  );
};

export default StepOne;

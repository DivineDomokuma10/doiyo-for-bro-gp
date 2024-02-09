import React, { ReactElement } from 'react';
import { InfoRounded } from '@mui/icons-material';

import { GreenWrapper, StepWrapper } from './steps.styles';
import { FlexWrapper } from '../../../styles/layout.styles';
import { CustomizableText } from '../../../styles/text.styles';
import DragAndDrop from '../drag-and-drop';
import { plusJakartaSans } from '../../../utils/fonts';
import { getStepThreeInfoText } from '../../helperMethods';
import { TRADE_POINT, TRADE_STATUS } from '../../../utils/constants';
import Image from 'next/image';

interface Props {
  amount: string;
  sellerName: string;
  buyerName: string;
  tradePoint: TRADE_POINT;
  isUserBuyer: boolean;
  status: TRADE_STATUS;
}

const StepThree = ({
  amount,
  buyerName,
  sellerName,
  tradePoint,
  isUserBuyer,
  status
}: Props): ReactElement => {
  const infoText = getStepThreeInfoText({
    amount,
    buyerName,
    sellerName,
    tradePoint,
    isUserBuyer,
    status
  });
  return (
    <StepWrapper>
      <GreenWrapper>
        <FlexWrapper $desktop={{ $direction: 'column', $items: 'center', $spaceY: '10px' }}>
          {tradePoint === TRADE_POINT.DOIYO_TO_MAKE_PAYMENT ||
          tradePoint == TRADE_POINT.SELLER_TO_CONFIRM_RECEIVED ? (
            <Image alt="trophy" height={50} width={50} src="/assets/trophy.svg" />
          ) : (
            <InfoRounded fontSize="small" htmlColor="#19B536" />
          )}

          <CustomizableText
            $margin="0"
            $alignText="center"
            $color="#19B536"
            $size="16px"
            $fontWeight="600"
            className={plusJakartaSans.className}>
            {infoText}
          </CustomizableText>
        </FlexWrapper>
      </GreenWrapper>

      {tradePoint === TRADE_POINT.BUYER_TO_CONFIRM_RECEIVED && !isUserBuyer && <DragAndDrop />}
    </StepWrapper>
  );
};

export default StepThree;

import React, { ReactElement } from 'react';

import Timer from './timer';
import { carnero } from '../../utils/fonts';
import { NUMBERS, TRADE_POINT, TRADE_STATUS } from '../../utils/constants';
import { CustomButton } from '../../styles/layout.styles';
import { StepControlButtonWrapper, StepControlWrapper } from './trade-details.styles';
import { getActionButtonState, getActionButtonText } from '../helperMethods';
import { TRADE_ACTION_TYPE } from '../../utils/interfaces/trade.interface';

interface Props {
  activeStep: number;
  handleUserAction: (actionType: TRADE_ACTION_TYPE) => void;
  isTradeCancelled: boolean;
  isUserBuyer: boolean;
  tradePoint: TRADE_POINT;
  status: TRADE_STATUS;
  expiresIn: string;
}

const StepsControl = ({
  activeStep,
  handleUserAction,
  isTradeCancelled,
  isUserBuyer,
  tradePoint,
  expiresIn,
  status
}: Props): ReactElement => {
  const isActionButtonDisabled = getActionButtonState(tradePoint, isUserBuyer, status);
  const actionButtonText = getActionButtonText(tradePoint, isUserBuyer);

  const handleUserActionType =
    (actionType: TRADE_ACTION_TYPE): (() => void) =>
    (): void => {
      handleUserAction(actionType);
    };
  return (
    <StepControlWrapper>
      {expiresIn && !isTradeCancelled && <Timer expiresIn={expiresIn} />}

      <StepControlButtonWrapper>
        <CustomButton
          onClick={handleUserActionType(TRADE_ACTION_TYPE.CANCEL)}
          $width={{ $desktop: '161px', $mobile: '100%' }}
          variant="outlined"
          disabled={activeStep === NUMBERS.THREE || isTradeCancelled || isActionButtonDisabled}>
          <p className={carnero.className}>Cancel Trade</p>
        </CustomButton>

        <CustomButton
          $width={{ $desktop: '218px', $mobile: '100%' }}
          variant="contained"
          disabled={isTradeCancelled || isActionButtonDisabled}
          onClick={handleUserActionType(TRADE_ACTION_TYPE.PROCEED)}>
          <p className={carnero.className}>{actionButtonText}</p>
        </CustomButton>
      </StepControlButtonWrapper>
    </StepControlWrapper>
  );
};

export default StepsControl;

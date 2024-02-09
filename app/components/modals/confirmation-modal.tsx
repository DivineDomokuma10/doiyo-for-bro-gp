import Image from 'next/image';

import Modal from '.';
import { ModalButtonWrapper, ModalContentWrapper, ModalHeaderWrapper } from './modals.styles';
import { CustomButton, FlexWrapper } from '../../styles/layout.styles';
import { CustomizableText } from '../../styles/text.styles';
import Timer from '../../trades/components/timer';
import { carnero } from '../../utils/fonts';
import { TRADE_POINT } from '../../utils/constants';
import { TRADE_ACTION_TYPE } from '../../utils/interfaces/trade.interface';

interface Props {
  isModalOpen: boolean;
  handleAcceptClick: (type: TRADE_ACTION_TYPE) => void;
  handleCancelClick: () => void;
  tradePoint: TRADE_POINT;
  expiresIn: string;
  createdAt: string;
  type: TRADE_ACTION_TYPE;
}

function ConfirmationModal({
  isModalOpen,
  handleAcceptClick,
  handleCancelClick,
  tradePoint,
  createdAt,
  expiresIn,
  type
}: Props) {
  const textColor = type === TRADE_ACTION_TYPE.CANCEL ? '#F10909' : '#000759';
  const showTimer = tradePoint !== TRADE_POINT.CREATOR_TO_ACCEPT_TRADE && expiresIn;

  const onAcceptClick =
    (type: TRADE_ACTION_TYPE): (() => void) =>
    (): void => {
      handleAcceptClick(type);
    };

  return (
    <Modal width="fit-content" open={isModalOpen} direction="row">
      <ModalHeaderWrapper>
        <Image color={textColor} src={'/cautionIcon.svg'} alt="" width={20} height={20} />
      </ModalHeaderWrapper>

      <ModalContentWrapper>
        <CustomizableText
          $margin="0"
          $size="20px"
          $alignText="center"
          $color={textColor}
          $fontWeight="600">
          Payment Confirmation
        </CustomizableText>

        {type === TRADE_ACTION_TYPE.PROCEED && (
          <CustomizableText $margin="0" $size="14px" $color="#666" $fontWeight="500">
            {tradePoint === TRADE_POINT.BUYER_TO_CONFIRM_RECEIVED ||
            tradePoint === TRADE_POINT.SELLER_TO_CONFIRM_RECEIVED
              ? 'Make sure you have verified successful receipt of exact payment amount to the specified method of payment before clicking confirm'
              : 'Make sure you have made payment to the specified method of payment and have a valid proof of payment before clicking confirm'}
          </CustomizableText>
        )}
        {type === TRADE_ACTION_TYPE.CANCEL && (
          <CustomizableText $margin="0" $size="14px" $color="#666" $fontWeight="500">
            Are you sure, you want to cancel trade, Cancelling trade frequently will get you
            restricted
          </CustomizableText>
        )}

        <FlexWrapper
          $desktop={{ $direction: 'row', $justify: 'space-between', $width: '100%' }}
          $mobile={{
            $direction: 'column',
            $spaceX: '0px',
            $spaceY: '5px',
            $justify: 'flex-start'
          }}>
          {showTimer && <Timer expiresIn={expiresIn} createdAt={createdAt} />}

          <ModalButtonWrapper $width={showTimer ? '60%' : '100%'}>
            <CustomButton
              $width={{ $mobile: '270px' }}
              variant="outlined"
              $height="40px"
              onClick={handleCancelClick}>
              <p className={carnero.className}>Cancel</p>
            </CustomButton>

            <CustomButton
              $width={{ $mobile: '270px' }}
              variant="contained"
              $height="40px"
              onClick={onAcceptClick(type)}>
              <p className={carnero.className}>Confirm</p>
            </CustomButton>
          </ModalButtonWrapper>
        </FlexWrapper>
      </ModalContentWrapper>
    </Modal>
  );
}

export default ConfirmationModal;

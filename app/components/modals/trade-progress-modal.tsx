import Image from 'next/image';
import Modal from '.';
import { CustomButton } from '../../styles/layout.styles';
import { CustomizableText } from '../../styles/text.styles';
import Timer from '../../trades/components/timer';
import { carnero, carneroBold, plusJakartaSans } from '../../utils/fonts';
import { ModalButtonWrapper, ModalContentWrapper, ModalHeaderWrapper } from './modals.styles';
import { getAcceptTradeText } from './helperMethod';
import { TRADE_TYPE } from '../../dashboard/constants';
import { TRADE_ACTION_TYPE } from '../../utils/interfaces/trade.interface';

export enum MODAL_VARIATIONS {
  WAIT = 'WAIT',
  ACCEPT = 'ACCEPT'
}
interface Props {
  isModalOpen: boolean;
  onModalClose: () => void;
  handleYesClick: () => void;
  handleNoClick: (type: TRADE_ACTION_TYPE) => void;
  creatorName: string;
  initiatorName: string;
  amount: string;
  buyerName?: string;
  variation: MODAL_VARIATIONS;
  payableAmount: string;
  tradeType: TRADE_TYPE;
  createdAt: string;
}

function TradeProgressModal({
  initiatorName,
  payableAmount,
  onModalClose,
  handleNoClick,
  handleYesClick,
  creatorName,
  isModalOpen,
  variation,
  tradeType,
  createdAt,
  amount
}: Props) {
  const isAcceptVariation = variation === MODAL_VARIATIONS.ACCEPT;
  const descriptionText = getAcceptTradeText({
    amount,
    payableAmount,
    tradeType
  });

  const declineTrade =
    (type: TRADE_ACTION_TYPE): (() => void) =>
    (): void => {
      handleNoClick(type);
    };

  return (
    <Modal
      width="418px"
      items="center"
      open={isModalOpen}
      direction={'column'}
      onClose={onModalClose}>
      <ModalHeaderWrapper>
        <Image src={'/modalIcon2.svg'} alt="" width={258.811} height={193.765} />
      </ModalHeaderWrapper>

      <ModalContentWrapper $items="center">
        <CustomizableText
          $margin="0"
          className={carneroBold.className}
          $size="20px"
          $alignText="center"
          $color="#000759"
          $fontWeight="700">
          {!isAcceptVariation
            ? `Waiting for @${creatorName} to accept trade proposal`
            : 'You have a trade request'}
        </CustomizableText>

        <CustomizableText
          $margin="0"
          className={plusJakartaSans.className}
          $size="14px"
          $alignText="center"
          $color="#666"
          $fontWeight="500">
          {isAcceptVariation ? (
            <>
              Hello {creatorName},{' '}
              <CustomizableText $margin="0" $color="#000759" $fontWeight="700">
                @{initiatorName}
              </CustomizableText>{' '}
              {descriptionText}
            </>
          ) : (
            `Please wait patiently for creator to accept trade`
          )}
        </CustomizableText>

        {isAcceptVariation && <Timer createdAt={createdAt} />}
      </ModalContentWrapper>

      <ModalButtonWrapper>
        {variation === MODAL_VARIATIONS.ACCEPT && (
          <CustomButton
            onClick={declineTrade(TRADE_ACTION_TYPE.CANCEL)}
            $bgColor="#F10909"
            variant="contained"
            fullWidth>
            <p className={carnero.className}>Decline Trade</p>
          </CustomButton>
        )}

        <CustomButton
          variant="contained"
          onClick={handleYesClick}
          fullWidth
          className={carnero.className}>
          <p className={carnero.className}>{isAcceptVariation ? 'Accept Trade' : 'Okay'}</p>
        </CustomButton>
      </ModalButtonWrapper>
    </Modal>
  );
}

export default TradeProgressModal;

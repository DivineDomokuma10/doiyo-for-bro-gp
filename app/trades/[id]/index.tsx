'use client';
import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';

import Stepper from '../../components/stepper/stepper';
import { CustomizableText } from '../../styles/text.styles';

import { NUMBERS, TRADE_POINT, TRADE_STATUS } from '../../utils/constants';
import StepsControl from '../components/steps-control';
import StepThree from '../components/steps/step-three';
import StepOne from '../components/steps/step-one';
import StepTwo from '../components/steps/step-two';

import {
  TradeDetailsWrapper,
  TradeStartedContentWrapper,
  TradeStartedStepperWrapper,
  TradeStartedWrapper
} from '../components/trade-details.styles';

import TradeProgressModal, { MODAL_VARIATIONS } from '../../components/modals/trade-progress-modal';
import useGetTradeMutation from '../../hooks/api-hooks/useGetTradeMutation';
import { AppContextStore } from '../../contexts/app-context';
import { TRADE_TYPE } from '../../dashboard/constants';
import useUpdateTradeMutation from '../../hooks/api-hooks/useUpdateTradeMutation';
import { TRADE_ACTION_TYPE, TRADE_UPDATE_TYPE } from '../../utils/interfaces/trade.interface';
import ConfirmationModal from '../../components/modals/confirmation-modal';
import useTradeUpdateSocket from '../../hooks/useTradeUpdateSocket';
import { FlexWrapper } from '../../styles/layout.styles';
import { carneroBold, plusJakartaSans } from '../../utils/fonts';
import { getActiveStep, getCompletedStep, getTransactionFee } from '../helperMethods';
import { getCurrencySymbol } from '../../helperMethods';
import TradeSummary from '../components/trade-summary';

interface TradeDetailsProps {
  params: { id: string };
}

const Steps = [
  'Buyer Pays into Doiyo Escrow',
  'Doiyo confirms, and seller send funds',
  'Buyer confirms Received, and Seller gets funds'
];

const TradeDetails = ({ params }: TradeDetailsProps): ReactElement => {
  const router = useRouter();
  const { state } = useContext(AppContextStore);

  const userId = state?.user?._id || '';

  const { data } = useGetTradeMutation(params.id);
  const { mutate: updateTrade } = useUpdateTradeMutation(params.id);

  useTradeUpdateSocket(params.id, data?.status);

  const [completeStep, setCompleteStep] = useState<number>(NUMBERS.ZERO);
  const [activeStep, setActiveStep] = useState<number>(NUMBERS.ONE);

  const {
    amount,
    status,
    payableAmount,
    tradeAd,
    seller,
    buyer,
    tradePoint,
    createdAt,
    expiresIn,
    payMethod
  } = data || {};

  const [isAcceptTradeModalOpen, setIsAcceptTradeModalOpen] = useState<boolean>(false);
  const [isConfirmModal, setIsConfirmModal] = useState<{
    open: boolean;
    type: TRADE_ACTION_TYPE;
  }>({ open: false, type: TRADE_ACTION_TYPE.PROCEED });

  const isUserCreator = tradeAd?.creator === userId;
  const isCreatorBuyer = tradeAd?.creator === buyer?._id;
  const exCurrency = tradeAd?.exCurrency;
  const isUserBuyer = buyer?._id === userId;

  const percentFee = getTransactionFee(exCurrency, isUserCreator);
  const transactionFee = Math.floor((percentFee / NUMBERS.ONE_HUNDRED) * payableAmount);

  const calculatedPayableAmount = isUserBuyer
    ? (payableAmount + transactionFee)?.toLocaleString()
    : (payableAmount - transactionFee)?.toLocaleString();
  const tradePayableAmount = payableAmount?.toLocaleString();
  const tradeAmount = amount?.toLocaleString();

  const exCurrencySymbol = getCurrencySymbol(exCurrency);

  const isTradeCancelled = status === TRADE_STATUS.CANCELLED;

  const closeConfirmModal = (): void =>
    setIsConfirmModal({ open: false, type: isConfirmModal.type });

  const onModalOneClose = (): void => router.push('/trades');

  const acceptTrade = (): void => {
    switch (status) {
      case TRADE_STATUS.PENDING:
        if (!isUserCreator) {
          router.push('/trades');
          break;
        }
        updateTrade({ tradeId: params.id, updateType: TRADE_UPDATE_TYPE.ACCEPT });
        setIsAcceptTradeModalOpen(false);
      default:
        return;
    }
  };

  const handleCancelTrade = (): void => {
    switch (tradePoint) {
      case TRADE_POINT.CREATOR_TO_ACCEPT_TRADE:
        if (!isUserCreator) {
          break;
        }
        updateTrade({ tradeId: params.id, updateType: TRADE_UPDATE_TYPE.CANCEL });
        setIsConfirmModal({ open: false, type: TRADE_ACTION_TYPE.CANCEL });
        break;
      case TRADE_POINT.BUYER_TO_MAKE_PAYMENT:
      case TRADE_POINT.DOIYO_TO_CONFIRM_RECEIVED:
        if (!isUserBuyer) {
          break;
        }
        updateTrade({ tradeId: params.id, updateType: TRADE_UPDATE_TYPE.CANCEL });
        setIsConfirmModal({ open: false, type: TRADE_ACTION_TYPE.CANCEL });
      default:
        return;
    }
  };

  const confirmAction = (actionType: TRADE_ACTION_TYPE): void => {
    if (actionType === TRADE_ACTION_TYPE.PROCEED) {
      confirmPayment();
      return;
    }
    handleCancelTrade();
  };

  const confirmPayment = (): void => {
    switch (tradePoint) {
      case TRADE_POINT.BUYER_TO_MAKE_PAYMENT:
        updateTrade({ tradeId: params.id, updateType: TRADE_UPDATE_TYPE.MADE_PAYMENT });
        setIsConfirmModal({ open: false, type: TRADE_ACTION_TYPE.PROCEED });
        break;
      case TRADE_POINT.SELLER_TO_MAKE_PAYMENT:
        updateTrade({ tradeId: params.id, updateType: TRADE_UPDATE_TYPE.MADE_PAYMENT });
        setIsConfirmModal({ open: false, type: TRADE_ACTION_TYPE.PROCEED });
        break;
      case TRADE_POINT.BUYER_TO_CONFIRM_RECEIVED:
        updateTrade({ tradeId: params.id, updateType: TRADE_UPDATE_TYPE.CONFIRM_RECEIVED_PAYMENT });
        setIsConfirmModal({ open: false, type: TRADE_ACTION_TYPE.PROCEED });
        break;
      case TRADE_POINT.SELLER_TO_CONFIRM_RECEIVED:
        updateTrade({ tradeId: params.id, updateType: TRADE_UPDATE_TYPE.CONFIRM_RECEIVED_PAYMENT });
        setIsConfirmModal({ open: false, type: TRADE_ACTION_TYPE.PROCEED });
    }
  };

  const openConfirmModal = (actionType: TRADE_ACTION_TYPE): void => {
    if (actionType === TRADE_ACTION_TYPE.CANCEL) {
      setIsConfirmModal({ open: true, type: TRADE_ACTION_TYPE.CANCEL });
      return;
    }

    setIsConfirmModal({ open: true, type: TRADE_ACTION_TYPE.PROCEED });
  };

  useEffect(() => {
    const step = getActiveStep(tradePoint);
    setActiveStep(step);
    setCompleteStep(getCompletedStep(step, tradePoint, isUserBuyer, status));
  }, [tradePoint, isUserBuyer, status]);

  useEffect(() => {
    setIsAcceptTradeModalOpen(status === TRADE_STATUS.PENDING);
  }, [status, tradePoint]);

  return (
    <TradeDetailsWrapper>
      {status === TRADE_STATUS.PENDING && (
        <TradeProgressModal
          handleNoClick={openConfirmModal}
          variation={isUserCreator ? MODAL_VARIATIONS.ACCEPT : MODAL_VARIATIONS.WAIT}
          initiatorName={isCreatorBuyer ? seller.username : buyer.username}
          creatorName={isCreatorBuyer ? buyer.username : seller.username}
          tradeType={isCreatorBuyer ? TRADE_TYPE.BUY : TRADE_TYPE.SELL}
          handleYesClick={acceptTrade}
          onModalClose={onModalOneClose}
          payableAmount={tradePayableAmount}
          isModalOpen={isAcceptTradeModalOpen}
          amount={exCurrencySymbol + tradeAmount}
          createdAt={createdAt}
        />
      )}

      {isConfirmModal && (
        <ConfirmationModal
          createdAt={createdAt}
          type={isConfirmModal.type}
          expiresIn={expiresIn}
          tradePoint={tradePoint}
          handleCancelClick={closeConfirmModal}
          isModalOpen={isConfirmModal.open}
          handleAcceptClick={confirmAction}
        />
      )}

      <TradeStartedWrapper>
        <FlexWrapper $desktop={{ $direction: 'column', $spaceY: '22px' }}>
          <CustomizableText
            $margin="0"
            className={carneroBold.className}
            $size="32px"
            $fontWeight="700"
            $color="#000759">
            Trade Started
          </CustomizableText>

          <FlexWrapper $desktop={{ $direction: 'column', $spaceY: '3px' }}>
            <CustomizableText
              $margin="0"
              className={plusJakartaSans.className}
              $size="16px"
              $fontWeight="700"
              $color="#444">
              You are the seller
            </CustomizableText>

            <CustomizableText
              $margin="0"
              className={plusJakartaSans.className}
              $size="16px"
              $fontWeight="400"
              $color="#444">
              Please follow the steps listed below to competed this trade.
            </CustomizableText>
          </FlexWrapper>
        </FlexWrapper>

        <TradeStartedContentWrapper>
          <CustomizableText
            $margin="0"
            className={carneroBold.className}
            $size="20px"
            $fontWeight="700"
            $color="#000759">
            Trade Information
          </CustomizableText>

          <TradeStartedStepperWrapper>
            <Stepper steps={Steps} activeStep={activeStep} completedStep={completeStep} />

            <Box>
              {activeStep === NUMBERS.ONE || isTradeCancelled ? (
                <StepOne
                  status={status}
                  payableAmount={calculatedPayableAmount}
                  isUserBuyer={isUserBuyer}
                  exCurrencySymbol={exCurrencySymbol}
                />
              ) : activeStep === NUMBERS.TWO ? (
                <StepTwo
                  sellerName={seller.username}
                  buyerName={buyer.username}
                  isUserBuyer={isUserBuyer}
                  tradePoint={tradePoint}
                  payableAmount={tradePayableAmount}
                  amount={`${exCurrencySymbol}${tradeAmount}`}
                  paymentMethods={buyer?.payMethods}
                  paymentMethod={payMethod}
                  exCurrencySymbol={exCurrencySymbol}
                />
              ) : (
                <StepThree
                  status={status}
                  amount={`${exCurrencySymbol + tradeAmount}`}
                  sellerName={seller.username}
                  buyerName={buyer.username}
                  isUserBuyer={isUserBuyer}
                  tradePoint={tradePoint}
                />
              )}
            </Box>

            <StepsControl
              handleUserAction={openConfirmModal}
              isTradeCancelled={isTradeCancelled}
              isUserBuyer={isUserBuyer}
              activeStep={activeStep}
              tradePoint={tradePoint}
              expiresIn={expiresIn}
              status={status}
            />
          </TradeStartedStepperWrapper>
        </TradeStartedContentWrapper>
      </TradeStartedWrapper>
      <TradeSummary
        amount={exCurrencySymbol + tradeAmount}
        exCurrencySymbol={exCurrencySymbol}
        isUserBuyer={isUserBuyer}
        payableAmount={`${calculatedPayableAmount}`}
        price={`${tradeAd?.price}`}
        transactionFee={transactionFee}
      />
    </TradeDetailsWrapper>
  );
};

export default TradeDetails;

import { NUMBERS, SUPPORTED_CURRENCIES, TRADE_POINT, TRADE_STATUS } from '../utils/constants';
import { TradeInfoTextInterface } from '../utils/interfaces/trade.interface';
import { PaymentMethodInterface } from '../utils/interfaces/user.interface';

export function getActiveStep(tradePoint: TRADE_POINT) {
  switch (tradePoint) {
    case TRADE_POINT.BUYER_TO_MAKE_PAYMENT:
    case TRADE_POINT.CREATOR_TO_ACCEPT_TRADE:
      return NUMBERS.ONE;
    case TRADE_POINT.DOIYO_TO_CONFIRM_RECEIVED:
    case TRADE_POINT.SELLER_TO_MAKE_PAYMENT:
      return NUMBERS.TWO;
    case TRADE_POINT.BUYER_TO_CONFIRM_RECEIVED:
    case TRADE_POINT.DOIYO_TO_MAKE_PAYMENT:
    case TRADE_POINT.SELLER_TO_CONFIRM_RECEIVED:
      return NUMBERS.THREE;
    default:
      return NUMBERS.ONE;
  }
}

export function getCompletedStep(
  step: number,
  tradePoint: TRADE_POINT,
  isUserBuyer: boolean,
  status: TRADE_STATUS
) {
  switch (step) {
    case NUMBERS.ONE:
      return NUMBERS.ZERO;
    case NUMBERS.TWO:
      return NUMBERS.ONE;
    case NUMBERS.THREE:
      if (status === TRADE_STATUS.COMPLETED) {
        return NUMBERS.THREE;
      }
      if (
        (tradePoint === TRADE_POINT.DOIYO_TO_MAKE_PAYMENT ||
          tradePoint === TRADE_POINT.SELLER_TO_CONFIRM_RECEIVED) &&
        isUserBuyer
      ) {
        return NUMBERS.THREE;
      }
      return NUMBERS.TWO;
    default:
      return NUMBERS.ZERO;
  }
}

export function getStepTwoInfoText({
  tradePoint,
  amount,
  payableAmount,
  isUserBuyer,
  sellerName,
  buyerName
}: TradeInfoTextInterface) {
  switch (tradePoint) {
    case TRADE_POINT.DOIYO_TO_CONFIRM_RECEIVED:
      return `Just a moment, we are confirming payment of ₦${payableAmount} to Doiyo’s account. ${
        isUserBuyer
          ? 'You can also send prove of payment using the field below to fast track this process'
          : ''
      }`;
    case TRADE_POINT.SELLER_TO_MAKE_PAYMENT:
      if (isUserBuyer) {
        return `Waiting for @${sellerName} to send FX (${amount})...`;
      }
      return `Please make payment of ${amount} to @${buyerName}’s fx account details below to get funds released to you.`;
    default:
      return 'Waiting for Trade to proceed';
  }
}

export function getActionButtonText(tradePoint: TRADE_POINT, isUserBuyer: boolean): string {
  switch (tradePoint) {
    case TRADE_POINT.BUYER_TO_MAKE_PAYMENT:
      if (isUserBuyer) {
        return 'Made Payment? Notify Seller';
      }
      return 'Made Payment? Notify Buyer';
    case TRADE_POINT.DOIYO_TO_CONFIRM_RECEIVED:
    case TRADE_POINT.SELLER_TO_MAKE_PAYMENT:
      if (isUserBuyer) {
        return 'Upload Proof';
      }
      return 'Made Payment? Notify Buyer';
    case TRADE_POINT.BUYER_TO_CONFIRM_RECEIVED:
      if (isUserBuyer) {
        return 'Confirm Received Payment';
      }
      return 'Upload Proof';
    case TRADE_POINT.DOIYO_TO_MAKE_PAYMENT:
    case TRADE_POINT.SELLER_TO_CONFIRM_RECEIVED:
      if (!isUserBuyer) {
        return 'Confirm Received Payment';
      }
    default:
      return 'Made Payment';
  }
}

export function getActionButtonState(
  tradePoint: TRADE_POINT,
  isUserBuyer: boolean,
  status?: TRADE_STATUS
): boolean {
  switch (tradePoint) {
    case TRADE_POINT.BUYER_TO_MAKE_PAYMENT:
      return isUserBuyer ? false : true;
    case TRADE_POINT.BUYER_TO_CONFIRM_RECEIVED:
      return false;
    case TRADE_POINT.SELLER_TO_MAKE_PAYMENT:
      return isUserBuyer ? true : false;
    case TRADE_POINT.DOIYO_TO_MAKE_PAYMENT:
    case TRADE_POINT.DOIYO_TO_CONFIRM_RECEIVED:
      return true;
    case TRADE_POINT.SELLER_TO_CONFIRM_RECEIVED:
      return isUserBuyer || status === TRADE_STATUS.COMPLETED ? true : false;
    default:
      return true;
  }
}

export function getStepThreeInfoText({
  amount,
  buyerName,
  sellerName,
  isUserBuyer,
  tradePoint,
  status
}: TradeInfoTextInterface) {
  switch (tradePoint) {
    case TRADE_POINT.BUYER_TO_CONFIRM_RECEIVED:
      if (isUserBuyer) {
        return `@${sellerName} has sent ${amount}, please confirm receipt!`;
      }
      return `Just a moment now, @${buyerName} is confirming your payment of ${amount}. You can also send prove of payment using the field below to fast track this process.`;
    case TRADE_POINT.DOIYO_TO_MAKE_PAYMENT:
    case TRADE_POINT.SELLER_TO_CONFIRM_RECEIVED:
      if (isUserBuyer || status === TRADE_STATUS.COMPLETED) {
        return 'Congratulations, Trade Successfully completed';
      }
      return `@${buyerName}’s has confirmed receipt of funds. Your funds will be released to your account shortly.`;
    default:
      return '';
  }
}

export const calculateInitialTime = (expiresIn?: string, createdAt?: string): number => {
  if (expiresIn) {
    const expirationDate = new Date(expiresIn);
    const currentTime = new Date().getTime() / NUMBERS.ONE_THOUSAND; // Current time in seconds
    const remainingTime = Math.max(
      expirationDate.getTime() / NUMBERS.ONE_THOUSAND - currentTime,
      NUMBERS.ZERO
    );
    return remainingTime;
  } else if (createdAt) {
    const createdDate = new Date(createdAt);
    const currentTime = new Date().getTime() / NUMBERS.ONE_THOUSAND; // Current time in seconds
    const elapsedTime = currentTime - createdDate.getTime() / NUMBERS.ONE_THOUSAND; // Elapsed time since creation in seconds
    return Math.max(NUMBERS.TEN * NUMBERS.SIXTY - elapsedTime, NUMBERS.ZERO); // Remaining time in seconds
  } else {
    return NUMBERS.ZERO; // Default to 0 if neither expiresIn nor createdAt is provided
  }
};

export const getTradeStatusText = (
  status: TRADE_STATUS,
  tradePoint: TRADE_POINT,
  isUserBuyer: boolean
): string => {
  switch (status) {
    case TRADE_STATUS.PENDING:
      return 'Pending';
    case TRADE_STATUS.CANCELLED:
      return 'Cancelled';
    case TRADE_STATUS.COMPLETED:
      return 'Completed';
    case TRADE_STATUS.DISPUTED:
      'Dispute';
    case TRADE_STATUS.IN_PROGRESS:
      if (
        (tradePoint === TRADE_POINT.DOIYO_TO_MAKE_PAYMENT ||
          tradePoint === TRADE_POINT.SELLER_TO_CONFIRM_RECEIVED) &&
        isUserBuyer
      ) {
        return 'Completed';
      }
      return 'In Progress';
    default:
      return 'Pending';
  }
};

export const filteredPaymentMethods = (
  paymentMethods: PaymentMethodInterface[],
  paymentMethod: string
) => {
  const filteredPaymentMethod = paymentMethods.filter(
    (payMethod) => payMethod.paymentMethod === paymentMethod
  );
  return filteredPaymentMethod[0];
};

export const checkPaymentMethodText = (paymentMethodName: string): string => {
  return paymentMethodName === 'Binance Pay' ||
    paymentMethodName === 'Perfect Money' ||
    paymentMethodName === 'Skrill' ||
    paymentMethodName === 'Wise' ||
    paymentMethodName === 'Zelle'
    ? `Payment Method`
    : 'Bank Name';
};

export const checkPaymentMethodAccountName = (paymentMethodName: string): string => {
  return paymentMethodName === 'Skrill' ||
    paymentMethodName === 'Zelle' ||
    paymentMethodName === 'Binance Pay' ||
    paymentMethodName === 'Wise'
    ? 'Email'
    : 'Account Name';
};

export const checkPaymentMethodAccountNumber = (paymentMethodName: string): boolean => {
  return paymentMethodName === 'GTB' ||
    paymentMethodName === 'Zenith Bank' ||
    paymentMethodName === 'Access Bank' ||
    paymentMethodName === 'Perfect Money'
    ? true
    : false;
};

export const getTransactionFee = (
  exCurrency: SUPPORTED_CURRENCIES,
  isUserCreator: boolean
): number => {
  switch (exCurrency) {
    case SUPPORTED_CURRENCIES.USDT:
      if (isUserCreator) return NUMBERS.ZERO_POINT_ONE;
      return NUMBERS.ZERO;
    default:
      if (isUserCreator) return NUMBERS.ZERO_POINT_TWO_FIVE;
      return NUMBERS.ZERO;
  }
};

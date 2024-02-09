import { PAYMENT_METHOD, SUPPORTED_CURRENCIES, TRADE_POINT, TRADE_STATUS } from '../constants';
import { UserInterface } from './user.interface';

export interface TradeInterface {
  _id: string;
  amount: number;
  buyer: UserInterface;
  seller: UserInterface;
  payableAmount: number;
  tradeAd: {
    _id: string;
    exCurrency: SUPPORTED_CURRENCIES;
    bsCurrency: string;
    creator: string;
    price: number;
  };
  hasCreatorAcceptTrade: boolean;
  hasBuyerSentPayment: boolean;
  hasDoiyoReceivedPayment: boolean;
  hasSellerSentPayment: boolean;
  hasBuyerReceivedPayment: boolean;
  hasSellerReceivedPayment: boolean;
  tradePoint: TRADE_POINT;
  status: TRADE_STATUS;
  createdAt: string;
  expiresIn: string;
  payMethod: PAYMENT_METHOD;
  avatar: string;
}

export interface TradeQueryInterface {
  page: number;
  limit: number;
}

export interface TradesDataInterface {
  totalPages: number;
  currentPage: number;
  totalTrades: number;
  data: TradeInterface[];
}

export interface StartTradeInterface {
  tradeAdId: string;
  amount: number;
  payMethod: PAYMENT_METHOD;
}

export enum TRADE_UPDATE_TYPE {
  CONFIRM_RECEIVED_PAYMENT = 'CONFIRM_RECEIVED_PAYMENT',
  MADE_PAYMENT = 'MADE_PAYMENT',
  DISPUTE = 'DISPUTE',
  ACCEPT = 'ACCEPT',
  CANCEL = 'CANCEL'
}
export interface UpdateTradeInterface {
  tradeId: string;
  updateType: TRADE_UPDATE_TYPE;
}

export interface TradeInfoTextInterface {
  tradePoint: TRADE_POINT;
  amount: string;
  payableAmount?: string;
  isUserBuyer: boolean;
  sellerName: string;
  buyerName: string;
  status?: TRADE_STATUS;
}

export enum TRADE_ACTION_TYPE {
  CANCEL = 'CANCEL',
  PROCEED = 'PROCEED'
}

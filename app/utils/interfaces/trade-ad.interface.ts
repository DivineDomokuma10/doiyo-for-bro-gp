import { TRADE_TYPE } from '../../dashboard/constants';
import { PAYMENT_METHOD, SUPPORTED_CURRENCIES } from '../constants';

export enum TRADE_AD_TYPE {
  SELL = 'SELL',
  BUY = 'BUY'
}

export interface TradeAdQueryInterface {
  exCurrency: SUPPORTED_CURRENCIES;
  amount?: number;
  type: TRADE_TYPE;
  payMethods?: PAYMENT_METHOD[];
  page: number;
  limit: number;
}

export interface TradeAdInterface {
  type: TRADE_AD_TYPE;
  creator: {
    username: string;
  };
  price: number;
  minAmount: number;
  maxAmount: number;
  availableAmount: number;
  totalAmount: number;
  duration: number;
  isPublished: boolean;
  exCurrency: SUPPORTED_CURRENCIES;
  bsCurrency: string;
  payMethods: PAYMENT_METHOD[];
  _id: string;
  avatar: string;
}

export interface TradeAdsDataInterface {
  totalPages: number;
  currentPages: number;
  totalTradeAds: number;
  data: TradeAdInterface[];
}

export interface CreateTradeAdInterface {
  type: string;
  price: number;
  minAmount: number;
  maxAmount: number;
  totalAmount: number;
  duration: number;
  exCurrency: string;
  bsCurrency: string;
  payMethods: string[];
}

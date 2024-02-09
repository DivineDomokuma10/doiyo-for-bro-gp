import * as yup from 'yup';

import { NUMBERS, PAYMENT_METHOD, SUPPORTED_CURRENCIES, TRADE_DURATION } from '../utils/constants';
import { CreateTradeAdInterface, TRADE_AD_TYPE } from '../utils/interfaces/trade-ad.interface';

export const createTradeAdStepOneSchema = yup
  .object({
    exCurrency: yup.string().oneOf(Object.values(SUPPORTED_CURRENCIES)).required(),
    type: yup.string().oneOf(Object.values(TRADE_AD_TYPE)).required(),
    payMethods: yup
      .array()
      .of(yup.string().oneOf(Object.values(PAYMENT_METHOD)))
      .min(NUMBERS.ONE)
      .max(NUMBERS.THREE)
      .required()
  })
  .required() as yup.Schema<Partial<CreateTradeAdInterface>>;

export const createTradeAdStepTwoSchema = yup
  .object({
    totalAmount: yup.number().min(NUMBERS.FIFTY).max(NUMBERS.FIVE_THOUSAND).required(),
    minAmount: yup.number().min(NUMBERS.FIFTY).max(NUMBERS.FIVE_THOUSAND).required(),
    maxAmount: yup.number().min(NUMBERS.FIFTY).max(NUMBERS.FIVE_THOUSAND).required(),
    price: yup.number().required()
  })
  .required() as yup.Schema<Partial<CreateTradeAdInterface>>;

export const createTradeAdStepThreeSchema = yup
  .object({
    duration: yup
      .number()
      .oneOf(Object.values(TRADE_DURATION as unknown as number))
      .required(),
    withdrawalMethod: yup
      .array()
      .when('type', (type, schema) => {
        if ((type[0] as unknown as TRADE_AD_TYPE) === TRADE_AD_TYPE.SELL) {
          return schema.of(yup.string().min(NUMBERS.TEN).max(NUMBERS.TEN)).required();
        }
        return schema;
      })
      .length(NUMBERS.ONE)
  })
  .required() as yup.Schema<Partial<CreateTradeAdInterface>>;

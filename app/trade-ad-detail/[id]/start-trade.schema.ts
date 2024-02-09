import * as yup from 'yup';
import { PAYMENT_METHOD } from '../../utils/constants';

export const startTradeSchema = yup
  .object({
    amount: yup.number().required(),
    payMethod: yup.string().oneOf(Object.values(PAYMENT_METHOD)).required()
  })
  .required();

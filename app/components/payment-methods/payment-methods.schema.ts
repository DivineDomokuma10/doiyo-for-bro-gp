import * as yup from 'yup';

import { PaymentMethodFormInterface } from '../../utils/interfaces/user.interface';
import { NUMBERS } from '../../utils/constants';

export const wiseSchema = yup
  .object({
    userId: yup.string().required()
  })
  .notRequired() as yup.Schema<Partial<PaymentMethodFormInterface>>;

export const bankAccountSchema = yup
  .object({
    accountNumber: yup.string().min(NUMBERS.EIGHT).max(NUMBERS.TWELVE).required(),
    accountName: yup.string().required(),
    bankName: yup
      .string()
      .transform((value) => (!value ? undefined : value))
      .trim()
      .max(NUMBERS.ONE_HUNDRED, 'Bank Name must not exceed 100 characters')
  })
  .notRequired() as yup.Schema<Partial<PaymentMethodFormInterface>>;

export const WalletSchema = yup
  .object({
    email: yup.string().email().required()
  })
  .required() as yup.Schema<Partial<PaymentMethodFormInterface>>;

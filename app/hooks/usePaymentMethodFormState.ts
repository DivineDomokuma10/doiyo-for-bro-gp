import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReturn,
  useForm
} from 'react-hook-form';

import {
  bankAccountSchema,
  WalletSchema
} from '../components/payment-methods/payment-methods.schema';

import { PAYMENT_METHOD } from '../utils/constants';
import { PaymentMethodFormInterface } from '../utils/interfaces/user.interface';

interface UserPaymentMethodFormInterface {
  formMethods: UseFormReturn<PaymentMethodFormInterface>;
  register: UseFormRegister<PaymentMethodFormInterface>;
  errors: FieldErrors<PaymentMethodFormInterface>;
  handleSubmit: UseFormHandleSubmit<PaymentMethodFormInterface, undefined>;
  isValid: boolean;
}

export const useFinancialInstitutionFormState = (
  paymentMethod: PAYMENT_METHOD | string
): UserPaymentMethodFormInterface => {
  const getSchemaForFinancialInstitution = (
    paymentMethod: PAYMENT_METHOD | string
  ): yup.ObjectSchema<PaymentMethodFormInterface> => {
    switch (paymentMethod) {
      case PAYMENT_METHOD.WISE:
      case PAYMENT_METHOD.SKRILL:
      case PAYMENT_METHOD.ZELLE:
      case PAYMENT_METHOD.BINANCE_PAY:
        return WalletSchema as yup.ObjectSchema<PaymentMethodFormInterface>;

      case PAYMENT_METHOD.PERFECT_MONEY:
      case PAYMENT_METHOD.ZENITH_BANK:
      case PAYMENT_METHOD.ACCESS_BANK:
      case PAYMENT_METHOD.GTB:
        return bankAccountSchema as yup.ObjectSchema<PaymentMethodFormInterface>;

      default:
        return bankAccountSchema as yup.ObjectSchema<PaymentMethodFormInterface>;
    }
  };

  const formMethods = useForm<PaymentMethodFormInterface>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(getSchemaForFinancialInstitution(paymentMethod))
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = formMethods;

  return { formMethods, register, errors, handleSubmit, isValid };
};

import { yupResolver } from '@hookform/resolvers/yup';
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReturn,
  useForm
} from 'react-hook-form';
import * as yup from 'yup';

import { NUMBERS } from '../utils/constants';
import {
  createTradeAdStepOneSchema,
  createTradeAdStepThreeSchema,
  createTradeAdStepTwoSchema
} from '../create-trade-ad/create-trade-ad.schema';
import { CreateTradeAdInterface } from '../utils/interfaces/trade-ad.interface';

interface CreateTradeAdFormStateInterface {
  formMethods: UseFormReturn<CreateTradeAdInterface>;
  register: UseFormRegister<CreateTradeAdInterface>;
  errors: FieldErrors<CreateTradeAdInterface>;
  handleSubmit: UseFormHandleSubmit<CreateTradeAdInterface, undefined>;
  isValid: boolean;
}

export const useCreateTradeAdFormState = (currentStep: number): CreateTradeAdFormStateInterface => {
  const getSchemaForStep = (step: number): yup.ObjectSchema<CreateTradeAdInterface> => {
    switch (step) {
      case NUMBERS.ZERO:
        return createTradeAdStepOneSchema as yup.ObjectSchema<CreateTradeAdInterface>;
      case NUMBERS.ONE:
        return createTradeAdStepTwoSchema as yup.ObjectSchema<CreateTradeAdInterface>;
      case NUMBERS.TWO:
        return createTradeAdStepThreeSchema as yup.ObjectSchema<CreateTradeAdInterface>;
      default:
        return yup.object().shape({}) as yup.ObjectSchema<CreateTradeAdInterface>;
    }
  };

  const formMethods = useForm<CreateTradeAdInterface>({
    resolver: yupResolver(getSchemaForStep(currentStep)),
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = formMethods;

  return { formMethods, register, errors, handleSubmit, isValid };
};

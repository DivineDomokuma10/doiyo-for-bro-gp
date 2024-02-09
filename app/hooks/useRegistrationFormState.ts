import { yupResolver } from '@hookform/resolvers/yup';
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReturn,
  useForm
} from 'react-hook-form';
import * as yup from 'yup';

import {
  registrationStepThreeSchema,
  registrationStepFourSchema,
  registrationStepOneSchema,
  registrationStepTwoSchema
} from '../create-account/register-form.schema';
import { NUMBERS } from '../utils/constants';
import { RegistrationFormInterface } from '../utils/interfaces/user.interface';

interface UserRegistrationFormStateInterface {
  formMethods: UseFormReturn<RegistrationFormInterface>;
  register: UseFormRegister<RegistrationFormInterface>;
  errors: FieldErrors<RegistrationFormInterface>;
  handleSubmit: UseFormHandleSubmit<RegistrationFormInterface, undefined>;
  isValid: boolean;
}

export const useRegistrationFormState = (
  currentStep: number
): UserRegistrationFormStateInterface => {
  const getSchemaForStep = (step: number): yup.ObjectSchema<RegistrationFormInterface> => {
    switch (step) {
      case NUMBERS.ONE:
        return registrationStepOneSchema as yup.ObjectSchema<RegistrationFormInterface>;
      case NUMBERS.TWO:
        return registrationStepTwoSchema as yup.ObjectSchema<RegistrationFormInterface>;
      case NUMBERS.THREE:
        return registrationStepThreeSchema as yup.ObjectSchema<RegistrationFormInterface>;
      case NUMBERS.FOUR:
        return registrationStepFourSchema as yup.ObjectSchema<RegistrationFormInterface>;
      default:
        return yup.object().shape({}) as yup.ObjectSchema<RegistrationFormInterface>;
    }
  };

  const formMethods = useForm<RegistrationFormInterface>({
    defaultValues: {
      country: 'NGN',
      state: ''
    },
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

import * as yup from 'yup';
import { NUMBERS } from '../utils/constants';

export const resetPasswordSchema = yup
  .object({
    newPassword: yup
      .string()
      .min(NUMBERS.EIGHT, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[\d]/, 'Password must contain at least one digit')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one symbol')
      .required(),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'Password does not match')
      .required()
  })
  .required();

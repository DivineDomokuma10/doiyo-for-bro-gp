import * as yup from 'yup';

import { NUMBERS } from '../utils/constants';
import { RegistrationFormInterface } from '../utils/interfaces/user.interface';

export const registrationStepOneSchema = yup
  .object({
    country: yup.string().required(),
    state: yup.string().min(NUMBERS.TWO).max(NUMBERS.THREE).required()
  })
  .required() as yup.Schema<Partial<RegistrationFormInterface>>;

export const registrationStepTwoSchema = yup
  .object({
    firstName: yup.string().min(NUMBERS.TWO).max(NUMBERS.FIFTY).required(),
    lastName: yup.string().min(NUMBERS.TWO).max(NUMBERS.FIFTY).required(),
    username: yup.string().min(NUMBERS.THREE).max(NUMBERS.FIFTY).required(),
    email: yup.string().email().required(),
    phone: yup.string().min(NUMBERS.TEN).max(NUMBERS.TWENTY).required(),
    referral: yup
      .string()
      .transform((value) => (!value ? undefined : value))
      .trim()
      .length(NUMBERS.SIX, 'referral code is min six characters')
  })
  .required() as yup.Schema<Partial<RegistrationFormInterface>>;

export const registrationStepThreeSchema = yup
  .object({
    password: yup
      .string()
      .min(NUMBERS.EIGHT, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[\d]/, 'Password must contain at least one digit')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one symbol'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password does not match')
  })
  .required() as yup.Schema<Partial<RegistrationFormInterface>>;

export const registrationStepFourSchema = yup
  .object({
    otp: yup.string().min(NUMBERS.SIX).max(NUMBERS.SIX).required()
  })
  .required() as yup.Schema<Partial<RegistrationFormInterface>>;

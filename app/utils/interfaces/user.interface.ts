import { PAYMENT_METHOD } from '../constants';

export interface LoginDataInterface {
  email: string;
  password: string;
  isRemember?: boolean;
}

export interface LoginResponseInterface {
  access_token: string;
}

export interface RegistrationDataInterface {
  country: string;
  state: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  referral?: string;
  username: string;
  password: string;
}

export interface RegistrationFormInterface extends RegistrationDataInterface {
  confirmPassword: string;
  otp: string;
}

export interface RegistrationResponseInterface {
  _id: string;
}

export interface EmailVerificationInterface {
  otp: string;
  userId: string;
}

export interface EmailVerificationResponseInterface {
  _id: string;
  message: string;
}

export interface RequestPasswordResetInterface {
  email: string;
}

export interface VerifyTokenValidityInterface {
  token: string;
  userId: string;
}

export interface ResetPasswordInterface {
  userId: string;
  token: string;
  password: string;
}

export interface WiseAccountDetails {
  userId: string;
}

export interface BankAccountInterface {
  accountNumber: string;
  accountName: string;
  bankName: string;
}

export interface SkrillAccountDetails {
  skrillEmail: string;
}

export interface ZelleAccountDetails {
  zelleEmail: string;
}

export interface BinancePayAccountDetails {
  binanceEmail: string;
}

export type PaymentMethodFormInterface =
  | WiseAccountDetails
  | SkrillAccountDetails
  | ZelleAccountDetails
  | BinancePayAccountDetails
  | BankAccountInterface;

export interface PaymentMethodInterface {
  accountNumber?: string;
  accountName?: string;
  paymentMethod: PAYMENT_METHOD;
  binanceId?: string;
  email?: string;
  phone?: string;
  phoneNumber?: string;
}

export interface UserInterface {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  bio: string;
  createdAt: string;
  country: string;
  state: string;
  payMethods: PaymentMethodInterface[];
  withdrawalMethods: BankAccountInterface[];
  trades: string;
  trade_volumes: string;
  id: { status: boolean };
  address: { status: boolean };
}

export interface FilterPaymentMethodInterface {
  userPaymentMethods: PaymentMethodInterface[];
  payMethods?: PAYMENT_METHOD[];
  path?: string;
}

import axios, { AxiosResponse } from 'axios';

import {
  BankAccountInterface,
  EmailVerificationInterface,
  EmailVerificationResponseInterface,
  LoginDataInterface,
  LoginResponseInterface,
  PaymentMethodInterface,
  RegistrationDataInterface,
  RegistrationResponseInterface,
  RequestPasswordResetInterface,
  ResetPasswordInterface,
  UserInterface,
  VerifyTokenValidityInterface
} from '../utils/interfaces/user.interface';
import BaseApi from './BaseApi';

const apiURL = process.env.API_URL;
class UserApi extends BaseApi {
  static async login(
    credentials: LoginDataInterface
  ): Promise<AxiosResponse<LoginResponseInterface>> {
    const response = await axios.post(`${apiURL}/auth/login`, credentials);
    return response;
  }

  static async checkAuthValidity() {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.get(`${apiURL}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  }

  static async register(
    credentials: RegistrationDataInterface
  ): Promise<AxiosResponse<RegistrationResponseInterface>> {
    const response = await axios.post(`${apiURL}/users`, credentials);
    return response;
  }

  static async verifyEmail(
    data: EmailVerificationInterface
  ): Promise<AxiosResponse<EmailVerificationResponseInterface>> {
    const response = await axios.post(`${apiURL}/auth/verifyEmail`, data);
    return response;
  }

  static async requestPasswordRest(data: RequestPasswordResetInterface): Promise<AxiosResponse> {
    const response = await axios.post(`${apiURL}/users/request-password-reset`, data);
    return response;
  }
  static async resendVerificationCode(userId: string): Promise<AxiosResponse> {
    const response = await axios.get(`${apiURL}/users/send-verification-email/${userId}`);
    return response;
  }

  static async verifyResetPasswordTokenValidity(data: VerifyTokenValidityInterface) {
    const response = await axios.post(`${apiURL}/auth/verify-token-validity`, data);
    return response;
  }

  static async resetPassword(data: ResetPasswordInterface) {
    const response = await axios.post(`${apiURL}/auth/reset-password`, data);
    return response;
  }

  static async getUser(): Promise<AxiosResponse<UserInterface>> {
    const response = await this.getRequest('/users/user');
    return response;
  }

  static async addWithdrawalMethod(
    data: BankAccountInterface
  ): Promise<AxiosResponse<{ _id: string; message: string }>> {
    const response = await this.patchRequest('/users/add-withdrawal-method', data);
    return response;
  }

  static async addPaymentMethod(
    data: PaymentMethodInterface
  ): Promise<AxiosResponse<{ _id: string; message: string }>> {
    const response = await this.patchRequest('/users/add-payment-method', data);
    return response;
  }
}
export default UserApi;

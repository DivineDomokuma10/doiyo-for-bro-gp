import { AxiosResponse } from 'axios';

import {
  CreateTradeAdInterface,
  TRADE_AD_TYPE,
  TradeAdInterface,
  TradeAdQueryInterface,
  TradeAdsDataInterface
} from '../utils/interfaces/trade-ad.interface';
import BaseApi from './BaseApi';
import { FieldValues } from 'react-hook-form';

class TradeAdApi extends BaseApi {
  static async getTradeAds(
    queryData?: TradeAdQueryInterface
  ): Promise<AxiosResponse<TradeAdsDataInterface>> {
    const response = await this.getRequest('/trade-ads', { params: queryData });
    return response;
  }

  static async getTradeAd(id: string): Promise<AxiosResponse<TradeAdInterface>> {
    const response = await this.getRequest(`/trade-ads/${id}`);
    return response;
  }

  static async getUserCreatedTradeAds(): Promise<AxiosResponse<TradeAdInterface[]>> {
    const response = await this.getRequest(`/trade-ads/user`);
    return response;
  }

  static async createTrade(
    createTradeAdData: CreateTradeAdInterface | FieldValues
  ): Promise<AxiosResponse<{ _id: string; creatorId: string; type: TRADE_AD_TYPE }>> {
    const response = await this.postRequest(`/trade-ads`, createTradeAdData);
    return response;
  }
}
export default TradeAdApi;

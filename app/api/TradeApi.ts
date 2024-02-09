import { AxiosResponse } from 'axios';

import BaseApi from './BaseApi';
import {
  StartTradeInterface,
  TradeInterface,
  TradeQueryInterface,
  TradesDataInterface,
  UpdateTradeInterface
} from '../utils/interfaces/trade.interface';

class TradeApi extends BaseApi {
  static async startTrade(
    data: StartTradeInterface
  ): Promise<AxiosResponse<{ _id: string; message: string }>> {
    const response = await this.postRequest(`/trades`, data);
    return response;
  }

  static async getTrade(id: string): Promise<AxiosResponse<TradeInterface>> {
    const response = await this.getRequest(`/trades/${id}`);
    return response;
  }

  static async getUserTrades(
    queryData?: TradeQueryInterface
  ): Promise<AxiosResponse<TradesDataInterface>> {
    const response = await this.getRequest(`/trades`, { params: queryData });
    return response;
  }

  static async updateTrade(
    id: string,
    updatePayload: UpdateTradeInterface
  ): Promise<AxiosResponse<{ _id: string; message: string }>> {
    const response = await this.patchRequest(`/trades/${id}`, updatePayload);
    return response;
  }
}
export default TradeApi;

import { NUMBERS } from '../utils/constants';
import { TRADE_AD_TYPE, TradeAdInterface } from '../utils/interfaces/trade-ad.interface';

interface UserTradeAdsTypeFrequencyReturns {
  sell: number;
  buy: number;
}

export const getUserTradeAdsTypeFrequency = (
  userTradeAds: TradeAdInterface[]
): UserTradeAdsTypeFrequencyReturns => {
  const tradeAdTypeFrequency = { sell: NUMBERS.ZERO, buy: NUMBERS.ZERO };

  userTradeAds?.forEach((tradeAd) => {
    tradeAd.type === TRADE_AD_TYPE.BUY
      ? (tradeAdTypeFrequency.buy += NUMBERS.ONE)
      : (tradeAdTypeFrequency.sell += NUMBERS.ONE);
  });

  return tradeAdTypeFrequency;
};

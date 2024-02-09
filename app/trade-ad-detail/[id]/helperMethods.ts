import { getCurrencyName } from '../../helperMethods';
import { SUPPORTED_CURRENCIES } from '../../utils/constants';
import { TRADE_AD_TYPE } from '../../utils/interfaces/trade-ad.interface';

export function getTradeAdHeaderText(
  tradeAdType: TRADE_AD_TYPE,
  exCurrency: SUPPORTED_CURRENCIES,
  currencySymbol: string
): string {
  const currencyName = getCurrencyName(exCurrency);
  switch (tradeAdType) {
    case TRADE_AD_TYPE.BUY:
      return `Sell ${currencyName} (${currencySymbol}) from`;
    default:
      return `Buy ${currencyName} (${currencySymbol}) from`;
  }
}

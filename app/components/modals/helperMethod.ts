import { TRADE_TYPE } from '../../dashboard/constants';
interface AcceptTradeTextInterface {
  amount: string;
  tradeType: TRADE_TYPE;
  payableAmount: string;
}

export function getAcceptTradeText({
  payableAmount,
  tradeType,
  amount
}: AcceptTradeTextInterface): string {
  const text = `wants to ${
    tradeType === TRADE_TYPE.BUY ? 'Buy ' : 'Sell '
  }${amount} worth ₦${payableAmount} in escrow which will be released to your account after you make payment.`;

  return text;
}

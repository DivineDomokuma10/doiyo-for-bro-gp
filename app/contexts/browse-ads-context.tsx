import { ReactNode, createContext, useReducer } from 'react';
import { PAYMENT_METHOD, SUPPORTED_CURRENCIES } from '../utils/constants';
import { BROWSE_TRADE_ADS_ACTIONS } from '../utils/actions';
import { TRADE_TYPE } from '../dashboard/constants';

interface InitialState {
  exCurrency: SUPPORTED_CURRENCIES;
  tradeType: TRADE_TYPE;
  amount?: number;
  payMethods?: PAYMENT_METHOD[];
}

interface IAction {
  type: string;
  payload: unknown;
}

interface ContextInterface {
  state: InitialState;
  dispatch: React.Dispatch<IAction>;
}

export const BrowseAdsContextStore = createContext({} as ContextInterface);

export const reducer = (state: InitialState, action: IAction) => {
  switch (action.type) {
    case BROWSE_TRADE_ADS_ACTIONS.CHANGE_CURRENCY:
      return { ...state, exCurrency: action.payload as SUPPORTED_CURRENCIES };

    case BROWSE_TRADE_ADS_ACTIONS.SWITCH_TRADE_TYPE:
      return { ...state, tradeType: action.payload as TRADE_TYPE };
    case BROWSE_TRADE_ADS_ACTIONS.SELECT_PAY_METHODS:
      return { ...state, payMethods: action.payload as PAYMENT_METHOD[] };
    case BROWSE_TRADE_ADS_ACTIONS.CHANGE_AMOUNT:
      return { ...state, amount: action.payload as number };
    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

const initialState = {
  exCurrency: SUPPORTED_CURRENCIES.USD,
  tradeType: TRADE_TYPE.BUY,
  payMethods: []
};

function BrowseAdsContext({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowseAdsContextStore.Provider value={{ state, dispatch }}>
      {children}
    </BrowseAdsContextStore.Provider>
  );
}

export default BrowseAdsContext;

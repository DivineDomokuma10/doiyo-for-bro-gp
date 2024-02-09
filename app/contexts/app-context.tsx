import { ReactNode, Suspense, createContext, useEffect, useReducer } from 'react';

import { UserInterface } from '../utils/interfaces/user.interface';
import useGetUserMutation from '../hooks/api-hooks/useGetUserMutation';
import { APP_ACTIONS } from '../utils/actions';
import useAuth from '../hooks/api-hooks/useAuth';

interface InitialState {
  user: UserInterface;
}

interface IAction {
  type: string;
  payload: unknown;
}

interface ContextInterface {
  state: InitialState;
  dispatch: React.Dispatch<IAction>;
}

export const AppContextStore = createContext({} as ContextInterface);

export const reducer = (state: InitialState, action: IAction) => {
  switch (action.type) {
    case APP_ACTIONS.LOAD_USER:
      return { ...state, user: action.payload as UserInterface };
    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

const initialState = {
  user: {
    _id: '',
    firstName: '',
    lastName: '',
    username: '',
    country: '',
    state: '',
    email: '',
    phone: '',
    avatar: '',
    bio: '',
    createdAt: '',
    payMethods: [],
    withdrawalMethods: [],
    trade_volumes: '',
    trades: '',
    id: { status: false },
    address: { status: false }
  }
};

function AppContext({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isUserAuthenticated, isPending] = useAuth();

  const { data } = useGetUserMutation();

  useEffect(() => {
    dispatch({ type: APP_ACTIONS.LOAD_USER, payload: data });
  }, [data]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      {isPending && <div>loading...</div>}
      {isUserAuthenticated && (
        <AppContextStore.Provider value={{ state, dispatch }}>{children}</AppContextStore.Provider>
      )}
    </Suspense>
  );
}

export default AppContext;

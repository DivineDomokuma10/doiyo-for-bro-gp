import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { TRADE_STATUS } from '../utils/constants';

const SOCKET_SERVER_URL = process.env.API_URL || '';

const useTradeUpdateSocket = (
  tradeId: string,
  tradeStatus: TRADE_STATUS = TRADE_STATUS.CANCELLED
) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    if (tradeStatus === TRADE_STATUS.CANCELLED || tradeStatus === TRADE_STATUS.COMPLETED) {
      socket.disconnect();

      return () => {};
    }

    const queryKey = ['trades', tradeId];

    socket.emit('joinTradeRoom', tradeId);

    const handleTradeUpdated = () => {
      queryClient.invalidateQueries({ queryKey });
    };

    const handleReconnect = () => {
      socket.emit('joinTradeRoom', tradeId);
    };

    socket.on('tradeUpdated', handleTradeUpdated);
    socket.on('reconnect', handleReconnect);

    return () => {
      // Remove event listeners
      socket.off('tradeUpdated', handleTradeUpdated);
      socket.off('reconnect', handleReconnect);

      // Disconnect the socket
      socket.disconnect();
    };
  }, [tradeId, tradeStatus, queryClient]);
};

export default useTradeUpdateSocket;

import { useQuery } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

import { TradeQueryInterface, TradesDataInterface } from '../../utils/interfaces/trade.interface';
import { STATUS_CODES } from '../../utils/constants';
import TradeApi from '../../api/TradeApi';

interface GetUserTradesMutationInterface {
  isLoadingData: boolean;
  data: TradesDataInterface;
}

function useGetUserTradesMutation(query: TradeQueryInterface): GetUserTradesMutationInterface {
  const { enqueueSnackbar } = useSnackbar();
  const { isPending, data } = useQuery({
    queryKey: ['trades', query],
    queryFn: async () => {
      const data = await TradeApi.getUserTrades(query);
      if (data.status !== STATUS_CODES.success) {
        enqueueSnackbar(`Failed to fetch Trade`, {
          variant: 'error',
          anchorOrigin: { horizontal: 'right', vertical: 'top' }
        });
      }
      return data.data;
    }
  });

  return { isLoadingData: isPending, data: data! };
}

export default useGetUserTradesMutation;

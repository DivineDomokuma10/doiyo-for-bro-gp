import { useQuery } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

import { TradeInterface } from '../../utils/interfaces/trade.interface';
import { STATUS_CODES } from '../../utils/constants';
import TradeApi from '../../api/TradeApi';

interface GetTradeMutationInterface {
  isLoadingData: boolean;
  data: TradeInterface;
}

function useGetTradeMutation(id: string): GetTradeMutationInterface {
  const { enqueueSnackbar } = useSnackbar();
  const { isPending, data } = useQuery({
    queryKey: ['trades', id],
    queryFn: async () => {
      const data = await TradeApi.getTrade(id);
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

export default useGetTradeMutation;

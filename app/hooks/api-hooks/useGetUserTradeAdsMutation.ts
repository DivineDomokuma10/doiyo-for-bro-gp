import { useSnackbar } from 'notistack';
import { useQuery } from '@tanstack/react-query';

import TradeAdApi from '../../api/TradeAdApi';
import { STATUS_CODES } from '../../utils/constants';
import { TradeAdInterface } from '../../utils/interfaces/trade-ad.interface';

interface GetUserTradeAdsMutationInterface {
  isLoadingData: boolean;
  data: TradeAdInterface[];
}

function useGetUserTradeAdsMutation(): GetUserTradeAdsMutationInterface {
  const { enqueueSnackbar } = useSnackbar();
  const { isPending, data } = useQuery({
    queryKey: ['tradeAds'],
    queryFn: async () => {
      const data = await TradeAdApi.getUserCreatedTradeAds();
      if (data.status !== STATUS_CODES.success) {
        enqueueSnackbar(`Failed to fetch Trade Ads`, {
          variant: 'error',
          anchorOrigin: { horizontal: 'right', vertical: 'top' }
        });
      }
      return data.data;
    }
  });

  return { isLoadingData: isPending, data: data! };
}

export default useGetUserTradeAdsMutation;

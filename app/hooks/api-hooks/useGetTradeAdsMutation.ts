import { useQuery } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import TradeAdApi from '../../api/TradeAdApi';
import {
  TradeAdQueryInterface,
  TradeAdsDataInterface
} from '../../utils/interfaces/trade-ad.interface';
import { STATUS_CODES } from '../../utils/constants';

interface GetTradeAdsMutationInterface {
  isLoadingData: boolean;
  data: TradeAdsDataInterface;
}

function useGetTradeAdsMutation(query: TradeAdQueryInterface): GetTradeAdsMutationInterface {
  const { enqueueSnackbar } = useSnackbar();
  const { isPending, data } = useQuery({
    queryKey: ['tradeAds', query],
    queryFn: async () => {
      const data = await TradeAdApi.getTradeAds(query);
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

export default useGetTradeAdsMutation;

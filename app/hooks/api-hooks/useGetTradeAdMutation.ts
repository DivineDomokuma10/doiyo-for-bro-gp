import { useQuery } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import TradeAdApi from '../../api/TradeAdApi';
import { TradeAdInterface } from '../../utils/interfaces/trade-ad.interface';
import { STATUS_CODES } from '../../utils/constants';

interface GetTradeAdsMutationInterface {
  isLoadingData: boolean;
  data: TradeAdInterface;
}

function useGetTradeAdMutation(id: string): GetTradeAdsMutationInterface {
  const { enqueueSnackbar } = useSnackbar();
  const { isPending, data } = useQuery({
    queryKey: ['tradeAds', id],
    queryFn: async () => {
      const data = await TradeAdApi.getTradeAd(id);
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

export default useGetTradeAdMutation;

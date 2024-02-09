import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { StartTradeInterface } from '../../utils/interfaces/trade.interface';
import { ErrorInterface } from '../../utils/interfaces/generic.interface';
import { AxiosError, AxiosResponse } from 'axios';
import { enqueueSnackbar } from 'notistack';
import TradeApi from '../../api/TradeApi';

interface StartTradeMutationInterface {
  isLoading: boolean;
  mutate: UseMutateFunction<
    AxiosResponse<{ _id: string; message: string }>,
    AxiosError<{ message: ErrorInterface[] }>,
    StartTradeInterface,
    unknown
  >;
}

function useStartTradeMutation(): StartTradeMutationInterface {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: StartTradeInterface) => TradeApi.startTrade(data),
    onSuccess: (res) => {
      router.push(`/trades/${res?.data._id}`);
    },
    onError: (error: AxiosError<{ message: ErrorInterface[] }>) => {
      const errorMessage = error.response?.data.message[0].message || error.response?.data.message;
      enqueueSnackbar(`${errorMessage}`, {
        variant: 'error',
        anchorOrigin: { horizontal: 'right', vertical: 'top' }
      });
    }
  });

  return { isLoading: isPending, mutate };
}

export default useStartTradeMutation;

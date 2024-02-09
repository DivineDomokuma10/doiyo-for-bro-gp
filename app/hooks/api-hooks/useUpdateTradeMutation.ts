import { UseMutateFunction, useMutation } from '@tanstack/react-query';

import { UpdateTradeInterface } from '../../utils/interfaces/trade.interface';
import { ErrorInterface } from '../../utils/interfaces/generic.interface';
import { AxiosError, AxiosResponse } from 'axios';
import { enqueueSnackbar } from 'notistack';
import TradeApi from '../../api/TradeApi';

interface UpdateTradeMutationInterface {
  isSuccess: boolean;
  isLoading: boolean;
  mutate: UseMutateFunction<
    AxiosResponse<{ _id: string; message: string }>,
    AxiosError<{ message: ErrorInterface[] }>,
    UpdateTradeInterface,
    unknown
  >;
}

function useUpdateTradeMutation(id: string): UpdateTradeMutationInterface {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: UpdateTradeInterface) => TradeApi.updateTrade(id, data),
    onError: (error: AxiosError<{ message: ErrorInterface[] }>) => {
      const errorMessage = error.response?.data.message[0].message || error.response?.data.message;
      enqueueSnackbar(`${errorMessage}`, {
        variant: 'error',
        anchorOrigin: { horizontal: 'right', vertical: 'top' }
      });
    }
  });

  return { isLoading: isPending, mutate, isSuccess };
}

export default useUpdateTradeMutation;

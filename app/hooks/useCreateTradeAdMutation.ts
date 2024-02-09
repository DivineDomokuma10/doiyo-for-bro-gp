import { UseMutateFunction, useMutation } from '@tanstack/react-query';

import { ErrorInterface } from '../utils/interfaces/generic.interface';
import { AxiosError, AxiosResponse } from 'axios';
import { enqueueSnackbar } from 'notistack';
import { CreateTradeAdInterface, TRADE_AD_TYPE } from '../utils/interfaces/trade-ad.interface';
import TradeAdApi from '../api/TradeAdApi';
import { FieldValues } from 'react-hook-form';

interface CreateTradeAdMutationInterface {
  isLoading: boolean;
  isSuccess: boolean;
  mutate: UseMutateFunction<
    AxiosResponse<{ _id: string; creatorId: string; type: TRADE_AD_TYPE }>,
    AxiosError<{ message: ErrorInterface[] }>,
    CreateTradeAdInterface | FieldValues,
    unknown
  >;
}

function useCreateTradeAdMutation(): CreateTradeAdMutationInterface {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: CreateTradeAdInterface | FieldValues) => TradeAdApi.createTrade(data),
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

export default useCreateTradeAdMutation;

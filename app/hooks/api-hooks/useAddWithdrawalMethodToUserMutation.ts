import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query';

import { BankAccountInterface } from '../../utils/interfaces/user.interface';
import { ErrorInterface } from '../../utils/interfaces/generic.interface';
import { AxiosError, AxiosResponse } from 'axios';
import { enqueueSnackbar } from 'notistack';
import UserApi from '../../api/UserApi';

interface AddPaymentMethodToUserMutationInterface {
  isLoading: boolean;
  isSuccess: boolean;
  mutate: UseMutateFunction<
    AxiosResponse<{ _id: string; message: string }>,
    AxiosError<{ message: ErrorInterface[] }>,
    BankAccountInterface,
    unknown
  >;
}

function useAddWithdrawalMethodToUserMutation(): AddPaymentMethodToUserMutationInterface {
  const queryClient = useQueryClient();
  const queryKey = ['user'];
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: BankAccountInterface) => UserApi.addWithdrawalMethod(data),
    onSuccess: () => {
      enqueueSnackbar(`Withdrawal method successfully added`, {
        variant: 'success',
        anchorOrigin: { horizontal: 'right', vertical: 'top' }
      });
      queryClient.invalidateQueries({ queryKey });
    },
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

export default useAddWithdrawalMethodToUserMutation;

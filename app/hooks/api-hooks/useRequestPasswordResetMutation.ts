import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useSnackbar } from 'notistack';

import { RequestPasswordResetInterface } from '../../utils/interfaces/user.interface';
import { ErrorInterface } from '../../utils/interfaces/generic.interface';
import UserApi from '../../api/UserApi';

interface RequestPasswordResetMutationInterface {
  mutate: UseMutateFunction<
    AxiosResponse,
    AxiosError<{ message: ErrorInterface[] }>,
    RequestPasswordResetInterface,
    unknown
  >;
  isPending: boolean;
}

function useRequestPasswordResetMutation(): RequestPasswordResetMutationInterface {
  const { enqueueSnackbar } = useSnackbar();
  const { mutate, isPending } = useMutation({
    mutationFn: (credentials: RequestPasswordResetInterface) =>
      UserApi.requestPasswordRest(credentials),
    onError: (error: AxiosError<{ message: ErrorInterface[] }>) => {
      const errorMessage = error.response?.data.message[0].message || error.response?.data.message;
      enqueueSnackbar(`${errorMessage}`, {
        variant: 'error',
        anchorOrigin: { horizontal: 'right', vertical: 'top' }
      });
    }
  });

  return { mutate, isPending };
}

export default useRequestPasswordResetMutation;

import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useSnackbar } from 'notistack';

import { ErrorInterface } from '../utils/interfaces/generic.interface';
import UserApi from '../api/UserApi';

interface ResendVerificationCodeInterface {
  mutate: UseMutateFunction<
    AxiosResponse,
    AxiosError<{ message: ErrorInterface[] }>,
    string,
    unknown
  >;
  isPending: boolean;
}

function UseResendVerificationCodeMutation(): ResendVerificationCodeInterface {
  const { enqueueSnackbar } = useSnackbar();
  const { mutate, isPending } = useMutation({
    mutationFn: (userId: string) => UserApi.resendVerificationCode(userId),
    onError: (error: AxiosError<{ message: ErrorInterface[] }>) => {
      const errorMessage = error.response?.data.message[0].message || error.response?.data.message;
      enqueueSnackbar(`${errorMessage}`, {
        variant: 'error',
        anchorOrigin: { horizontal: 'right', vertical: 'top' }
      });
    },
    onSuccess: () => {
      enqueueSnackbar('Verification Code Send Successfully', {
        variant: 'success',
        anchorOrigin: { horizontal: 'right', vertical: 'top' }
      });
    }
  });

  return { mutate, isPending };
}

export default UseResendVerificationCodeMutation;

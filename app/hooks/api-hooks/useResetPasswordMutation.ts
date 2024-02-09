import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useSnackbar } from 'notistack';

import { ResetPasswordInterface } from '../../utils/interfaces/user.interface';
import { ErrorInterface } from '../../utils/interfaces/generic.interface';
import UserApi from '../../api/UserApi';
import { useRouter } from 'next/navigation';

interface ResetPasswordMutationInterface {
  mutate: UseMutateFunction<
    AxiosResponse,
    AxiosError<{ message: ErrorInterface[] }>,
    ResetPasswordInterface,
    unknown
  >;
  isPending: boolean;
}

function useResetPasswordMutation(): ResetPasswordMutationInterface {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { mutate, isPending } = useMutation({
    mutationFn: (credentials: ResetPasswordInterface) => UserApi.resetPassword(credentials),
    onError: (error: AxiosError<{ message: ErrorInterface[] }>) => {
      const errorMessage = error.response?.data.message[0].message || error.response?.data.message;
      enqueueSnackbar(`${errorMessage}`, {
        variant: 'error',
        anchorOrigin: { horizontal: 'right', vertical: 'top' }
      });
    },
    onSuccess: () => {
      enqueueSnackbar('Password changed successfully', {
        variant: 'success',
        anchorOrigin: { horizontal: 'right', vertical: 'top' }
      });
      router.push('/login');
    }
  });

  return { mutate, isPending };
}

export default useResetPasswordMutation;

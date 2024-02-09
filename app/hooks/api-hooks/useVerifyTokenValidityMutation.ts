import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useSnackbar } from 'notistack';

import { VerifyTokenValidityInterface } from '../../utils/interfaces/user.interface';
import { ErrorInterface } from '../../utils/interfaces/generic.interface';
import UserApi from '../../api/UserApi';
import { useRouter } from 'next/navigation';

interface VerifyTokenValidityMutationInterface {
  mutate: UseMutateFunction<
    AxiosResponse,
    AxiosError<{ message: ErrorInterface[] }>,
    VerifyTokenValidityInterface,
    unknown
  >;
  isPending: boolean;
}

const newUrl = '/reset-password';

function useVerifyTokenValidityMutation(): VerifyTokenValidityMutationInterface {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { mutate, isPending } = useMutation({
    mutationFn: (credentials: VerifyTokenValidityInterface) =>
      UserApi.verifyResetPasswordTokenValidity(credentials),
    onError: (error: AxiosError<{ message: ErrorInterface[] }>) => {
      const errorMessage = error.response?.data.message[0].message || error.response?.data.message;
      enqueueSnackbar(`${errorMessage}`, {
        variant: 'error',
        anchorOrigin: { horizontal: 'right', vertical: 'top' }
      });
      router.push('/login');
    },
    onSuccess: () => {
      window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
    }
  });

  return { mutate, isPending };
}

export default useVerifyTokenValidityMutation;

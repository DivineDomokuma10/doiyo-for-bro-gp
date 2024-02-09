import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';

import { EmailVerificationInterface } from '../../utils/interfaces/user.interface';
import UserApi from '../../api/UserApi';
import { AxiosError } from 'axios';

function useVerificationMutation() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (credentials: EmailVerificationInterface) => UserApi.verifyEmail(credentials),
    onSuccess: (): void => {
      enqueueSnackbar('Email Successfully verified', {
        variant: 'success',
        anchorOrigin: { horizontal: 'right', vertical: 'top' }
      });
      router.push('/login');
    },
    onError: (error: AxiosError<{ message: string }>) => {
      enqueueSnackbar(`${error.response?.data.message}`, {
        variant: 'error',
        anchorOrigin: { horizontal: 'right', vertical: 'top' }
      });
    }
  });

  return { mutate, isPending, isError, error };
}

export default useVerificationMutation;

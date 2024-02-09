import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import UserApi from '../../api/UserApi';
import { AxiosError, AxiosResponse } from 'axios';
import { LoginDataInterface, LoginResponseInterface } from '../../utils/interfaces/user.interface';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { ErrorInterface } from '../../utils/interfaces/generic.interface';

interface LoginMutationInterface {
  mutate: UseMutateFunction<
    AxiosResponse<LoginResponseInterface>,
    AxiosError<{ message: ErrorInterface[] }>,
    LoginDataInterface,
    unknown
  >;
  isPending: boolean;
}

function useLoginMutation(): LoginMutationInterface {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (credentials: LoginDataInterface) => UserApi.login(credentials),
    onSuccess: (data: AxiosResponse<LoginResponseInterface>) => {
      localStorage.setItem('token', data.data.access_token);
      router.push('/dashboard');
    },
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

export default useLoginMutation;

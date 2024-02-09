import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useSnackbar } from 'notistack';

import { ErrorInterface } from '../../utils/interfaces/generic.interface';
import {
  RegistrationDataInterface,
  RegistrationResponseInterface
} from '../../utils/interfaces/user.interface';
import UserApi from '../../api/UserApi';

interface RegistrationMutationInterface {
  mutate: UseMutateFunction<
    AxiosResponse<RegistrationResponseInterface>,
    AxiosError<{ message: ErrorInterface[] }>,
    RegistrationDataInterface,
    unknown
  >;
  isPending: boolean;
  data: AxiosResponse<RegistrationResponseInterface> | undefined;
}

function useRegistrationMutation(): RegistrationMutationInterface {
  const { enqueueSnackbar } = useSnackbar();
  const { mutate, isPending, data } = useMutation({
    mutationFn: (credentials: RegistrationDataInterface) => UserApi.register(credentials),
    onError: (error: AxiosError<{ message: ErrorInterface[] }>) => {
      const errorMessage = error.response?.data.message[0].message || error.response?.data.message;
      enqueueSnackbar(`${errorMessage}`, {
        variant: 'error',
        anchorOrigin: { horizontal: 'right', vertical: 'top' }
      });
    }
  });

  return { mutate, isPending, data };
}

export default useRegistrationMutation;

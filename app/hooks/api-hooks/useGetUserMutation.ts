import { useQuery } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

import { UserInterface } from '../../utils/interfaces/user.interface';
import { STATUS_CODES } from '../../utils/constants';
import UserApi from '../../api/UserApi';

interface GetUserMutationInterface {
  isLoadingData: boolean;
  data: UserInterface;
}

function useGetUserMutation(): GetUserMutationInterface {
  const { enqueueSnackbar } = useSnackbar();
  const { isPending, data } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const data = await UserApi.getUser();
      if (data.status !== STATUS_CODES.success) {
        enqueueSnackbar(`Failed to fetch User data`, {
          variant: 'error',
          anchorOrigin: { horizontal: 'right', vertical: 'top' }
        });
      }
      return data.data;
    }
  });

  return { isLoadingData: isPending, data: data! };
}

export default useGetUserMutation;

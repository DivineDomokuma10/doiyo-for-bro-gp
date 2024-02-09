'use client';

import { useQuery } from '@tanstack/react-query';
import AuthApi from '../../api/UserApi';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const router = useRouter();
  const { isSuccess, isError, isPending } = useQuery({
    queryKey: ['auth'],
    queryFn: AuthApi.checkAuthValidity
  });

  if (isError) {
    router.push('/login');
  }

  return [isSuccess, isPending];
};

export default useAuth;

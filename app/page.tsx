'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useAuth from './hooks/api-hooks/useAuth';

const HomePage = () => {
  const router = useRouter();
  const [isUserAuthenticated] = useAuth();

  useEffect(() => {
    if (isUserAuthenticated) {
      // Redirect to /dashboard when the component mounts
      router.replace('/dashboard');
    }
  }, [isUserAuthenticated, router]);

  return <h3>Loading...</h3>;
};

export default HomePage;

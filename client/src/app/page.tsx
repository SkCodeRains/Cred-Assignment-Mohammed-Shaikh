// app/page.tsx

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Cookies from 'js-cookie';
import axiosInstance from '@/utils/auth';

const HomePage = () => {
  let { user } = useAuth();
  const router = useRouter();


  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    } else {
      router.replace('/login');
    }
  }, [user, router]);

  return null;
};

export default HomePage;

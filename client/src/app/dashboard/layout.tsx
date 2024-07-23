// app/dashboard/layout.tsx

"use client";

import Header from '@/components/Header';  
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  if (!user) {
    router.push('/login')
  }


  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

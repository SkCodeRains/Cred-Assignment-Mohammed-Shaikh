// context/AuthContext.tsx
"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/utils/auth';

interface User {
  username: string;
  role: string;
  // add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  getUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();



  const login = async (username: string, password: string) => {
    const response = await axiosInstance.post('/login', { username, password });
    const token = 'bearer ' + response.data.token;
    // Cookies.set('token', token, { expires: 7 });
    // Cookies.set('username', response.data.username, { expires: 7 });
    // Cookies.set('role', response.data.role, { expires: 7 }); 
    axiosInstance.defaults.headers.common['Authorization'] = token;
    setUser(response.data);
    router.push('/dashboard');
  };

  const logout = () => {
    // Cookies.remove('token');
    delete axiosInstance.defaults.headers.common['Authorization']; 
    setUser(null);
    router.push('/login')
  };

  const getUser = async () => {
    const response = await axiosInstance.get('/validateToken');
    if (response.statusText === '200') {
      setUser({ username: Cookies.get('username') || '', role: Cookies.get('role') || '', });
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

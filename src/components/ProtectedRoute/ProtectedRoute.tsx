import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/server/firebase/auth';
import Spinner from '@/components/ui/Spinner';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    // 컴포넌트 언마운트 시 구독 해제
    return () => unsubscribe();
  }, []);

  // 로딩 상태 처리
  if (loading) {
    return <Spinner />;
  }

  if (location.pathname === '/login' && user) {
    return <Navigate to="/" />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useSelector((state: RootState) => state.user);

  if (location.pathname === '/login' && user?.uid) {
    return <Navigate to="/" />;
  }

  if (!user?.uid) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

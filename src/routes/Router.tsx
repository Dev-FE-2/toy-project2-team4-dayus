import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '@/pages/home/HomePage';
import LoginPage from '@/pages/login/LoginPage';
import ProfilePage from '@/pages/profile-page/ProfilePage';
import SalaryPage from '@/pages/salary/SalaryPage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import Layout from '@/layout/Layout';
import { ROUTER_PATH } from '@/constants/constant';
import ShiftPage from '@/pages/shift/ShiftPage';
import ProtectedRoute from '@/components/protected-route/ProtectedRoute';

const Router = () => {
  const { HOME, LOGIN, PROFILE, SALARY, SHIFT } = ROUTER_PATH;

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: HOME,
          element: (
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          ),
        },
        {
          path: LOGIN,
          element: <LoginPage />,
        },
        {
          path: PROFILE,
          element: (
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          ),
        },
        {
          path: SALARY,
          element: (
            <ProtectedRoute>
              <SalaryPage />
            </ProtectedRoute>
          ),
        },
        {
          path: SHIFT,
          element: (
            <ProtectedRoute>
              <ShiftPage />
            </ProtectedRoute>
          ),
        },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

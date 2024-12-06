import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '@/pages/home/HomePage';
import LoginPage from '@/pages/login/LoginPage';
import ProfilePage from '@/pages/ProfilePage';
import SalaryPage from '@/pages/SalaryPage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import Layout from '@/layout/Layout';
import { ROUTER_PATH } from '@/constants/constant';
import ProtectedRouter from '@/components/ProtectedRoute/ProtectedRouter';
import { Provider } from 'react-redux';
import userStore from '@/store/store';

const Router = () => {
  const { HOME, LOGIN, PROFILE, SALARY } = ROUTER_PATH;

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: HOME,
          element: (
            <ProtectedRouter>
              <HomePage />
            </ProtectedRouter>
          ),
        },
        {
          path: LOGIN,
          element: (
            <Provider store={userStore}>
              <LoginPage />
            </Provider>
          ),
        },
        {
          path: PROFILE,
          element: (
            <ProtectedRouter>
              <ProfilePage />
            </ProtectedRouter>
          ),
        },
        {
          path: SALARY,
          element: (
            <ProtectedRouter>
              <SalaryPage />
            </ProtectedRouter>
          ),
        },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '@/pages/home/HomePage';
import LoginPage from '@/pages/login/LoginPage';
import ProfilePage from '@/pages/ProfilePage';
import SalaryPage from '@/pages/SalaryPage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import Layout from '@/layout/Layout';
import { ROUTER_PATH } from '@/constants/constant';

const Router = () => {
  const { HOME, LOGIN, PROFILE, SALARY } = ROUTER_PATH;

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: HOME, element: <HomePage /> },
        { path: LOGIN, element: <LoginPage /> },
        { path: PROFILE, element: <ProfilePage /> },
        { path: SALARY, element: <SalaryPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

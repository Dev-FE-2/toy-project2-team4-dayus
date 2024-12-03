import { Outlet } from 'react-router-dom';

import NavBar from '@/components/ui/Navbar';
import * as S from './Layout.styles';
import Header from '@/components/header/Header';

const Layout = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
      <NavBar />
    </S.Container>
  );
};

export default Layout;

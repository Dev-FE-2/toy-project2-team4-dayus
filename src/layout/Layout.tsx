import { Outlet } from 'react-router-dom';

import NavBar from '@/components/ui/Navbar';
import * as S from './Layout.styles';

const Layout = () => {
  return (
    <S.Container>
      <Outlet />
      <NavBar />
    </S.Container>
  );
};

export default Layout;

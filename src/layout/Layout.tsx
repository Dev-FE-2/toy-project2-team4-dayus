import { Outlet } from 'react-router-dom';

import * as S from './Layout.styles';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <S.Container>
        <Outlet />
      </S.Container>
    </S.LayoutWrapper>
  );
};

export default Layout;

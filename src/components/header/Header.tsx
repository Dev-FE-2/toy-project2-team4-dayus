import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '@/constants/constant';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Header>
      <Link to={ROUTER_PATH.HOME}>
        <S.HeaderLogo />
      </Link>
    </S.Header>
  );
};

export default Header;

import { FaRegCalendarPlus, FaRegCreditCard, FaUser } from 'react-icons/fa6';
import * as S from './Navbar.styles';
import { ROUTER_PATH } from '@/constants/constant';

const NavBar = () => {
  return (
    <S.NavWrapper>
      <S.NavList>
        <S.NavItem>
          <S.NavLink to={ROUTER_PATH.HOME}>
            <S.NavLinkIcon>
              <FaRegCalendarPlus />
            </S.NavLinkIcon>
            <S.NavLinkTitle>일정</S.NavLinkTitle>
          </S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink to={ROUTER_PATH.SALARY}>
            <S.NavLinkIcon>
              <FaRegCreditCard />
            </S.NavLinkIcon>
            <S.NavLinkTitle>급여</S.NavLinkTitle>
          </S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink to={ROUTER_PATH.PROFILE}>
            <S.NavLinkIcon>
              <FaUser />
            </S.NavLinkIcon>
            <S.NavLinkTitle>내 정보</S.NavLinkTitle>
          </S.NavLink>
        </S.NavItem>
      </S.NavList>
    </S.NavWrapper>
  );
};

export default NavBar;

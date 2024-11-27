import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegCalendarPlus, FaRegCreditCard, FaUser } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <NavLinkIcon>
              <FaRegCalendarPlus />
            </NavLinkIcon>
            <NavLinkTitle>일정</NavLinkTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/salary">
            <NavLinkIcon>
              <FaRegCreditCard />
            </NavLinkIcon>
            <NavLinkTitle>급여</NavLinkTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">
            <NavLinkIcon>
              <FaUser />
            </NavLinkIcon>
            <NavLinkTitle>내 정보</NavLinkTitle>
          </NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: var(--max-width);
  background-color: var(--color-white);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.li`
  flex: 1;
  text-align: center;
`;

const NavLinkIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 68px;
  border-radius: 20px;
  font-size: var(--font-2xl);
`;

const NavLink = styled(RouterNavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 28px calc(100% / 3);

  &.active ${NavLinkIcon} {
    background-color: #fbdccc;
  }
`;

const NavLinkTitle = styled.span`
  font-size: var(--font-lg);
`;

export default NavBar;

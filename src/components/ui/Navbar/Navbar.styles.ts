import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  max-width: var(--max-width);
  background-color: var(--color-white);
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  height: var(--navbar-height);
`;

export const NavItem = styled.li`
  flex: 1 1 auto;
  text-align: center;
`;

export const NavLinkIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 68px;
  border-radius: 20px;
  font-size: var(--font-2xl);
`;

export const NavLink = styled(RouterNavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 100%;

  &.active ${NavLinkIcon} {
    background-color: #fbdccc;
  }
`;

export const NavLinkTitle = styled.span`
  font-size: var(--font-lg);
`;

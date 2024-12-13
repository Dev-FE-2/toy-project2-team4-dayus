import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  position: fixed;
  z-index: var(--navbar-index);
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
  flex: 1 1 100%;
  text-align: center;
`;

export const NavLinkIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 3.2rem;
  border-radius: 20px;
  font-size: 2.2rem;
`;

export const NavLink = styled(RouterNavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 100%;

  &.active ${NavLinkIcon} {
    background-color: #fbdccc;
  }
`;

export const NavLinkTitle = styled.span`
  font-size: var(--font-sm);
  font-weight: 500;
`;

import styled from 'styled-components';

import headerLogo from '@/assets/logo.svg';

export const Header = styled.header`
  padding: var(--spacing-3) var(--spacing-2);
`;

export const HeaderLogo = styled.img.attrs({
  src: headerLogo,
  alt: 'Day Us Logo',
})`
  width: 100px;
`;

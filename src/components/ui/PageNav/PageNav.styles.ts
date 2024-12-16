import styled from 'styled-components';

export const PageNavBox = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background: var(--color-white);
`;

export const PageNavButton = styled.button`
  padding: 2rem var(--layout-padding);
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
`;

export const PageNavTitle = styled.span`
  font-size: var(--font-xl);
  flex: 1 0 auto;
`;

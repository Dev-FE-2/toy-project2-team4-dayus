import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 var(--layout-padding);
  > *:not(:last-child) {
    margin-bottom: var(--spacing-2);
  }
`;

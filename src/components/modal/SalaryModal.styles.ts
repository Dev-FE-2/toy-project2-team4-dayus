import styled from 'styled-components';

export const GridWrapper = styled.div`
  margin: var(--spacing-2) var(--spacing-4) var(--spacing-4);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 16px;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

export const GridLabel = styled.span`
  color: var(--color-gray-600);
  font-size: var(--font-sm);
  font-weight: 600;
`;

export const GridValue = styled.span`
  font-size: var(--font-sm);
  font-weight: 600;
`;

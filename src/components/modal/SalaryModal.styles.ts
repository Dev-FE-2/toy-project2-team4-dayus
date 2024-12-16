import styled from 'styled-components';

export const SalaryTitle = styled.h2`
  font-weight: 600;
  font-size: var(--font-base);
  padding: 0 var(--spacing-2) var(--spacing-4);
`;

export const GridWrapper = styled.div`
  margin: var(--spacing-2) var(--spacing-4) var(--spacing-4);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-5);
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

export const GridLabel = styled.span`
  color: var(--color-gray-700);
  font-size: var(--font-base);
  font-weight: 600;
`;

export const GridValue = styled.span`
  font-size: var(--font-sm);
  font-weight: 600;
`;

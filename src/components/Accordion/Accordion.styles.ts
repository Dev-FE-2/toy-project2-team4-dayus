import styled from 'styled-components';
import { IoChevronDown } from 'react-icons/io5';

export const AccordionBox = styled.div`
  margin-top: var(--spacing-3);
  background: white;
`;

export const DetailsWrapper = styled.details`
  border: 1px solid var(--color-gray-400);
  border-radius: var(--radius-lg);
`;

export const DetailSummary = styled.summary`
  padding: var(--spacing-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-base);
  font-weight: 600;
  list-style: none;
  cursor: pointer;
`;

export const ChevronIcon = styled(IoChevronDown)<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

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

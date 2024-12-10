import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const DateDisplay = styled.div`
  display: flex;
  gap: var(--spacing-2);
  cursor: pointer;
  align-items: stretch;
  background: white;
  border: 1px solid var(--color-gray-border);
  border-radius: var(--radius-base);
  padding: var(--spacing-2);
  caret-color: transparent;

  &:focus,
  &:focus-visible {
    border: 1px solid var(--color-main);
  }
`;

export const DateBox = styled.div`
  flex: 1 1 auto;
  padding: var(--spacing-2) var(--spacing-3);
  position: relative;

  &:first-child::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: var(--color-gray-300);
  }
`;

export const DateLabel = styled.div`
  font-size: var(--font-sm);
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-2);
`;

export const DateValue = styled.div`
  font-size: var(--font-lg);
  color: var(--color-gray-900);
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const EmptyDateValue = styled(DateValue)`
  color: var(--color-gray-400);
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-2);
  color: var(--color-gray-600);
`;

export const CalendarContainer = styled.div<{ $isOpen: boolean }>`
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  position: absolute;
  z-index: 100;
  top: calc(100% + var(--spacing-2));
  left: 0;
  transition: all 0.2s ease;
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);
  background: white;
  max-width: max-content;
  box-shadow: var(--shadow-md);
  max-height: ${props => (props.$isOpen ? '400px' : 0)};
  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-3);
  border-top: 1px solid var(--color-gray-100);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: var(--spacing-2);
  justify-content: flex-end;
`;

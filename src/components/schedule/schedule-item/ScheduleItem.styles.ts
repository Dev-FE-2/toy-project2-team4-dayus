import styled from 'styled-components';

export const ScheduleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-3) 0;
  border-bottom: 1px solid var(--color-gray-200);

  &:last-child {
    border-bottom: none;
  }
`;

export const ScheduleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
`;

export const ColorDot = styled.div<{ $bgColor: string }>`
  width: 30px;
  height: 30px;
  border: 1.5px solid var(--color-black);
  border-radius: 50%;
  background-color: ${({ $bgColor }) => $bgColor};
`;

export const ScheduleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
`;

export const Title = styled.span`
  font-size: var(--font-base);
  font-weight: 500;
`;

export const Date = styled.span`
  font-size: var(--font-sm);
  color: var(--color-gray-600);
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  padding: var(--spacing-2);
  cursor: pointer;
  color: var(--color-gray-600);
  transition: color 0.2s;

  &:hover {
    color: var(--color-danger);
  }
`;

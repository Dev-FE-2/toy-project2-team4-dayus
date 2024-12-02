import styled, { css } from 'styled-components';

export const CalendarWrapper = styled.div<{ $mode?: 'single' | 'range' }>`
  font-size: var(--font-sm);
  padding: var(--spacing-4);
  background: white;
  border-radius: var(--radius-lg);

  ${props =>
    props.$mode !== 'range' &&
    css`
      border: 1px solid var(--color-gray-300);
      box-shadow: var(--shadow-md);
    `}

  * {
    --rdp-accent-color: var(--color-main);
    --rdp-accent-background-color: var(--color-main);
    --rdp-range_middle-background-color: #f3f3f3;
    --rdp-outside-opacity: 0.3;
  }
`;

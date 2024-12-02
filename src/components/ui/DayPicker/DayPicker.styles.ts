import styled, { css } from 'styled-components';

export const CalendarWrapper = styled.div<{ $mode?: 'single' | 'range' }>`
  font-size: var(--font-sm);
  padding: var(--spacing-4);
  background: white;
  ${props =>
    props.$mode !== 'range' &&
    css`
      border: 1px solid var(--color-gray-200);
      border-radius: var(--radius-base);
    `}

  * {
    --rdp-accent-color: var(--color-main);
    --rdp-accent-background-color: var(--color-main);
    --rdp-range_middle-background-color: #f3f3f3;
    --rdp-outside-opacity: 0.3;
  }
`;

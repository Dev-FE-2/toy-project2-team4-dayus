import styled from 'styled-components';
import { FaRegCalendarCheck } from 'react-icons/fa';

import Input from '../ui/input';

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    right: var(--spacing-4);
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-gray-600);
    pointer-events: none;
  }
`;

export const DayPickerInput = styled(Input)`
  cursor: pointer;
  padding-right: var(--spacing-4);

  &[readonly] {
    caret-color: transparent;
  }
`;

export const CalendarIcon = styled(FaRegCalendarCheck)`
  color: var(--color-gray-600);
`;

export const CalendarContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  z-index: 100;
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  top: calc(100% + var(--spacing-2));
  transition: opacity 0.2s ease;
`;

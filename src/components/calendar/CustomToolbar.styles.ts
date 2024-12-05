import styled, { css } from 'styled-components';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 1rem;
`;

export const CalendarHeaderInner = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 0.2rem;
    font-size: 0;
  }
`;

export const NowMonthLabel = styled.span`
  width: 12.2rem;
  font-size: var(--font-xl);
  font-weight: 700;
`;

export const TodayButton = styled.button`
  padding: 0.4rem 0.8rem;
  background: var(--color-main);
  color: var(--color-white);
  border-radius: var(--radius-base);
`;

const commonArrowStyles = css`
  color: var(--color-main);
`;

export const LeftArrowButton = styled(IoIosArrowDropleftCircle)`
  ${commonArrowStyles}
`;

export const RightArrowButton = styled(IoIosArrowDroprightCircle)`
  ${commonArrowStyles}
`;

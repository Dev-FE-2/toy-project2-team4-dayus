import styled from 'styled-components';
import RangeDayPicker from '../day-picker/RangeDayPicker';
import { CalendarContainer } from '../day-picker/RangeDayPicker.styles';

export const Container = styled.div`
  & > *:nth-child(n + 2) {
    margin-top: 2rem;
  }

  .title-box {
    display: flex;
    align-items: center;

    & > :nth-child(1) {
      flex: 1 1 auto;
    }

    & > :nth-child(2) {
      flex: 0 0 auto;
      margin-left: 1rem;
    }
  }
`;

export const StyledRangeDayPicker = styled(RangeDayPicker)`
  ${CalendarContainer} {
    position: static;
  }
`;

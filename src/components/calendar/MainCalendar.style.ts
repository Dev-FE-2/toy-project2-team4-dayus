import styled from 'styled-components';

export const Container = styled.div`
  .rbc-month-view {
    border: none;
  }

  .rbc-month-header {
    .rbc-header {
      padding: 0.2rem 0;
      font-size: 1.2rem;
      background: var(--color-gray-200);

      &:first-child {
        color: #e8343f;
        background: #ffeeef;
      }
    }
  }

  .rbc-month-row {
    cursor: pointer;
    .rbc-row-content {
      .rbc-date-cell {
        &:first-child {
          color: #e8343f;
        }
      }
    }
  }

  .rbc-row-bg {
    right: 0;

    .rbc-off-range-bg {
      background: var(--color-gray-100);
    }
  }

  .rbc-event.rbc-event-continues-after:not(.rbc-event-allday) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

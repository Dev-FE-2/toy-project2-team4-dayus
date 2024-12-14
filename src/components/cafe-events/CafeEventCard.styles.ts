import styled from 'styled-components';

export const EventCard = styled.div`
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--color-main),
      var(--color-secondary)
    );
  }
`;

export const EventDate = styled.div`
  font-size: var(--font-sm);
  color: var(--color-gray-600);
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed var(--color-gray-400);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  &:before {
    content: '📅';
  }
`;

export const EventTitle = styled.h3`
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--color-black);
  line-height: 1.5;
`;

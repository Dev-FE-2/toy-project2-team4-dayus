import styled from 'styled-components';

export const Container = styled.section`
  margin: var(--spacing-6) 0;
`;

export const Title = styled.h2`
  font-size: var(--font-xl);
  font-weight: 700;
  margin-bottom: var(--spacing-4);
  position: relative;
`;

export const EventsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

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

export const NoEvents = styled.div`
  text-align: center;
  padding: var(--spacing-6);
  color: var(--color-error);
  font-size: 1.6rem;
  background: var(--color-white);
  border-radius: 16px;
  border: 2px dashed var(--color-gray-400);
  margin: var(--spacing-2) 0;
`;

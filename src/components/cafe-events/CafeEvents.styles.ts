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

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-4);
`;

export const NotFoundImg = styled.img`
  width: 50%;
  height: 50%;
`;

export const NotFoundText = styled.p`
  font-size: var(--font-2xl);
  font-weight: bold;
  color: var(--color-danger);
`;

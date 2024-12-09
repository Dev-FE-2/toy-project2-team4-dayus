import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ColorList = styled.ul`
  position: absolute;
  z-index: 10;
  right: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-top: 0.6rem;
  border-radius: var(--radius-xl);
  background-color: var(--color-white);
  box-shadow: 4px 4px 10px 0 rgba(133, 133, 133, 0.75);
`;

export const ColorItem = styled.li``;

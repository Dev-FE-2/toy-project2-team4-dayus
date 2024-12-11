import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  padding: var(--spacing-2) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-2);
`;

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  outline: none;
  background-color: var(--color-gray-400);
`;

export const TitleBox = styled.div`
  width: 100%;
  padding: var(--spacing-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const H2 = styled.h2`
  font-size: var(--font-base);
  font-weight: 600;
`;

export const ListBox = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

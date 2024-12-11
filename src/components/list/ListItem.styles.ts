import styled from 'styled-components';

export const ListItemWrapper = styled.li`
  width: 100%;
  &:hover,
  &:active {
    background-color: #f6f8fa;
  }
`;

export const ListItem = styled.div`
  width: 100%;
  padding: var(--spacing-3) var(--spacing-1);
`;

export const ItemBox = styled.span`
  width: 100%;
  margin-bottom: var(--spacing-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemTitle = styled.strong`
  font-size: var(--font-base);
`;

export const ItemValue = styled.span`
  font-size: var(--font-base);
`;

export const ItemDate = styled.time`
  color: var(--color-gray-600);
  font-size: var(--font-sm);
`;

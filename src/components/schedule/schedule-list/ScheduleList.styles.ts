import styled from 'styled-components';
import { BiSolidPencil } from 'react-icons/bi';

import emptyLogo from '@/assets/empty-list.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ListContainer = styled.div`
  padding: var(--spacing-4);
  flex: 1 1 auto;
`;

export const ModalTitle = styled.h1`
  font-size: var(--font-base);
  font-weight: 700;
  margin-bottom: var(--spacing-5);
`;

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

export const EmptyLogo = styled.img.attrs({
  src: emptyLogo,
  alt: 'empty list',
})`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoDataText = styled.p`
  color: var(--color-gray-700);
  font-size: var(--font-lg);
`;

export const AddButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: var(--spacing-4);
  width: 100%;
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 2px solid var(--color-main);
  border-radius: 50%;
`;

export const AddButton = styled(BiSolidPencil)`
  color: var(--color-main);
  transition: color 0.2s;

  &:hover {
    color: var(--color-main-hover);
  }
`;

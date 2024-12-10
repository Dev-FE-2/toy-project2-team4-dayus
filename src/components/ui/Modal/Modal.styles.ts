import styled, { keyframes, css } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalOverlay = styled.div.attrs<{
  $closing: boolean;
  $translateY: number;
}>(props => ({
  style: {
    backgroundColor: `rgba(0, 0, 0, ${Math.max(0.5 - props.$translateY / window.innerHeight, 0)})`,
  },
}))`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: var(--max-width);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: var(--modal-index);
  transition: background-color 0.2s ease-out;
`;

export const ModalContainer = styled.div.attrs<{
  $translateY: number;
  $closing: boolean;
  height: string;
}>(props => ({
  style: {
    transform: `translateY(${props.$translateY}px)`,
  },
}))`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-out;
  ${props =>
    !props.$closing &&
    css`
      animation: ${slideUp} 0.2s ease-out;
    `}
`;

export const ModalHeader = styled.div`
  padding: var(--spacing-2) var(--spacing-3);
  background-color: var(--color-white);
  border-top-left-radius: var(--radius-xl);
  border-top-right-radius: var(--radius-xl);
  position: relative;
  border-bottom: 1px solid var(--color-gray-300);
`;

export const SwipeIndicator = styled.div`
  width: 40px;
  height: 5px;
  background-color: var(--color-gray-500);
  border-radius: var(--radius-full);
  margin: var(--spacing-1) auto;
`;

export const ModalContent = styled.div`
  flex: 1 1 0;
  background-color: var(--color-white);
  padding: var(--spacing-4);
  overflow-y: auto;
`;

import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: var(--modal-index);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  max-width: var(--max-width);
  background: var(--color-white);
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  transform: translateY(20%);
  opacity: 0;
  animation: ${slideUp} 0.3s forwards;
`;

export const ModalContent = styled.div`
  flex: 1 1 auto;
  background-color: var(--color-white);
  padding: var(--layout-padding);
`;

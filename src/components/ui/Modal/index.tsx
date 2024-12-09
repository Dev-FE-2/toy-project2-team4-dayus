import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useDrag } from '@/hooks/useDrag';
import * as S from './Modal.styles';
import { useScrollLock } from '@/hooks/useScrollLock';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  height?: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, height, children }: ModalProps) => {
  const { translateY, isClosing, handlers, closeAnimation } = useDrag({
    onClose,
  });
  const modalRoot = document.getElementById('modal-overlay');

  useScrollLock({ isOpen });

  useEffect(() => {
    const handleMouseLeave = handlers.onMouseUp;
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [handlers.onMouseUp]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalOverlay
      $closing={isClosing}
      $translateY={translateY}
      onClick={closeAnimation}
    >
      <S.ModalContainer
        id="modal-container"
        onClick={e => e.stopPropagation()}
        $translateY={translateY}
        $closing={isClosing}
        height={height ? height : '75vh'}
        {...handlers}
      >
        <S.ModalHeader>
          <S.SwipeIndicator />
        </S.ModalHeader>
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>,
    modalRoot as HTMLElement,
  );
};

export default Modal;

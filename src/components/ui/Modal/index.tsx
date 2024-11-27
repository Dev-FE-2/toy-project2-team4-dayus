import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useDrag } from '@/hooks/useDrag';
import * as S from './Modal.styles';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const { translateY, isClosing, handlers, closeAnimation } = useDrag({
    onClose,
  });
  const modalRoot = document.getElementById('modal-overlay');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleMouseLeave = handlers.onMouseUp;
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [handlers.onMouseUp]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalOverlay $closing={isClosing} onClick={closeAnimation}>
      <S.ModalContainer
        id="modal-container"
        onClick={e => e.stopPropagation()}
        $translateY={translateY}
        $closing={isClosing}
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

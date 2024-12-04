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

  // 모달이 열릴 때 스크롤 방지
  const preventScroll = () => {
    const currentScrollY = window.scrollY;
    const hasScrollBar =
      window.innerWidth > document.documentElement.clientWidth;

    document.documentElement.style.setProperty(
      '--scroll-position',
      `-${currentScrollY}px`,
    );
    document.body.classList.add('scroll-locked');
    if (hasScrollBar) document.body.classList.add('has-scrollbar');

    return currentScrollY;
  };

  // 모달이 닫힐 때 스크롤 허용
  const allowScroll = (scrollY: number) => {
    document.body.classList.remove('scroll-locked', 'has-scrollbar');
    document.documentElement.style.removeProperty('--scroll-position');
    window.scrollTo(0, scrollY);
  };

  useEffect(() => {
    if (isOpen) {
      const scrollY = preventScroll();
      return () => allowScroll(scrollY);
    }
  }, [isOpen]);

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

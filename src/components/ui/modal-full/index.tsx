import { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './ModalFull.style';
import PageNav from '../page-navigation';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useToggleModal } from '@/hooks/useToggleModal';

type ModalProps = {
  id: string;
  className?: string;
  isOpen: boolean;
  children: React.ReactNode;
  navText: string;
};

const ModalFull = ({
  id,
  className,
  isOpen,
  children,
  navText,
}: ModalProps) => {
  const modalRoot = document.getElementById('modal-overlay');

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { closeIdModal } = useToggleModal({ modalId: id });

  useScrollLock({ isOpen });

  const handleModalClose = useCallback(() => {
    navigate(-1);
    closeIdModal();
  }, [navigate, closeIdModal]);

  const handlePopState = useCallback(() => {
    closeIdModal();
  }, [closeIdModal]);

  useEffect(() => {
    if (isOpen) {
      navigate(`${pathname}?modal=${id}`);

      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [isOpen, navigate, pathname, id, handlePopState]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalOverlay>
      <S.ModalContainer
        id={id}
        className={className}
        onClick={e => e.stopPropagation()}
      >
        <PageNav text={navText} onClick={handleModalClose} />
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>,

    modalRoot as HTMLElement,
  );
};

export default ModalFull;

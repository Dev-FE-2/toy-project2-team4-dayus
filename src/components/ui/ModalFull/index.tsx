import { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as S from './ModalFull.style';
import PageNav from '../PageNav';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useToggleModal } from '@/hooks/useToggleModal';
import { addScheduleModalId } from '@/constants/constant';

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

  const { closeIdModal } = useToggleModal({ modalId: addScheduleModalId });

  useScrollLock({ isOpen });

  const handleModalClose = useCallback(() => {
    navigate(-1);
    closeIdModal();
  }, [navigate, closeIdModal]);

  useEffect(() => {
    if (isOpen) {
      navigate(`${pathname}?modal=${id}`);

      window.addEventListener('popstate', () => closeIdModal());

      return () => {
        window.removeEventListener('popstate', () => closeIdModal());
      };
    }
  }, [isOpen, navigate, pathname, id, closeIdModal]);

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

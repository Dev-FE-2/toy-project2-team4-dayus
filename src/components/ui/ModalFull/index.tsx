import { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as S from './ModalFull.style';
import PageNav from '../PageNav';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/store/slices/modalToggleSlice';

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
  const dispatch = useDispatch();

  useScrollLock({ isOpen });

  const handleModalClose = useCallback(() => {
    navigate(-1);
    dispatch(closeModal('add-schedule-modal'));
  }, [navigate, dispatch]);

  useEffect(() => {
    if (isOpen) {
      navigate(`${pathname}?modal=${id}`);

      window.addEventListener('popstate', () =>
        dispatch(closeModal('add-schedule-modal')),
      );

      return () => {
        window.removeEventListener('popstate', () =>
          dispatch(closeModal('add-schedule-modal')),
        );
      };
    }
  }, [isOpen, navigate, pathname, id, dispatch]);

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

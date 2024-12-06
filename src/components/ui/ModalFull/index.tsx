import { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import * as S from './ModalFull.style';
import PageNav from '../PageNav';
import { useLocation, useNavigate } from 'react-router-dom';

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
  isOpen: initialIsOpen,
  children,
  navText,
}: ModalProps) => {
  const modalRoot = document.getElementById('modal-overlay');

  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(initialIsOpen);
  }, [initialIsOpen]);

  const handleModalClose = useCallback(() => {
    navigate(-1);
    setIsOpen(false);
  }, [navigate]);

  useEffect(() => {
    if (isOpen) {
      navigate(`${pathname}?modal=${id}`);
    }
  }, [isOpen, navigate, pathname, id]);

  console.log('isOpen: ', isOpen, 'initialIsOpen: ', initialIsOpen);

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

import { useCallback, useEffect } from 'react';
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
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalFull = ({
  id,
  className,
  isOpen,
  children,
  navText,
  setIsOpen,
}: ModalProps) => {
  const modalRoot = document.getElementById('modal-overlay');

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleModalClose = useCallback(() => {
    navigate(-1);
    setIsOpen(false);
  }, [navigate, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      navigate(`${pathname}?modal=${id}`);

      window.addEventListener('popstate', () => setIsOpen(false));

      return () => {
        window.removeEventListener('popstate', () => setIsOpen(false));
      };
    }
  }, [isOpen, navigate, pathname, id, setIsOpen]);

  console.log('isOpen: ', isOpen);

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

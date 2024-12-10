import { RootState } from '@/store';
import { closeModal, openModal } from '@/store/slices/modalToggleSlice';
import { useDispatch, useSelector } from 'react-redux';

type useToggleModalProps = {
  modalId: string;
};

// 모달 여닫기(redux로 state 관리)
const useToggleModal = ({ modalId }: useToggleModalProps) => {
  const isOpen = useSelector((state: RootState) => state.modal[modalId]);
  const dispatch = useDispatch();

  const openIdModal = () => dispatch(openModal(modalId));
  const closeIdModal = () => dispatch(closeModal(modalId));

  const toggleModal = () => {
    if (isOpen) {
      openIdModal();
    } else {
      closeIdModal();
    }
  };

  return { isOpen, openIdModal, closeIdModal, toggleModal };
};

export { useToggleModal };

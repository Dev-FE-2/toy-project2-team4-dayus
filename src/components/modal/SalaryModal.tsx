import { memo } from 'react';
import Modal from '../ui/Modal';
import { spreadListItem } from '@/types/salary';
import * as S from './SalaryModal.styles';

interface ISalaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  salary: spreadListItem[];
}

const SalaryModal = memo(({ isOpen, onClose, salary }: ISalaryModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>급여 상세 정보</h2>
      <S.GridWrapper>
        {salary.map(item => (
          <S.GridItem key={item.id}>
            <S.GridLabel>{item.label}</S.GridLabel>
            <S.GridValue>{item.value}</S.GridValue>
          </S.GridItem>
        ))}
      </S.GridWrapper>
    </Modal>
  );
});

export default SalaryModal;

import { memo } from 'react';
import Modal from '../ui/modal';
import { spreadListItem } from '@/types/salary';
import * as S from './SalaryModal.styles';

interface ISalaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  salary: spreadListItem[];
  title: string;
}

const SalaryModal = memo(
  ({ isOpen, onClose, salary, title }: ISalaryModalProps) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <S.SalaryTitle>{`${title} 상세 정보`}</S.SalaryTitle>
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
  },
);

export default SalaryModal;

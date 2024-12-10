import { memo, useMemo } from 'react';
import Modal from '../ui/Modal';
import { ISalary } from '@/types/salary';
import { formatDate } from '@/utils/formatDate';
import { SALARY_DETAIL_KEY } from '@/constants/constant';
import * as S from './SalaryModal.styles';

interface ISalaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  salary: ISalary;
}

const createSalaryItems = (salary: ISalary) => [
  {
    id: SALARY_DETAIL_KEY.TOUR,
    label: '근무 기간',
    value: `${formatDate(new Date(salary.tour.startDate), 'dot')} - ${formatDate(new Date(salary.tour.endDate), 'dot')}`,
  },
  {
    id: SALARY_DETAIL_KEY.PAYMENT_DATE,
    label: '급여일',
    value: formatDate(new Date(salary.paymentDate), 'dot'),
  },
  {
    id: SALARY_DETAIL_KEY.ACCOUNT,
    label: '급여 계좌',
    value: `${salary.bank.name} ${salary.bank.account}`,
  },
  {
    id: SALARY_DETAIL_KEY.AMOUNT,
    label: '지급액',
    value: `${salary.amount.toLocaleString()}원`,
  },
  {
    id: SALARY_DETAIL_KEY.DEDUCTIBLE,
    label: '공제액',
    value: `${salary.deductible.toLocaleString()}원`,
  },
  {
    id: SALARY_DETAIL_KEY.TOTAL,
    label: '실수령액',
    value: `${salary.totalAmount.toLocaleString()}원`,
  },
];

const SalaryModal = memo(({ isOpen, onClose, salary }: ISalaryModalProps) => {
  const salaryItems = useMemo(() => createSalaryItems(salary), [salary]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>급여 상세 정보</h2>
      <S.GridWrapper>
        {salaryItems.map(item => (
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

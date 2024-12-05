import { useMemo } from 'react';
import { SALARY_DETAIL_KEY } from '@/constants/constant';
import Accordion from '../ui/Accordion';
import * as S from './SalaryAccordion.styles';

interface ISalaryAccordion {
  tour: {
    startDate: Date;
    endDate: Date;
  };
  paymentDate: Date;
  bank: {
    name: string;
    account: string;
  };
  deductible: number;
  amount: number;
  totalAmount: number;
}

interface GridItem {
  id: string;
  label: string;
  value: string;
}

const SalaryAccordion = ({
  tour,
  paymentDate,
  bank,
  amount,
  deductible,
  totalAmount,
}: ISalaryAccordion) => {
  const gridItems = useMemo<GridItem[]>(
    () => [
      {
        id: SALARY_DETAIL_KEY.TOUR,
        label: '근무 기간',
        value: `${tour.startDate.toLocaleDateString('ko', { year: 'numeric', month: '2-digit', day: '2-digit' })} - ${tour.endDate.toLocaleDateString('ko', { year: 'numeric', month: '2-digit', day: '2-digit' })}`,
      },
      {
        id: SALARY_DETAIL_KEY.PAYMENT_DATE,
        label: '급여일',
        value: `${paymentDate.toLocaleDateString('ko', { year: 'numeric', month: '2-digit', day: '2-digit' })}`,
      },
      {
        id: SALARY_DETAIL_KEY.ACCOUNT,
        label: '급여 계좌',
        value: `${bank.name} ${bank.account}`,
      },
      {
        id: SALARY_DETAIL_KEY.AMOUNT,
        label: '지급액',
        value: `${amount.toLocaleString()}원`,
      },
      {
        id: SALARY_DETAIL_KEY.DEDUCTIBLE,
        label: '공제액',
        value: `${deductible.toLocaleString()}원`,
      },
      {
        id: SALARY_DETAIL_KEY.TOTAL,
        label: '실수령액',
        value: `${totalAmount.toLocaleString()}원`,
      },
    ],
    [tour, paymentDate, bank, amount, deductible, totalAmount],
  );

  return (
    <Accordion title="지난달 급여 내역">
      <S.GridWrapper>
        {gridItems.map(item => (
          <S.GridItem key={item.id}>
            <S.GridLabel>{item.label}</S.GridLabel>
            <S.GridValue aria-label={`${item.label} ${item.value}`}>
              {item.value}
            </S.GridValue>
          </S.GridItem>
        ))}
      </S.GridWrapper>
    </Accordion>
  );
};

export default SalaryAccordion;

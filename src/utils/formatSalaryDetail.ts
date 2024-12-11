import { SALARY_DETAIL_KEY } from '@/constants/constant';
import { ISalary } from '@/types/salary';
import { formatDate } from './formatDate';

const formatSalaryDetail = ({
  amount,
  bank,
  deductible,
  paymentDate,
  totalAmount,
  tour,
}: ISalary) => {
  return [
    {
      id: SALARY_DETAIL_KEY.TOUR,
      label: '근무 기간',
      value: `${formatDate(new Date(tour.startDate), 'dot')} - ${formatDate(new Date(tour.endDate), 'dot')}`,
    },
    {
      id: SALARY_DETAIL_KEY.PAYMENT_DATE,
      label: '급여일',
      value: `${formatDate(new Date(paymentDate), 'dot')}`,
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
  ];
};

export default formatSalaryDetail;

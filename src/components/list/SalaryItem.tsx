import { SalaryItemProps } from '@/types/salary';
import * as S from './ListItem.styles';
import { formatDate } from '@/utils/formatDate';

const SalaryItem = ({ title, totalAmount, paymentDate }: SalaryItemProps) => {
  return (
    <S.ListBox>
      <S.ListItemWrapper>
        <S.ListItem>
          <S.ItemBox>
            <S.ItemTitle>{title}</S.ItemTitle>
            <S.ItemValue>{totalAmount.toLocaleString()}원</S.ItemValue>
          </S.ItemBox>
          <S.ItemDate>{formatDate(paymentDate, 'hyphen')}</S.ItemDate>
        </S.ListItem>
      </S.ListItemWrapper>
    </S.ListBox>
  );
};

export default SalaryItem;

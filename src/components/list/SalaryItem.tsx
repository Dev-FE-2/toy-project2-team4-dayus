import { SalaryItemProps } from '@/types/salary';
import * as S from './ListItem.styles';

const SalaryItem = ({ title, totalAmount, paymentDate }: SalaryItemProps) => {
  console.log(paymentDate);
  return (
    <S.ListBox>
      <S.ListItemWrapper>
        <S.ListItem>
          <S.ItemBox>
            <S.ItemTitle>{title}</S.ItemTitle>
            <S.ItemValue>{totalAmount.toLocaleString()}원</S.ItemValue>
          </S.ItemBox>
          <S.ItemDate>{'2024.01.04'}</S.ItemDate>
        </S.ListItem>
      </S.ListItemWrapper>
    </S.ListBox>
  );
};

export default SalaryItem;

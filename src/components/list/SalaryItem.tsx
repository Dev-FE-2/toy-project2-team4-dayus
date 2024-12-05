import * as S from './ListItem.styles';

type ListItemProps = {
  title: string;
  amount: number;
  date: Date;
};

const SalaryItem = ({ title, amount, date }: ListItemProps) => {
  console.log(date);
  return (
    <S.ListBox>
      <S.ListItemWrapper>
        <S.ListItem>
          <S.ItemBox>
            <S.ItemTitle>{title}</S.ItemTitle>
            <S.ItemValue>{amount.toLocaleString()}원</S.ItemValue>
          </S.ItemBox>
          <S.ItemDate>{'2024.01.04'}</S.ItemDate>
        </S.ListItem>
      </S.ListItemWrapper>
    </S.ListBox>
  );
};

export default SalaryItem;

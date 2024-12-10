import { SalaryItemProps } from '@/types/salary';
import * as S from './ListItem.styles';
import { formatDate } from '@/utils/formatDate';

const SalaryItem = ({ item, onModal }: SalaryItemProps) => {
  const handleClick = () => {
    if (onModal) onModal(item.salarySn);
  };
  return (
    <S.ListItemWrapper id={item.salarySn} onClick={handleClick}>
      <S.ListItem>
        <S.ItemBox>
          <S.ItemTitle>{item.title}</S.ItemTitle>
          <S.ItemValue>{item.totalAmount.toLocaleString()}원</S.ItemValue>
        </S.ItemBox>
        <S.ItemDate>
          {formatDate(new Date(item.paymentDate), 'hyphen')}
        </S.ItemDate>
      </S.ListItem>
    </S.ListItemWrapper>
  );
};

export default SalaryItem;

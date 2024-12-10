import * as S from './ListItem.styles';
import { formatDate } from '@/utils/formatDate';
import { ShiftListItem } from '@/types/shift';

const ShiftItem = ({
  shiftSn,
  workTitle,
  workDate,
  approvalType,
}: ShiftListItem) => {
  return (
    <S.ListItemWrapper id={shiftSn}>
      <S.ListItem>
        <S.ItemBox>
          <S.ItemTitle>{workTitle}</S.ItemTitle>
          <S.ItemValue>{approvalType}</S.ItemValue>
        </S.ItemBox>
        <S.ItemDate>{formatDate(new Date(workDate), 'hyphen')}</S.ItemDate>
      </S.ListItem>
    </S.ListItemWrapper>
  );
};

export default ShiftItem;

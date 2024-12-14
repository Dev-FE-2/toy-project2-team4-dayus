import dayjs from 'dayjs';

import * as S from './CafeEventCard.styles';
import { ICafeEventList } from '@/types/calendar';

const CafeEventCard = ({ start, end, title }: ICafeEventList) => {
  return (
    <S.EventCard>
      <S.EventDate>
        {dayjs(start).format('YYYY년 M월 D일')} ~{' '}
        {dayjs(end).format('YYYY년 M월 D일')}
      </S.EventDate>
      <S.EventTitle>{title}</S.EventTitle>
    </S.EventCard>
  );
};

export default CafeEventCard;

import { useEffect, useState } from 'react';

import * as S from './CafeEvents.styles';
import CafeEventCard from './CafeEventCard';
import Spinner from '../ui/Spinner';
import { getCafeScheduleItems } from '@/api/cafeScheduleApi';
import { ICafeEventList } from '@/types/calendar';

const CafeEvents = () => {
  const [cafeEvents, setCafeEvents] = useState<ICafeEventList[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCafeEvents = async () => {
      try {
        const events = await getCafeScheduleItems();
        setCafeEvents(
          events.sort(
            (a, b) => (a.start?.getTime() || 0) - (b.start?.getTime() || 0),
          ),
        );
      } catch (error) {
        console.error(
          '카페 이벤트 데이터를 가져오는 중 오류가 발생했어요!',
          error,
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchCafeEvents();
  }, []);

  return (
    <S.Container>
      <S.Title>
        Day Us 카페 행사 ({isLoading ? 0 : cafeEvents.length}개)
      </S.Title>
      <S.EventsGrid>
        {isLoading ? (
          <Spinner size={40} />
        ) : cafeEvents.length > 0 ? (
          cafeEvents.map(event => (
            <CafeEventCard key={event.eventId} {...event} />
          ))
        ) : (
          <S.NoEvents>현재 예정된 카페 행사가 없습니다.</S.NoEvents>
        )}
      </S.EventsGrid>
    </S.Container>
  );
};

export default CafeEvents;

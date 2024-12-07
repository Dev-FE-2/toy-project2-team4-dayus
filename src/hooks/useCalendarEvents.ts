import { useMemo, useState } from 'react';

import dayjs from 'dayjs';

import { IEventList } from '@/types/calendar';
import { eventList } from '@/mocks/data/calendar';

const useCalendarEvents = () => {
  const [selectedEvents, setSelectedEvents] = useState<IEventList[]>([]);
  const [events, setEvents] = useState<IEventList[]>(eventList);

  // 가공된 이벤트 리스트
  const processedEvents = useMemo(() => {
    return events.map(event => ({
      ...event,
      end: dayjs(event.end).add(1, 'day').toDate(), // 이벤트 끝나는 날짜에 하루 더하기
    }));
  }, [events]);

  // 날짜에 해당하는 이벤트 필터링
  const handleDateSelect = (cellInfo: { start: Date; end: Date }) => {
    const selectedDay = dayjs(cellInfo.start);

    const eventForDate = processedEvents.filter(event => {
      const eventStart = dayjs(event.start).startOf('day');
      const eventEnd = dayjs(event.end).startOf('day');
      const selectedDayStart = selectedDay.startOf('day');

      return (
        (selectedDayStart.isSame(eventStart, 'day') ||
          selectedDayStart.isAfter(eventStart, 'day')) &&
        selectedDayStart.isBefore(eventEnd, 'day')
      );
    });

    setSelectedEvents(eventForDate);
  };

  // 삭제
  const handleDelete = (id: string) => {
    setEvents(prev => prev.filter(event => event.eventId !== id));
    setSelectedEvents(prev => prev.filter(event => event.eventId !== id));
  };

  return {
    processedEvents,
    selectedEvents,
    handleDateSelect,
    handleDelete,
  };
};

export { useCalendarEvents };

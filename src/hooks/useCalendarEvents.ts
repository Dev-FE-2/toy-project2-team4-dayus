import { useMemo, useState, useEffect } from 'react';

import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import { IEventList } from '@/types/calendar';
import { RootState } from '@/store';
import {
  getPersonalScheduleItems,
  updatePersonalScheduleItem,
  deletePersonalScheduleItem,
  postPersonalScheduleItem,
  getWorkScheduleItems,
} from '@/api/scheduleApi';

const useCalendarEvents = () => {
  const [selectedEvents, setSelectedEvents] = useState<IEventList[]>([]);
  const [events, setEvents] = useState<IEventList[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const user = useSelector((state: RootState) => state.user);

  // 일정 데이터 가져오기
  useEffect(() => {
    const fetchEvents = async () => {
      if (!user.email) {
        setError('로그인이 필요합니다.');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const personalEvents = await getPersonalScheduleItems(user);
        const workEvents = await getWorkScheduleItems(user);

        const markedWorkEvents = workEvents.map(event => ({
          ...event,
          isWorkSchedule: true,
        }));

        setEvents([...personalEvents, ...markedWorkEvents]);
      } catch (error) {
        setError('일정을 불러오는데 실패했어요!');
        console.error('일정 조회 실패: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [user]);

  // 가공된 이벤트 리스트
  const processedEvents = useMemo(() => {
    return events.map(event => ({
      ...event,
      end: dayjs(event.end).add(1, 'day').toDate(), // 이벤트 끝나는 날짜에 하루 더하기
    }));
  }, [events]);

  // 날짜에 해당하는 이벤트 필터링
  const handleDateSelect = (cellInfo: { start: Date; end: Date }) => {
    const selectedDay = dayjs(cellInfo.start).startOf('day');

    const eventForDate = events.filter(event => {
      const eventStart = dayjs(event.start).startOf('day');
      const eventEnd = dayjs(event.end).startOf('day');

      return (
        selectedDay.isSame(eventStart) ||
        selectedDay.isSame(eventEnd) ||
        (selectedDay.isAfter(eventStart) && selectedDay.isBefore(eventEnd))
      );
    });

    setSelectedEvents(eventForDate);
  };

  // 추가
  const handleAdd = async (addedSchedule: IEventList) => {
    try {
      await postPersonalScheduleItem(user, addedSchedule);
      setEvents([...events, addedSchedule]);
      setSelectedEvents([...selectedEvents, addedSchedule]);
    } catch (err) {
      setError('일정 등록에 실패하였습니다.');
      console.error('일정 등록 실패: ', err);
    }
  };

  // 삭제
  const handleDelete = async (id: string) => {
    if (!user.email) {
      setError('로그인이 필요합니다.');
      return;
    }

    try {
      await deletePersonalScheduleItem(user, id);
      setEvents(prev => prev.filter(event => event.eventId !== id));
      setSelectedEvents(prev => prev.filter(event => event.eventId !== id));
    } catch (error) {
      setError('일정 삭제에 실패했어요!');
      console.error('일정 삭제 실패:', error);
    }
  };

  const handleEdit = async (id: string, updatedEvent: Partial<IEventList>) => {
    if (!user.email) {
      setError('로그인이 필요합니다.');
      return;
    }

    try {
      await updatePersonalScheduleItem(user, id, updatedEvent);
      setEvents(prev =>
        prev.map(event =>
          event.eventId === id ? { ...event, ...updatedEvent } : event,
        ),
      );
      setSelectedEvents(prev =>
        prev.map(event =>
          event.eventId === id ? { ...event, ...updatedEvent } : event,
        ),
      );
    } catch (error) {
      setError('일정 수정에 실패했어요!');
      console.error('일정 수정 실패:', error);
    }
  };

  return {
    processedEvents,
    selectedEvents,
    handleDateSelect,
    handleAdd,
    handleDelete,
    handleEdit,
    isLoading,
    error,
  };
};

export { useCalendarEvents };

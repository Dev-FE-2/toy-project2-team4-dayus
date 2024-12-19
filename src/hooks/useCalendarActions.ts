import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { calendarActions } from '@/store/slices/calendarSlice';
import { IUserState } from '@/store/slices/userSlice';
import { IEventList } from '@/types/calendar';
import {
  getPersonalScheduleItems,
  getWorkScheduleItems,
  postPersonalScheduleItem,
  updatePersonalScheduleItem,
  deletePersonalScheduleItem,
} from '@/api/scheduleApi';

const useCalendarActions = () => {
  const dispatch = useDispatch();

  const fetchEvents = useCallback(
    async (user: IUserState) => {
      if (!user.email) {
        dispatch(calendarActions.setError('로그인이 필요합니다.'));
        return;
      }

      try {
        dispatch(calendarActions.setLoading(true));
        const personalSchedules = await getPersonalScheduleItems(user);
        const workSchedules = await getWorkScheduleItems(user);
        const markedWorkSchedules = workSchedules.map(schedule => ({
          ...schedule,
          isWorkSchedule: true,
        }));

        dispatch(
          calendarActions.setEvents([
            ...personalSchedules,
            ...markedWorkSchedules,
          ]),
        );
      } catch {
        dispatch(calendarActions.setError('일정을 불러오는데 실패했어요!'));
      } finally {
        dispatch(calendarActions.setLoading(false));
      }
    },
    [dispatch],
  );

  const addEvent = useCallback(
    async (user: IUserState, event: IEventList) => {
      try {
        await postPersonalScheduleItem(user, event);
        dispatch(calendarActions.addEvent(event));
      } catch (error) {
        dispatch(calendarActions.setError('일정 추가에 실패했어요!'));
        throw error;
      }
    },
    [dispatch],
  );

  const updateEvent = useCallback(
    async (
      user: IUserState,
      eventId: string,
      updatedSchedule: Partial<IEventList>,
    ) => {
      try {
        await updatePersonalScheduleItem(user, eventId, updatedSchedule);
        dispatch(calendarActions.updateEvent({ eventId, updatedSchedule }));
      } catch (error) {
        dispatch(calendarActions.setError('일정 수정에 실패했어요!'));
        throw error;
      }
    },
    [dispatch],
  );

  const deleteEvent = useCallback(
    async (user: IUserState, eventId: string) => {
      try {
        await deletePersonalScheduleItem(user, eventId);
        dispatch(calendarActions.deleteEvent(eventId));
      } catch (error) {
        dispatch(calendarActions.setError('일정 삭제에 실패했어요!'));
        throw error;
      }
    },
    [dispatch],
  );

  return {
    fetchEvents,
    addEvent,
    updateEvent,
    deleteEvent,
  };
};

export { useCalendarActions };

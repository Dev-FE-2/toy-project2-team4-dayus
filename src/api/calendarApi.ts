import { axiosInstance } from './axios';

import { IEventList } from '@/types/calendar';

export const calendarApi = {
  // 전체 이벤트 조회
  getEvents: async () => {
    const response = await axiosInstance.get<IEventList[]>('/events');
    return response.data;
  },

  // 이벤트 생성
  createEvent: async (newEvent: Omit<IEventList, 'eventId'>) => {
    const response = await axiosInstance.post<IEventList>('/events', newEvent);
    return response.data;
  },

  // 이벤트 수정
  updateEvent: async (id: string, updatedEvent: Partial<IEventList>) => {
    const response = await axiosInstance.put<IEventList>(
      `/events/${id}`,
      updatedEvent,
    );
    return response.data;
  },

  // 이벤트 삭제
  deleteEvent: async (id: string) => {
    await axiosInstance.delete(`/events/${id}`);
  },
};

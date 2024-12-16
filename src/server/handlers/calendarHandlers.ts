import { delay, http, HttpResponse } from 'msw';

import makeRandomRange from '@/utils/makeRandomRange';
import { eventList } from '@/mocks/data/calendar';
import { IEventList } from '@/types/calendar';

let events: IEventList[] = [...eventList];

export const calendarHandlers = [
  // 이벤트 목록 조회
  http.get('https://api.example.com/events', async () => {
    await delay(makeRandomRange(100, 500));

    return HttpResponse.json(events, { status: 200 });
  }),

  // 이벤트 추가
  http.post('https://api.example.com/events', async ({ request }) => {
    await delay(makeRandomRange(100, 500));

    const newEvent = (await request.json()) as IEventList;

    if (!newEvent.title || !newEvent.start || !newEvent.end) {
      return new HttpResponse(null, {
        status: 400,
        statusText: '필수 필드가 누락되었습니다.',
      });
    }

    const eventWithId = {
      ...newEvent,
      eventId: `event-${Date.now()}`,
    };

    events.push(eventWithId);

    return HttpResponse.json(eventWithId, { status: 201 });
  }),

  // 이벤트 수정
  http.put(
    'https://api.example.com/events/:eventId',
    async ({ params, request }) => {
      await delay(makeRandomRange(100, 500));

      const updatedEvent = (await request.json()) as Partial<IEventList>;
      const eventId = params.eventId as string;

      const eventIndex = events.findIndex(event => event.eventId === eventId);

      if (eventIndex === -1) {
        return new HttpResponse(null, {
          status: 404,
          statusText: '이벤트를 찾을 수 없습니다.',
        });
      }

      events[eventIndex] = {
        ...events[eventIndex],
        ...updatedEvent,
      };

      return HttpResponse.json(events[eventIndex], { status: 200 });
    },
  ),

  // 이벤트 삭제
  http.delete('https://api.example.com/events/:eventId', async ({ params }) => {
    await delay(makeRandomRange(100, 500));

    const eventId = params.eventId as string;
    const eventIndex = events.findIndex(event => event.eventId === eventId);

    if (eventIndex === -1) {
      return new HttpResponse(null, {
        status: 404,
        statusText: '이벤트를 찾을 수 없습니다.',
      });
    }

    events = events.filter(event => event.eventId !== eventId);

    return new HttpResponse(null, { status: 200 });
  }),
];

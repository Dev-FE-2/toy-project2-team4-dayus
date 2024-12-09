import { arrEventColor } from '@/constants/constant';

// end: 실제 일정 끝나는 날짜에 + 1 해서 넣어야함. 일정이 지정된 날 전날에 끝남.
export const eventList = [
  {
    eventId: '1',
    title: '겨울 시즌 프로모션 기간',
    start: new Date(),
    end: new Date(2024, 11, 23),
    color: arrEventColor[3],
  },
  {
    eventId: '2',
    title: '마감 근무',
    start: new Date(2024, 11, 6),
    end: new Date(2024, 11, 6),
    color: arrEventColor[2],
  },
  {
    eventId: '3',
    title: '미들 근무',
    start: new Date(2024, 11, 8),
    end: new Date(2024, 11, 8),
    color: arrEventColor[1],
  },
  {
    eventId: '4',
    title: '월간 재고조사',
    start: new Date(2024, 11, 10),
    end: new Date(2024, 11, 10),
    color: arrEventColor[4],
  },
  {
    eventId: '5',
    title: '신메뉴 교육',
    start: new Date(2024, 11, 12),
    end: new Date(2024, 11, 12),
    color: arrEventColor[5],
  },
  {
    eventId: '6',
    title: '마감 근무',
    start: new Date(2024, 11, 15),
    end: new Date(2024, 11, 15),
    color: arrEventColor[2],
  },
  {
    eventId: '7',
    title: '위생 점검의 날',
    start: new Date(2024, 11, 20),
    end: new Date(2024, 11, 20),
    color: arrEventColor[6],
  },
  {
    eventId: '8',
    title: '성탄절',
    start: new Date(2024, 11, 25),
    end: new Date(2024, 11, 25),
    color: arrEventColor[3],
  },
  {
    eventId: '9',
    title: '미들 근무',
    start: new Date(2024, 11, 25),
    end: new Date(2024, 11, 25),
    color: arrEventColor[1],
  },
  {
    eventId: '10',
    title: '오픈 근무',
    start: new Date(2024, 11, 27),
    end: new Date(2024, 11, 27),
    color: arrEventColor[0],
  },
  {
    eventId: '11',
    title: '마감 근무',
    start: new Date(2024, 11, 30),
    end: new Date(2024, 11, 30),
    color: arrEventColor[2],
  },
];

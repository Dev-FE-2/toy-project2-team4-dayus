import { IEventColorProps } from '@/types/calendar';

const arrEventColor: IEventColorProps[] = [
  {
    id: 1,
    bgColor: '#f8f2a2',
    fontColor: '#000',
  },
  {
    id: 2,
    bgColor: '#a2a5f8',
    fontColor: '#fff',
  },
  {
    id: 3,
    bgColor: '#eaa687',
    fontColor: '#fff',
  },
  {
    id: 4,
    bgColor: '#f57897',
    fontColor: '#fff',
  },
  {
    id: 5,
    bgColor: '#584b48',
    fontColor: '#fff',
  },
  {
    id: 6,
    bgColor: '#dbF0e7',
    fontColor: '#000',
  },
  {
    id: 7,
    bgColor: '#5a5a5a',
    fontColor: '#fff',
  },
];

// 임시 테스트 배열
// end: 실제 일정 끝나는 날짜에 + 1 해서 넣어야함. 일정이 지정된 날 전날에 끝남.
export const eventList = [
  {
    title: '일정 테스트',
    start: new Date(),
    end: new Date(),
    color: arrEventColor[0],
    // allDay: true
  },
  {
    title: '222',
    start: new Date(),
    end: new Date(2024, 11, 23),
    color: arrEventColor[6],
    // allDay: true
  },
];

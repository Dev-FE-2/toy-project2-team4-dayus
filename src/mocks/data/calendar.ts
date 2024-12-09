import { arrEventColor } from '@/constants/constant';

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

export const mockSchedules = [
  {
    id: '1',
    scheduleTitle: '프로모션 주간',
    scheduleDate: '12월 4일 ~ 12월 6일',
    color: '#7AFE42',
  },
  {
    id: '2',
    scheduleTitle: '마감',
    scheduleDate: '12월 4일',
    color: '#FEBC42',
  },
  {
    id: '3',
    scheduleTitle: '재고정리',
    scheduleDate: '12월 4일 ~ 12월 6일',
    color: '#42E5FE',
  },
  {
    id: '4',
    scheduleTitle: '출입문 청소',
    scheduleDate: '12월 1일 ~ 12월 6일',
    color: '#955A53',
  },
];

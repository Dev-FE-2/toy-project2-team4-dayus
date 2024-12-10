export const ROUTER_PATH = {
  HOME: '/',
  LOGIN: '/login',
  SALARY: '/salary',
  SHIFT: '/shift',
  PROFILE: '/profile',
};

export const DRAG_CLOSE_THRESHOLD = 250;

export const arrEventColor = [
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

export const MOCK_API_DOMAIN = 'https://api.example.com';

export const SALARY_DETAIL_KEY = {
  TOUR: 'tour',
  PAYMENT_DATE: 'date',
  ACCOUNT: 'account',
  AMOUNT: 'amount',
  DEDUCTIBLE: 'deductible',
  TOTAL: 'total',
} as const;

// ----------- 모달 id (redux 관리를 위함) ----------- //
// 일정 추가 모달
export const ADD_SCHEDULE_MODAL_ID = 'add-schedule-modal';

export const SELECT_WORK_TYPE = [
  { label: '전체', value: 0 },
  { label: '정규 근무', value: 1 },
  { label: '대리 근무', value: 2 },
  { label: '연장 근무', value: 3 },
  { label: '추가 근무', value: 4 },
];

export const ROUTER_PATH = {
  HOME: '/',
  LOGIN: '/login',
  SALARY: '/salary',
  PROFILE: '/profile',
};

export const DRAG_CLOSE_THRESHOLD = 250;

export const MOCK_API_DOMAIN = 'https://api.example.com';

export const SALARY_DETAIL_KEY = {
  TOUR: 'tour',
  PAYMENT_DATE: 'date',
  ACCOUNT: 'account',
  AMOUNT: 'amount',
  DEDUCTIBLE: 'deductible',
  TOTAL: 'total',
} as const;

export const WORK_TYPE = [
  { label: '정규 근무', value: '0' },
  { label: '대리 근무', value: '1' },
  { label: '연장 근무', value: '2' },
  { label: '추가 근무', value: '3' },
];

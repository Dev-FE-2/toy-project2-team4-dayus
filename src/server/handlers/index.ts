import { exampleHandlers } from './exampleHandler';
import { salaryHandlers } from './salaryHandlers';
import { shiftHandlers } from './shiftHandler';
import { calendarHandlers } from './calendarHandlers';

export const apiHandlers = [
  ...exampleHandlers,
  ...salaryHandlers,
  ...shiftHandlers,
  ...calendarHandlers,
];

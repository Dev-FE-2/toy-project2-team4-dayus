import { exampleHandlers } from './exampleHandler';
import { salaryHandlers } from './salaryHandlers';
import { shiftHandlers } from './shiftHandler';

export const apiHandlers = [
  ...exampleHandlers,
  ...salaryHandlers,
  ...shiftHandlers,
];

import { exampleHandlers } from './exampleHandler';
import { salaryHandlers } from './salaryHandlers';

export const apiHandlers = [...exampleHandlers, ...salaryHandlers];

import { setupWorker } from 'msw/browser';
import { mswHandlers } from './handlers';

export const worker = setupWorker(...mswHandlers);

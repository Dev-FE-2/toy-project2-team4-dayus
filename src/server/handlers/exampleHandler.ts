// exmaple 페이지의 handlers
import makeRandomRange from '@/utils/makeRandomRange';
import { delay, http, HttpResponse } from 'msw';

export const exampleHandlers = [
  http.get('https://api.example.com/user', async () => {
    await delay(makeRandomRange(200, 3000));

    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),
];

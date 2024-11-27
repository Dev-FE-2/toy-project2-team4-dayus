// 가짜 서버 역할을 하는 파일
import { http, delay, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.example.com/user', async () => {
    await delay(300);

    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),
  http.post('https://api.example.com/user', async () => {
    // 무기한 응답 지연. 영원히 보류 상태.
    await delay('infinite');

    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),
];

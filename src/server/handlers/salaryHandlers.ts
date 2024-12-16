import makeRandomRange from '@/utils/makeRandomRange';
import { delay, http, HttpResponse } from 'msw';
import { salaryData, salaryList } from '@/mocks/data/salary';

export const salaryHandlers = [
  // 사용처 : 급여 정보 단일 조회
  http.get('https://api.example.com/salary', async ({ request }) => {
    const url = new URL(request.url);
    const _salarySn = url.searchParams.get('salarySn');
    await delay(makeRandomRange(200, 3000));

    const data = _salarySn ? salaryData : salaryData;

    return HttpResponse.json(data);
  }),

  // 사용처 : 급여 정보 목록 조회
  http.get('https://api.example.com/salaryList', async ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '0');
    const limit = parseInt(url.searchParams.get('limit') || '5');

    const totalPage = Math.ceil(salaryList.length / limit);
    const startIndex = page * limit;
    const endIndex = startIndex + limit;
    const pagenatedData = salaryList.slice(startIndex, endIndex);
    await delay(makeRandomRange(200, 3000));

    return HttpResponse.json({
      currentPage: page,
      totalPage: totalPage,
      data: pagenatedData,
    });
  }),
];

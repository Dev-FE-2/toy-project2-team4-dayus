import makeRandomRange from '@/utils/makeRandomRange';
import { delay, http, HttpResponse } from 'msw';
import { shiftList } from '@/mocks/data/shift';

export const shiftHandlers = [
  // 사용처 : 근무 정정 정보 목록 조회
  http.get('https://api.example.com/shiftList', async ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '0');
    const limit = parseInt(url.searchParams.get('limit') || '5');
    const _workType = url.searchParams.get('workType');
    const _approvalType = url.searchParams.get('approvalType');

    const responseData =
      _workType === _approvalType
        ? shiftList
        : shiftList.filter(
            ({ approvalType, workType }) =>
              workType === _workType || approvalType === _approvalType,
          );

    const totalPage = Math.ceil(responseData.length / limit);
    const startIndex = page * limit;
    const endIndex = startIndex + limit;
    const pagenatedData = responseData.slice(startIndex, endIndex);
    await delay(makeRandomRange(200, 3000));

    return HttpResponse.json({
      currentPage: page,
      totalPage: totalPage,
      data: pagenatedData,
    });
  }),
];

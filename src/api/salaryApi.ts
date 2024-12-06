import { createUrl } from '@/utils/apiUtils';

export const getSalaryItem = async (salarySn?: string) => {
  const url = createUrl('/salary');
  if (salarySn) url.searchParams.append('salarySn', salarySn);

  try {
    const response = await fetch(url, { method: 'GET' });
    const data = response.json();
    console.log(data);

    return data;
  } catch (error) {
    new Error(`ERROR MESSAGE: ${error}`);
  }
};

export const getSalaryList = async (page: number, limit: number) => {
  const url = createUrl('/salaryList');
  url.searchParams.append('page', String(page));
  url.searchParams.append('limit', String(limit));

  try {
    const response = await fetch(url, { method: 'GET' });
    const data = response.json();
    console.log(data);

    return data;
  } catch (error) {
    new Error(`ERROR MESSAGE: ${error}`);
  }
};

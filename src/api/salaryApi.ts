import { axiosInstance } from '@/api/axios';

export const getSalaryItem = async () => {
  try {
    const response = await axiosInstance.get('/salary');
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(`ERROR MESSAGE: ${error}`);
  }
};

export const getSalaryList = async (page: number, limit: number) => {
  const params = { page, limit };
  try {
    const response = await axiosInstance.get('/salaryList', {
      params: params,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(`ERROR MESSAGE: ${error}`);
  }
};

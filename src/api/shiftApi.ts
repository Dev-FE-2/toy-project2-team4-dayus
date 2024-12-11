import { axiosInstance } from './axios';

export const getShiftList = async (
  page: number,
  limit = 10,
  workType: string,
  approvalType: string,
) => {
  const params = { page, limit, workType, approvalType };
  try {
    const response = await axiosInstance.get('/shiftList', {
      params: params,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(`ERROR MESSAGE: ${error}`);
  }
};

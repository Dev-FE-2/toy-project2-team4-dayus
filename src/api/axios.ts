import axios from 'axios';
import { MOCK_API_DOMAIN } from '@/constants/constant';

export const axiosInstance = axios.create({
  baseURL: MOCK_API_DOMAIN,
});

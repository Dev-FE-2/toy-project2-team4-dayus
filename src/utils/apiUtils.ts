import { MOCK_API_DOMAIN } from '@/constants/constant';

export const createUrl = (path: string) => {
  const url = new URL(`${MOCK_API_DOMAIN}${path}`);
  return url;
};

import { getSalaryItem } from '@/api';
import { ISalary, spreadListItem } from '@/types/salary';
import formatSalaryDetail from '@/utils/formatSalaryDetail';
import { useCallback, useEffect, useState } from 'react';

const useSalaryItem = () => {
  const [selectSalary, setSelectSalary] = useState<spreadListItem[]>([]);

  const fetchSalaryItem = useCallback(async () => {
    try {
      const response: ISalary = await getSalaryItem();
      setSelectSalary(formatSalaryDetail(response));
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }, []);

  useEffect(() => {
    fetchSalaryItem();
  }, [fetchSalaryItem]);

  return { selectSalary };
};

export default useSalaryItem;

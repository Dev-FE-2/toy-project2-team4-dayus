import { getSalaryItem } from '@/api';
import { RootState } from '@/store';
import { ISalary, spreadListItem } from '@/types/salary';
import formatSalaryDetail from '@/utils/formatSalaryDetail';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useSalaryItem = () => {
  const [selectSalary, setSelectSalary] = useState<spreadListItem[]>([]);
  const user = useSelector((state: RootState) => state.user);

  const fetchSalaryItem = useCallback(async () => {
    try {
      const response: ISalary = await getSalaryItem(user);
      setSelectSalary(formatSalaryDetail(response));
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }, [user]);

  useEffect(() => {
    fetchSalaryItem();
  }, [fetchSalaryItem]);

  return { selectSalary };
};

export default useSalaryItem;

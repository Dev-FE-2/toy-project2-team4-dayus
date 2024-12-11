import { getSalaryList } from '@/api';
import { SalaryList, SalaryListItem } from '@/types/salary';
import { removeDuplicates } from '@/utils/arrayUtils';
import { useCallback, useEffect, useState } from 'react';

const useSalaryList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadMore, setHasLoadMore] = useState(true);
  const [page, setPage] = useState(0);
  const [salaryList, setSalaryList] = useState<SalaryListItem[]>([]);

  const fetchSalaryList = useCallback(async () => {
    if (!hasLoadMore) return;
    setIsLoading(true);
    try {
      const response: SalaryList = await getSalaryList(page, 10);
      const { currentPage, data, totalPage } = response;

      setSalaryList(prevList => [
        ...prevList,
        ...removeDuplicates(prevList, data, 'salarySn'),
      ]);

      if (currentPage + 1 >= totalPage) setHasLoadMore(false);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [page, hasLoadMore]);

  useEffect(() => {
    fetchSalaryList();
  }, [fetchSalaryList]);

  const loadMore = () => {
    if (hasLoadMore) {
      setPage(prev => prev + 1);
    }
  };

  return { salaryList, isLoading, hasLoadMore, loadMore };
};

export default useSalaryList;

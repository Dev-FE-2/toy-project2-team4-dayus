import { useState, useCallback, useEffect } from 'react';
import { getShiftList } from '@/api/shiftApi';
import { IShiftList, ShiftListItem } from '@/types/shift';
import { removeDuplicates } from '@/utils/arrayUtils';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

interface UseShiftListParams {
  workType: string;
  approvalType: string;
}

export const useShiftList = ({
  workType,
  approvalType,
}: UseShiftListParams) => {
  const [shiftList, setShiftList] = useState<ShiftListItem[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadMore, setHasLoadMore] = useState(true);

  const user = useSelector((state: RootState) => state.user);

  const fetchShiftList = useCallback(async () => {
    if (!hasLoadMore) return;
    setIsLoading(true);
    try {
      const response: IShiftList = await getShiftList(
        page,
        10,
        workType,
        approvalType,
        user,
      );
      const { currentPage, data, totalPage } = response;
      setShiftList(prevList => [
        ...prevList,
        ...removeDuplicates(prevList, data, 'shiftSn'),
      ]);
      if (currentPage + 1 >= totalPage) setHasLoadMore(false);
      return response;
    } catch (error) {
      throw new Error(`error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [hasLoadMore, page, workType, approvalType, user]);

  useEffect(() => {
    fetchShiftList();
  }, [fetchShiftList]);

  const loadMore = () => {
    if (hasLoadMore) {
      setPage(prev => prev + 1);
    }
  };

  const resetList = () => {
    setShiftList([]);
    setPage(0);
    setHasLoadMore(true);
  };

  return { shiftList, isLoading, hasLoadMore, loadMore, resetList };
};

import ShiftList from '@/components/list/ShiftList';
import Select from '@/components/ui/Select';
import { SELECT_APPROVAL_TYPE, SELECT_WORK_TYPE } from '@/constants/constant';
import { useCallback, useEffect, useState } from 'react';
import * as S from './ShiftPage.styles';
import { getShiftList } from '@/api/shiftApi';
import { IShiftList, ShiftListItem } from '@/types/shift';
import { removeDuplicates } from '@/utils/arrayUtils';

const ShiftPage = () => {
  const [workType, setWorkType] = useState('');
  const [approvalType, setApprovalType] = useState('');
  const [page, setPage] = useState(0);
  const [shiftList, setShiftList] = useState<ShiftListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadMore, setHasLoadMore] = useState(true);

  const handleWorkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (isLoading) return;
    setWorkType(event.target.value);
    setShiftList([]);
    setPage(0);
    setHasLoadMore(true);
  };

  const handleApprovalChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (isLoading) return;
    setApprovalType(event.target.value);
    setShiftList([]);
    setPage(0);
    setHasLoadMore(true);
  };

  const fetchShiftList = useCallback(async () => {
    if (isLoading || !hasLoadMore) return;
    setIsLoading(true);
    try {
      const response: IShiftList = await getShiftList(
        page,
        10,
        workType,
        approvalType,
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
  }, [isLoading, hasLoadMore, page, workType, approvalType]);

  useEffect(() => {
    fetchShiftList();
  }, [fetchShiftList]);

  const handleScroll = () => {
    if (hasLoadMore) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <S.Container>
      <Select
        options={SELECT_WORK_TYPE}
        onChange={handleWorkChange as () => void}
        value={workType}
      />
      <Select
        options={SELECT_APPROVAL_TYPE}
        onChange={handleApprovalChange as () => void}
        value={approvalType}
      />
      <ShiftList
        isLoading={isLoading}
        listItem={shiftList}
        onLoadMore={handleScroll}
      />
    </S.Container>
  );
};

export default ShiftPage;

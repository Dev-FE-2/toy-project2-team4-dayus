import ShiftList from '@/components/list/ShiftList';
import Select from '@/components/ui/Select';
import { SELECT_APPROVAL_TYPE, SELECT_WORK_TYPE } from '@/constants/constant';
import { useState } from 'react';
import * as S from './ShiftPage.styles';
import { useShiftList } from '@/hooks/useShiftList';

const ShiftPage = () => {
  const [workType, setWorkType] = useState('');
  const [approvalType, setApprovalType] = useState('');
  const { isLoading, shiftList, loadMore, resetList } = useShiftList({
    workType,
    approvalType,
  });

  const handleWorkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (isLoading) return;
    setWorkType(event.target.value);
    resetList();
  };

  const handleApprovalChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (isLoading) return;
    setApprovalType(event.target.value);
    resetList();
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
        onLoadMore={loadMore}
      />
    </S.Container>
  );
};

export default ShiftPage;

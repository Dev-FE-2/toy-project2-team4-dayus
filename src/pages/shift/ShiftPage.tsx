import ShiftList from '@/components/list/ShiftList';
import Select from '@/components/ui/Select';
import {
  PAGE_TABS,
  SELECT_APPROVAL_TYPE,
  SELECT_WORK_TYPE,
} from '@/constants/constant';
import { useEffect, useState } from 'react';
import * as S from './ShiftPage.styles';
import { useShiftList } from '@/hooks/useShiftList';
import ShiftModal from '@/components/shift-modal/ShiftModal';
import { useNavigate } from 'react-router-dom';
import Tab from '@/components/ui/Tab';

const ShiftPage = () => {
  const [workType, setWorkType] = useState('');
  const [approvalType, setApprovalType] = useState('');
  const { isLoading, shiftList, loadMore, resetList } = useShiftList({
    workType,
    approvalType,
  });

  const [selected, setSelected] = useState('/shift');
  const navigate = useNavigate();

  useEffect(() => {
    navigate(selected);
  }, [navigate, selected]);

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
      <Tab items={PAGE_TABS} selected={selected} setSelected={setSelected} />
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
      <ShiftModal />
    </S.Container>
  );
};

export default ShiftPage;

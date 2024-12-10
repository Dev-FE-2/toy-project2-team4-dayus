import ShiftList from '@/components/list/ShiftList';
import Select from '@/components/ui/Select';
import { SELECT_APPROVAL_TYPE, SELECT_WORK_TYPE } from '@/constants/constant';
import { useState } from 'react';
import * as S from './ShiftPage.styles';

const ShiftPage = () => {
  const [workType, setWorkType] = useState('0');
  const [approvalType, setApprovalType] = useState('0');
  const [isLoading] = useState(false);

  const handleWorkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (isLoading) return;
    setWorkType(event.target.value);
  };

  const handleApprovalChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (isLoading) return;
    setApprovalType(event.target.value);
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
        listItem={[]}
        onLoadMore={() => {
          return;
        }}
      />
    </S.Container>
  );
};

export default ShiftPage;

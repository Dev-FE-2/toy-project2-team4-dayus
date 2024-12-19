import { ShiftListProps } from '@/types/shift';
import InfiniteScroll from '../infinite-scroll/InfiniteScroll';

import * as S from './SalaryList.styles';
import ShiftItem from './ShiftItem';
import Button from '../ui/button/Button';
import { useToggleModal } from '@/hooks/useToggleModal';
import { POST_SHIFT_MODAL_ID } from '@/constants/constant';

const ShiftList = ({ isLoading, listItem, onLoadMore }: ShiftListProps) => {
  const { openIdModal } = useToggleModal({ modalId: POST_SHIFT_MODAL_ID });
  return (
    <S.ListContainer>
      <S.TitleBox>
        <S.H2>근무 정정 내역</S.H2>
        <Button onClick={() => openIdModal()}>정정 신청</Button>
      </S.TitleBox>
      <S.Hr />
      <InfiniteScroll isLoading={isLoading} onLoadMore={onLoadMore}>
        <S.ListBox>
          {listItem.map(({ shiftSn, approvalType, workDate, workTitle }) => (
            <ShiftItem
              key={shiftSn}
              approvalType={approvalType}
              workDate={workDate}
              workTitle={workTitle}
              shiftSn={shiftSn}
            />
          ))}
        </S.ListBox>
      </InfiniteScroll>
    </S.ListContainer>
  );
};

export default ShiftList;

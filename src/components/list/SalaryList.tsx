import { SalaryListProps } from '@/types/salary';
import InfiniteScroll from '../infinite-scroll/InfiniteScroll';
import SalaryItem from './SalaryItem';

import * as S from './SalaryList.styles';

const SalaryList = ({
  isLoading,
  listItem,
  onLoadMore,
  onModal,
}: SalaryListProps) => {
  return (
    <S.ListContainer>
      <S.TitleBox>
        <S.H2>급여 내역</S.H2>
      </S.TitleBox>
      <S.Hr />
      <InfiniteScroll isLoading={isLoading} onLoadMore={onLoadMore}>
        <S.ListBox>
          {listItem.map((item, i) => (
            <SalaryItem key={i} item={item} handleClick={() => onModal(item)} />
          ))}
        </S.ListBox>
      </InfiniteScroll>
    </S.ListContainer>
  );
};

export default SalaryList;

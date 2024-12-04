import { useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import Spinner from '../ui/Spinner';

interface IInfiniteScrollProps {
  isLoading: boolean;
  onLoadMore: () => void;
  children: ReactNode;
}

// 1. 리팩토링 : IntersectionObserver 적용
// 2. 스타일링 : Styled-component 완전 분리
// 3. 문서화 : JSDoc (@example, @param, @property 등)을 통해 props 설명
const InfiniteScroll = ({
  isLoading,
  onLoadMore,
  children,
}: IInfiniteScrollProps) => {
  const handleScroll = useCallback(() => {
    return (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 && onLoadMore()
    );
  }, [onLoadMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ScrollBox>
      {children}
      {isLoading && <Spinner size={25} />}
    </ScrollBox>
  );
};

const ScrollBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: var(--spacing-2);
`;

export default InfiniteScroll;

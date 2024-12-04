import { useEffect, useCallback, Fragment } from 'react';
import type { ReactNode } from 'react';
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
    <Fragment>
      {children}
      {isLoading && <Spinner size={25} />}
    </Fragment>
  );
};

export default InfiniteScroll;

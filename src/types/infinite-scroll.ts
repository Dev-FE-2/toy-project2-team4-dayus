import type { ReactNode } from 'react';

export interface ILoadMoreProps {
  isLoading: boolean;
  onLoadMore: () => void;
}

export interface IInfiniteScrollProps extends ILoadMoreProps {
  children: ReactNode;
}

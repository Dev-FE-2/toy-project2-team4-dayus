import { ILoadMoreProps } from './infinite-scroll';

export interface ISalary {
  salarySn: string;
  tour: {
    startDate: string;
    endDate: string;
  };
  paymentDate: string;
  bank: {
    name: string;
    account: string;
  };
  deductible: number;
  amount: number;
  totalAmount: number;
}

export interface SalaryListItem
  extends Pick<ISalary, 'totalAmount' | 'paymentDate' | 'salarySn'> {
  title: string;
}

export type SalaryListProps = ILoadMoreProps & {
  listItem: SalaryListItem[];
  onModal?: (salarySn: string) => void;
};

export type SalaryItemProps = {
  item: SalaryListItem;
  onModal?: (salarySn: string) => void;
};

export interface SalaryList {
  data: SalaryListItem[];
  currentPage: number;
  totalPage: number;
}

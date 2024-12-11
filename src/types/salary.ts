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

export interface SalaryListItem extends ISalary {
  title: string;
}

export type SalaryListProps = ILoadMoreProps & {
  listItem: SalaryListItem[];
  onModal: (salary: SalaryListItem) => void;
};

export type SalaryItemProps = {
  item: SalaryListItem;
  handleClick: () => void;
};

export interface SalaryList {
  data: SalaryListItem[];
  currentPage: number;
  totalPage: number;
}

export type spreadListItem = {
  id: string;
  label: string;
  value: string;
};

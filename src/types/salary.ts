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

export type SalaryItemProps = SalaryListItem;

export interface SalaryList {
  data: SalaryListItem[];
  currentPage: number;
  totalPage: number;
}

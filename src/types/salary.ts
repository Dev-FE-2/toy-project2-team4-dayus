export interface ISalary {
  salarySn?: string;
  tour: {
    startDate: Date;
    endDate: Date;
  };
  paymentDate: Date;
  bank: {
    name: string;
    account: string;
  };
  deductible: number;
  amount: number;
  totalAmount: number;
}

export type SalaryItemProps = Pick<
  ISalary,
  'salarySn' | 'totalAmount' | 'paymentDate'
> & {
  title: string;
  onClick: () => void;
};

export type itemType = {
  id: string;
  label: string;
  value: string;
};

import { ILoadMoreProps } from './infinite-scroll';

type RealWorkType = '정규 근무' | '대리 근무' | '연장 근무' | '추가 근무';
type RealApprovalType = '보류' | '승인';

export interface IShift {
  shiftSn: string;
  workType: '' | RealWorkType;
  approvalType: '' | RealApprovalType;
  approvalDate: Date;
  workStartDate: Date;
  workEndDate: Date;
  workTitle: string;
  workTime: number;
  explanation: string;
}

export type ShiftListItem = Pick<
  IShift,
  'shiftSn' | 'workTitle' | 'approvalType'
> & {
  workDate: Date;
};

export type ShiftListProps = ILoadMoreProps & {
  listItem: ShiftListItem[];
};

export interface IShiftList {
  data: ShiftListItem[];
  currentPage: number;
  totalPage: number;
}

export interface ICorrectionShift
  extends Pick<IShift, 'workType' | 'workTitle' | 'workTime' | 'explanation'> {
  workDate: Date;
}

export type itemType = {
  id: string;
  label: string;
  value: string;
};

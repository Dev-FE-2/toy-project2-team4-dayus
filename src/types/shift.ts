import { ILoadMoreProps } from './infinite-scroll';

type RealWorkType = '정규 근무' | '대리 근무' | '연장 근무' | '추가 근무';
type RealApprovalType = '보류' | '승인';
type RealWorkTime = 'open' | 'close';

export interface IShift {
  shiftSn: string;
  workType: '' | RealWorkType;
  approvalType: '' | RealApprovalType;
  approvalDate: Date;
  workDate: Date;
  workTitle: string;
  workTime: RealWorkTime;
  explanation: string;
}

export type ShiftListItem = Pick<
  IShift,
  'shiftSn' | 'workTitle' | 'approvalType' | 'workDate'
>;

export type ShiftListProps = ILoadMoreProps & {
  listItem: ShiftListItem[];
};

export interface IShiftList {
  data: ShiftListItem[];
  currentPage: number;
  totalPage: number;
}

export type ICorrectionShift = Pick<
  IShift,
  'workType' | 'workTitle' | 'workTime' | 'explanation' | 'workDate'
>;

export type itemType = {
  id: string;
  label: string;
  value: string;
};

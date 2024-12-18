/* eslint-disable */
import { IEventList } from './calendar';

export interface ScheduleItemProps {
  schedule: IEventList;
  onEditSchedule: (schedule: IEventList) => void;
}

export interface ScheduleListProps {
  onEditSchedule: (schedule: IEventList) => void;
}

export type EditScheduleModalProps = {
  schedule: IEventList;
  closeModal: () => void;
};

export interface IAddScheduleModalProps {
  selectedDate: Date | null;
}

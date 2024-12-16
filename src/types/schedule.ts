/* eslint-disable */
import { IEventList } from './calendar';

export interface ScheduleItemProps {
  schedule: IEventList;
  onDelete: (id: string) => void;
  onEditSchedule: (schedule: IEventList) => void;
}

export interface ScheduleListProps {
  schedules: IEventList[];
  onDelete: (id: string) => void;
  onEditSchedule: (schedule: IEventList) => void;
}

export type EditScheduleModalProps = {
  schedule: IEventList;
  onEdit: (eventId: string, updatedSchedule: Partial<IEventList>) => void;
};

export interface IAddScheduleModalProps {
  selectedDate: Date | null;
  onAdd: (addedSchedule: IEventList) => void;
}

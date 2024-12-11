/* eslint-disable */
import { IEventList } from './calendar';

export interface ScheduleItemProps {
  schedule: IEventList;
  onDelete: (id: string) => void;
  onOpenEditModal: (schedule: IEventList) => void;
}

export interface ScheduleListProps {
  schedules: IEventList[];
  onDelete: (id: string) => void;
  onOpenEditModal: (schedule: IEventList) => void;
}

export type EditScheduleModalProps = {
  schedule: IEventList;
  onEdit: (eventId: string, updatedSchedule: Partial<IEventList>) => void;
};

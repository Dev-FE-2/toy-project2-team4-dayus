/* eslint-disable */
import { IEventList } from './calendar';

export interface ScheduleItemProps {
  schedule: IEventList;
  onDelete: (id: string) => void;
}

export interface ScheduleListProps {
  schedules: IEventList[];
  onDelete: (id: string) => void;
}

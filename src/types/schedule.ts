import { IEventList } from './calendar';

export interface ScheduleItemProps {
  schedule: IEventList;
}

export type EditScheduleModalProps = {
  schedule: IEventList;
  closeModal: () => void;
};

export interface IAddScheduleModalProps {
  selectedDate: Date | null;
}

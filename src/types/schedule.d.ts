/* eslint-disable */
type Schedule = {
  id: string;
  scheduleTitle: string;
  scheduleDate: string;
  color: string;
};

export interface ScheduleItemProps {
  schedule: Schedule;
  onDelete: (id: string) => void;
}

export interface ScheduleListProps {
  schedules: Schedule[];
  onDelete: (id: string) => void;
}

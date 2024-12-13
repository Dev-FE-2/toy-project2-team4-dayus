/* eslint-disable */
import { Event, ToolbarProps } from 'react-big-calendar';

export type CustomToolbarProps = Pick<ToolbarProps, 'label' | 'onNavigate'>;

export interface IEventList extends Event {
  eventId: string;
  memo?: string;
  color: IEventColorProps;
}

export interface ICafeEventList extends Event {
  eventId: string;
}

export interface IEventColorProps {
  id: number;
  bgColor: string;
  fontColor: string;
}

export interface IMainCalendarProps {
  processedEvents: IEventList[];
  selectedEvents: IEventList[];
  onDateSelect: (cellInfo: { start: Date; end: Date }) => void;
  onEditSchedule: (schedule: IEventList) => void;
  onDelete: (id: string) => void;
}

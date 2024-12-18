/* eslint-disable */
import { Dispatch, SetStateAction } from 'react';
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
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  onEditSchedule: (schedule: IEventList) => void;
}

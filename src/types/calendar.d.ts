import { Event, ToolbarProps } from 'react-big-calendar';

export type CustomToolbarProps = Pick<ToolbarProps, 'label' | 'onNavigate'>;
export interface IEventList extends Event {
  color: IEventColorProps;
}
export interface IEventColorProps {
  id: number;
  bgColor: string;
  fontColor: string;
}

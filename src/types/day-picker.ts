/* eslint-disable */
import { DateRange } from 'react-day-picker';

type DatePickerMode = 'single' | 'range';

type DatePickerBaseProps = {
  mode: DatePickerMode;
};

export type SingleDayPickerProps = {
  id: string;
  text: string;
  date: Date;
  onChange: (newDate: Date) => void;
};

type SingleDatePickerProps = DatePickerBaseProps & {
  mode: 'single';
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
};

type RangeDatePickerProps = DatePickerBaseProps & {
  mode: 'range';
  selected?: DateRange;
  onSelect?: (range: DateRange | undefined) => void;
};

export type RangeDayPickerProps = {
  className?: string;
  initialRange?: DateRange;
  onRangeChange?: (range: DateRange) => void;
};

export type DatePickerProps = SingleDatePickerProps | RangeDatePickerProps;

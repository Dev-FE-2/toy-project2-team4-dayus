/* eslint-disable */
type DatePickerMode = 'single' | 'range';

type DatePickerBaseProps = {
  mode: DatePickerMode;
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

export type DatePickerProps = SingleDatePickerProps | RangeDatePickerProps;

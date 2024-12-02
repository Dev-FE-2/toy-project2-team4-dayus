import { useState } from 'react';

import { DayPicker, DayPickerProps } from 'react-day-picker';
import { ko } from 'react-day-picker/locale';
import 'react-day-picker/style.css';

import { DatePickerProps } from '@/types/day-picker';
import * as S from './DayPicker.styles';

const DatePicker = ({ mode, selected, onSelect }: DatePickerProps) => {
  const [month, setMonth] = useState<Date>(new Date());

  const formatters = {
    formatCaption: (date: Date) => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      return `${year}년 ${month}월`;
    },
  };

  const modifiersStyles = {
    sunday: { color: 'var(--color-danger)' },
    saturday: { color: 'var(--color-primary）' },
  };

  const modifiers = {
    sunday: (date: Date) => date.getDay() === 0,
    saturday: (date: Date) => date.getDay() === 6,
  };

  const dayPickerProps = {
    mode,
    selected,
    onSelect,
    month,
    onMonthChange: setMonth,
    locale: ko,
    formatters,
    modifiers,
    modifiersStyles,
    showOutsideDays: true,
  } as DayPickerProps;

  return (
    <S.CalendarWrapper $mode={mode}>
      <DayPicker {...dayPickerProps} />
    </S.CalendarWrapper>
  );
};

export default DatePicker;

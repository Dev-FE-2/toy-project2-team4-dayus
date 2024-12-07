import { useState, useRef, useEffect } from 'react';

import DatePicker from '@/components/ui/DayPicker';
import LabeledBox from '@/components/ui/Label/LabeledBox';
import * as S from './SingleDayPicker.styles';
import { formatDate } from '@/utils/formatDate';

type SingleDayPickerProps = {
  id: string;
  text: string;
};

const SingleDayPicker = ({ id, text }: SingleDayPickerProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <S.Wrapper ref={wrapperRef}>
      <LabeledBox id={id} text={text}>
        <S.StyledContainer>
          <S.DayPickerInput
            value={formatDate(date)}
            readOnly
            onClick={() => setIsOpen(true)}
          />
          <S.CalendarIcon size={18} />
        </S.StyledContainer>
      </LabeledBox>

      <S.CalendarContainer $isOpen={isOpen}>
        <DatePicker
          mode="single"
          selected={date}
          onSelect={newDate => {
            if (newDate) {
              setDate(newDate);
              setIsOpen(false);
            }
          }}
        />
      </S.CalendarContainer>
    </S.Wrapper>
  );
};

export default SingleDayPicker;

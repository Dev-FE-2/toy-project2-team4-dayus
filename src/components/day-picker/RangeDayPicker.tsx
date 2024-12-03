import { useState, useRef, useEffect } from 'react';

import { DateRange } from 'react-day-picker';
import { FaRegCalendarCheck } from 'react-icons/fa';

import DatePicker from '@/components/ui/DayPicker';
import Button from '@/components/ui/Button/Button';
import * as S from './RangeDayPicker.styles';
import { formatDate } from '@/utils/formatDate';

const RangeDayPicker = () => {
  const [dateRange, setDateRange] = useState<DateRange>();
  const [tempRange, setTempRange] = useState<DateRange>();
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

  const handleConfirm = () => {
    if (tempRange) {
      setDateRange(tempRange);
      setIsOpen(false);
      setTempRange(undefined);
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    setTempRange(undefined);
  };

  const handleInitiate = () => {
    setDateRange(undefined);
    setTempRange(undefined);
  };

  return (
    <S.Container ref={wrapperRef}>
      <S.DateDisplay tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        <S.DateBox>
          <S.DateLabel>시작 날짜</S.DateLabel>
          {dateRange?.from ? (
            <S.DateValue>{formatDate(dateRange.from)}</S.DateValue>
          ) : (
            <S.EmptyDateValue>날짜 선택</S.EmptyDateValue>
          )}
        </S.DateBox>
        <S.DateBox>
          <S.DateLabel>종료 날짜</S.DateLabel>
          {dateRange?.to ? (
            <S.DateValue>{formatDate(dateRange.to)}</S.DateValue>
          ) : (
            <S.EmptyDateValue>날짜 선택</S.EmptyDateValue>
          )}
        </S.DateBox>
        <S.IconWrapper>
          <FaRegCalendarCheck size={18} />
        </S.IconWrapper>
      </S.DateDisplay>

      <S.CalendarContainer $isOpen={isOpen}>
        <DatePicker
          mode="range"
          selected={tempRange || dateRange}
          onSelect={setTempRange}
        />
        <S.ButtonContainer>
          <Button
            onClick={handleInitiate}
            $variant="danger"
            $size="sm"
            $radius="lg"
          >
            초기화
          </Button>
          <S.ButtonWrapper>
            <Button
              onClick={handleCancel}
              $variant="secondary"
              $size="sm"
              $radius="lg"
            >
              취소
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={!tempRange?.from || !tempRange?.to}
              $variant="success"
              $size="sm"
              $radius="lg"
            >
              확인
            </Button>
          </S.ButtonWrapper>
        </S.ButtonContainer>
      </S.CalendarContainer>
    </S.Container>
  );
};

export default RangeDayPicker;

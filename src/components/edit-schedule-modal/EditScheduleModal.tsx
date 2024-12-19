import { useState } from 'react';

import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { DateRange } from 'react-day-picker';

import * as S from './EditScheduleModal.styles';
import Input from '../ui/input';
import Button from '../ui/button/Button';
import Textarea from '../ui/textarea';
import LabeledBox from '../ui/label/LabeledBox';
import ColorPicker from '../color-picker/ColorPicker';
import { IEventList } from '@/types/calendar';
import { EditScheduleModalProps } from '@/types/schedule';
import { useDebounce } from '@/hooks/useDebounce';
import { useCalendarActions } from '@/hooks/useCalendarActions';
import { RootState } from '@/store';
import { calendarActions } from '@/store/slices/calendarSlice';

const EditScheduleModal = ({
  schedule,
  closeModal,
}: EditScheduleModalProps) => {
  const [title, setTitle] = useState<string>(String(schedule.title));
  const [memo, setMemo] = useState<string>(schedule.memo || '');
  const [color, setColor] = useState(schedule.color);
  const [dateRange, setDateRange] = useState<DateRange>({
    from: dayjs(schedule.start).toDate(),
    to: dayjs(schedule.end).toDate(),
  });

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const { updateEvent } = useCalendarActions();

  const debouncedTitle = useDebounce(title, 300);
  const debouncedMemo = useDebounce(memo, 300);

  const handleSubmit = async () => {
    if (!dateRange.from || !dateRange.to) return;

    const updatedSchedule: Partial<IEventList> = {
      title: debouncedTitle,
      memo: debouncedMemo,
      start: dateRange.from,
      end: dateRange.to,
      color,
    };

    try {
      await updateEvent(user, schedule.eventId, updatedSchedule);
      dispatch(calendarActions.setEditingEvent(null));
      closeModal();
    } catch {
      dispatch(calendarActions.setError('일정 수정에 실패했어요!'));
    }
  };

  return (
    <S.Container>
      <div className="title-box">
        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="일정 제목을 입력해 주세요."
        />
        <ColorPicker initialColor={color} onColorChange={setColor} />
      </div>
      <LabeledBox id="event-day-picker" text="기간 설정">
        <S.StyledRangeDayPicker
          initialRange={dateRange}
          onRangeChange={setDateRange}
        />
      </LabeledBox>
      <LabeledBox id="event_content" text="메모">
        <Textarea
          value={memo}
          onChange={e => setMemo(e.target.value)}
          placeholder="메모를 입력해 주세요."
          height="8rem"
        />
      </LabeledBox>
      <Button $fullWidth onClick={handleSubmit}>
        일정 수정하기
      </Button>
    </S.Container>
  );
};

export default EditScheduleModal;

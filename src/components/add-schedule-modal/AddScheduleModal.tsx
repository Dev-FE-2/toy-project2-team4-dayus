import { useState } from 'react';

import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { DateRange } from 'react-day-picker';

import * as S from './AddScheduleModal.style';
import Input from '../ui/input';
import Button from '../ui/button/Button';
import Spinner from '../ui/spinner';
import Textarea from '../ui/textarea';
import LabeledBox from '../ui/label/LabeledBox';
import ColorPicker from '../color-picker/ColorPicker';
import { getRandomString } from '@/utils/getRandomString';
import { useDebounce } from '@/hooks/useDebounce';
import { useToggleModal } from '@/hooks/useToggleModal';
import { useCalendarActions } from '@/hooks/useCalendarActions';
import { calendarActions } from '@/store/slices/calendarSlice';
import { RootState } from '@/store';
import { IEventList } from '@/types/calendar';
import { IAddScheduleModalProps } from '@/types/schedule';
import { ADD_SCHEDULE_MODAL_ID, arrEventColor } from '@/constants/constant';

const AddScheduleModal = ({ selectedDate }: IAddScheduleModalProps) => {
  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');
  const [color, setColor] = useState(arrEventColor[0]);
  const [dateRange, setDateRange] = useState<DateRange>({
    from: dayjs(selectedDate).toDate(),
    to: dayjs(selectedDate).toDate(),
  });
  const [submitLoading, setsubmitLoading] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const { addEvent } = useCalendarActions();

  const { closeIdModal } = useToggleModal({
    modalId: ADD_SCHEDULE_MODAL_ID,
  });

  const debouncedTitle = useDebounce(title, 300);
  const debouncedMemo = useDebounce(memo, 300);

  const handleSubmit = async () => {
    if (!dateRange.from || !dateRange.to) {
      alert('날짜를 선택해 주세요.');
      return;
    }

    setsubmitLoading(true);

    // 무작위 문자열로 id 생성
    const eventId = getRandomString(20);

    const addedSchedule: IEventList = {
      eventId,
      title: debouncedTitle || '내 일정',
      memo: debouncedMemo,
      start: dateRange.from,
      end: dateRange.to,
      color,
    };

    try {
      await addEvent(user, addedSchedule);
      closeIdModal();
    } catch {
      dispatch(calendarActions.setError('일정 추가에 실패했어요.'));
    } finally {
      setsubmitLoading(false);
    }
  };

  return (
    <>
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
          {submitLoading ? '일정 등록 중...' : '일정 등록하기'}
        </Button>
      </S.Container>
      {submitLoading && (
        <S.Dimm>
          <Spinner />
        </S.Dimm>
      )}
    </>
  );
};

export default AddScheduleModal;

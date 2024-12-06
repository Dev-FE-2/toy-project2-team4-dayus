import { useState } from 'react';

import { GoTrash } from 'react-icons/go';

import * as S from './ScheduleItem.styles';
import Button from '@/components/ui/Button/Button';
import { ScheduleItemProps } from '@/types/schedule';
import { formatDateRange } from '@/utils/formatDate';

const ScheduleItem = ({ schedule, onDelete }: ScheduleItemProps) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  if (!schedule) return null;

  const handleDelete = () => {
    onDelete(schedule.eventId);
    setShowDeleteButton(false);
  };

  const handleCancel = () => {
    setShowDeleteButton(false);
  };

  const toggleTrashButton = () => {
    setShowDeleteButton(prev => !prev);
  };

  return (
    <S.ScheduleItemWrapper>
      <S.ScheduleItem>
        <S.ScheduleInfo>
          <S.ColorDot $bgColor={schedule.color.bgColor} />
          <S.ScheduleText>
            <S.Title>{schedule.title}</S.Title>
            <S.Date>
              {schedule.start &&
                schedule.end &&
                formatDateRange(schedule.start, schedule.end)}
            </S.Date>
          </S.ScheduleText>
        </S.ScheduleInfo>

        <S.DeleteButton onClick={toggleTrashButton}>
          <GoTrash size={24} />
        </S.DeleteButton>
      </S.ScheduleItem>

      <S.DeleteConfirmation $show={showDeleteButton}>
        <Button onClick={handleDelete} $variant="danger" $size="sm">
          삭제하기
        </Button>
        <Button onClick={handleCancel} $variant="secondary" $size="sm">
          취소
        </Button>
      </S.DeleteConfirmation>
    </S.ScheduleItemWrapper>
  );
};

export default ScheduleItem;

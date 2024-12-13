import { useState } from 'react';

import dayjs from 'dayjs';
import { GoTrash } from 'react-icons/go';

import * as S from './ScheduleItem.styles';
import Button from '@/components/ui/Button/Button';
import { ScheduleItemProps } from '@/types/schedule';
import { formatDate } from '@/utils/formatDate';
import { compareDateRange } from '@/utils/compareDateRange';
import { useToggleModal } from '@/hooks/useToggleModal';
import { EDIT_SCHEDULE_MODAL_ID } from '@/constants/constant';

const ScheduleItem = ({
  schedule,
  onDelete,
  onEditSchedule,
}: ScheduleItemProps) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const { openIdModal } = useToggleModal({ modalId: EDIT_SCHEDULE_MODAL_ID });

  if (!schedule) return null;

  const isWorkSchedule: boolean =
    'isWorkSchedule' in schedule && !!schedule.isWorkSchedule;

  const handleDelete = () => {
    if (isWorkSchedule) return;
    onDelete(schedule.eventId);
    setShowDeleteButton(false);
  };

  const handleCancel = () => {
    setShowDeleteButton(false);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isWorkSchedule) return;
    onEditSchedule(schedule);
    openIdModal();
  };

  const toggleTrashButton = (event: React.MouseEvent) => {
    if (isWorkSchedule) return;
    setShowDeleteButton(prev => !prev);
    event.stopPropagation();
  };

  const dates = compareDateRange(
    dayjs(schedule.start).toDate(),
    dayjs(schedule.end).toDate(),
  );

  const formattedDate =
    dates.start === dates.end
      ? formatDate(dates.start)
      : `${formatDate(dates.start)} - ${formatDate(dates.end)}`;

  return (
    <>
      <S.ScheduleItemWrapper>
        <S.ScheduleItem onClick={handleEdit} $isWorkSchedule={true}>
          <S.ScheduleInfo>
            <S.ColorDot $bgColor={schedule.color.bgColor} />
            <S.ScheduleText>
              <S.Title>
                {schedule.title}
                {isWorkSchedule && ' (근무)'}
              </S.Title>
              <S.Date>{formattedDate}</S.Date>
            </S.ScheduleText>
          </S.ScheduleInfo>

          {!isWorkSchedule && (
            <S.DeleteButton onClick={toggleTrashButton}>
              <GoTrash size={24} />
            </S.DeleteButton>
          )}
        </S.ScheduleItem>

        {!isWorkSchedule && (
          <S.DeleteConfirmation $show={showDeleteButton}>
            <Button onClick={handleDelete} $variant="danger" $size="sm">
              삭제하기
            </Button>
            <Button onClick={handleCancel} $variant="secondary" $size="sm">
              취소
            </Button>
          </S.DeleteConfirmation>
        )}
      </S.ScheduleItemWrapper>
    </>
  );
};

export default ScheduleItem;

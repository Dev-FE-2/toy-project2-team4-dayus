import { useState } from 'react';

import dayjs from 'dayjs';
import { GoTrash } from 'react-icons/go';

import * as S from './ScheduleItem.styles';
import Button from '@/components/ui/Button/Button';
import ModalFull from '@/components/ui/ModalFull';
import EditScheduleModal from '@/components/edit-schedule-modal/EditScheduleModal';
import { ScheduleItemProps } from '@/types/schedule';
import { IEventList } from '@/types/calendar';
import { formatDate } from '@/utils/formatDate';
import { compareDateRange } from '@/utils/compareDateRange';
import { useToggleModal } from '@/hooks/useToggleModal';
import { EDIT_SCHEDULE_MODAL_ID } from '@/constants/constant';

const ScheduleItem = ({ schedule, onDelete, onEdit }: ScheduleItemProps) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const { isOpen, openIdModal, closeIdModal } = useToggleModal({
    modalId: EDIT_SCHEDULE_MODAL_ID,
  });

  if (!schedule) return null;

  const handleDelete = () => {
    onDelete(schedule.eventId);
    setShowDeleteButton(false);
  };

  const handleCancel = () => {
    setShowDeleteButton(false);
  };

  const toggleTrashButton = (event: React.MouseEvent) => {
    setShowDeleteButton(prev => !prev);
    event.stopPropagation();
  };

  const handleEdit = (
    eventId: string,
    updatedSchedule: Partial<IEventList>,
  ) => {
    onEdit(eventId, updatedSchedule);
    closeIdModal();
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
        <S.ScheduleItem onClick={openIdModal}>
          <S.ScheduleInfo>
            <S.ColorDot $bgColor={schedule.color.bgColor} />
            <S.ScheduleText>
              <S.Title>{schedule.title}</S.Title>
              <S.Date>{formattedDate}</S.Date>
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

      <ModalFull
        id={EDIT_SCHEDULE_MODAL_ID}
        isOpen={isOpen}
        navText="일정 수정"
      >
        <EditScheduleModal schedule={schedule} onEdit={handleEdit} />
      </ModalFull>
    </>
  );
};

export default ScheduleItem;

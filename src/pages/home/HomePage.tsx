import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from './HomePage.style';
import ModalFull from '@/components/ui/ModalFull';
import MainCalendar from '@/components/calendar/MainCalendar';
import AddScheduleModal from '@/components/add-schedule-modal/AddScheduleModal';
import EditScheduleModal from '@/components/edit-schedule-modal/EditScheduleModal';
import { useToggleModal } from '@/hooks/useToggleModal';
import { useCalendarEvents } from '@/hooks/useCalendarEvents';
import {
  ADD_SCHEDULE_MODAL_ID,
  EDIT_SCHEDULE_MODAL_ID,
} from '@/constants/constant';
import { IEventList } from '@/types/calendar';

const HomePage = () => {
  const [selectedSchedule, setSelectedSchedule] = useState<IEventList | null>(
    null,
  );
  const navigate = useNavigate();

  const { isOpen: isAddModalOpen } = useToggleModal({
    modalId: ADD_SCHEDULE_MODAL_ID,
  });
  const { isOpen: isEditModalOpen, closeIdModal: closeEditModal } =
    useToggleModal({
      modalId: EDIT_SCHEDULE_MODAL_ID,
    });
  const {
    handleDateSelect,
    handleDelete,
    handleEdit,
    processedEvents,
    selectedEvents,
  } = useCalendarEvents();

  const handleEditSchedule = (schedule: IEventList) => {
    setSelectedSchedule(schedule);
  };

  const handleEditing = (
    eventId: string,
    updatedSchedule: Partial<IEventList>,
  ) => {
    handleEdit(eventId, updatedSchedule);
    closeEditModal();
    navigate(-1);
    setSelectedSchedule(null);
  };

  return (
    <S.Container>
      <MainCalendar
        processedEvents={processedEvents}
        selectedEvents={selectedEvents}
        onEditSchedule={handleEditSchedule}
        onDateSelect={handleDateSelect}
        onDelete={handleDelete}
      />

      <ModalFull
        id={ADD_SCHEDULE_MODAL_ID}
        isOpen={isAddModalOpen}
        navText="일정 추가"
      >
        <AddScheduleModal />
      </ModalFull>
      <ModalFull
        id={EDIT_SCHEDULE_MODAL_ID}
        isOpen={isEditModalOpen}
        navText="일정 수정"
      >
        <EditScheduleModal
          schedule={selectedSchedule!}
          onEdit={handleEditing}
        />
      </ModalFull>
    </S.Container>
  );
};

export default HomePage;

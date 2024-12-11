import { useMemo, useState } from 'react';

import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import * as S from './MainCalendar.style';
import Modal from '../ui/Modal';
import ModalFull from '../ui/ModalFull';
import EditScheduleModal from '../edit-schedule-modal/EditScheduleModal';
import ScheduleList from '../schedule/schedule-list/ScheduleList';
import CustomToolbar from './CustomToolbar';
import { IEventList } from '@/types/calendar';
import { useCalendarEvents } from '@/hooks/useCalendarEvents';
import { useToggleModal } from '@/hooks/useToggleModal';
import { EDIT_SCHEDULE_MODAL_ID } from '@/constants/constant';

dayjs.locale('ko');
const localizer = dayjsLocalizer(dayjs);

const MainCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState<IEventList | null>(
    null,
  );

  const { isOpen, openIdModal, closeIdModal } = useToggleModal({
    modalId: EDIT_SCHEDULE_MODAL_ID,
  });
  const {
    handleDateSelect,
    handleDelete,
    handleEdit,
    processedEvents,
    selectedEvents,
  } = useCalendarEvents();

  const components = useMemo(
    () => ({
      toolbar: CustomToolbar,
    }),
    [],
  );

  const eventStyleGetter = (event: IEventList) => ({
    style: {
      backgroundColor: event.color.bgColor,
      color: event.color.fontColor,
    },
  });

  const handleSelectCell = (cellInfo: { start: Date; end: Date }) => {
    handleDateSelect(cellInfo);
    setIsModalOpen(true);
  };

  const handleSelectEvent = (event: IEventList) => {
    handleDateSelect({ start: event.start!, end: event.end! });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (schedule: IEventList) => {
    setCurrentSchedule(schedule);
    openIdModal();
  };

  const handleEditSchedule = (
    eventId: string,
    updatedSchedule: Partial<IEventList>,
  ) => {
    handleEdit(eventId, updatedSchedule);
    closeIdModal();
    setCurrentSchedule(null);
  };

  return (
    <S.Container>
      <Calendar
        localizer={localizer}
        events={processedEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month']}
        components={components}
        eventPropGetter={eventStyleGetter}
        selectable={true}
        onSelectSlot={handleSelectCell}
        onSelectEvent={handleSelectEvent}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ScheduleList
          schedules={selectedEvents}
          onDelete={handleDelete}
          onOpenEditModal={handleOpenEditModal}
        />
      </Modal>

      <ModalFull
        id={EDIT_SCHEDULE_MODAL_ID}
        isOpen={isOpen}
        navText="일정 수정"
      >
        <EditScheduleModal
          schedule={currentSchedule!}
          onEdit={handleEditSchedule}
        />
      </ModalFull>
    </S.Container>
  );
};

export default MainCalendar;

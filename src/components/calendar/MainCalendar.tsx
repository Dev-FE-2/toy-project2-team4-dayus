import { useMemo, useState } from 'react';

import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import * as S from './MainCalendar.style';
import Modal from '../ui/Modal';
import ScheduleList from '../schedule/schedule-list/ScheduleList';
import CustomToolbar from './CustomToolbar';
import { IEventList, IMainCalendarProps } from '@/types/calendar';

dayjs.locale('ko');
const localizer = dayjsLocalizer(dayjs);

const MainCalendar = ({
  processedEvents,
  selectedEvents,
  setSelectedDate,
  onEditSchedule,
  onDateSelect,
  onDelete,
}: IMainCalendarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    onDateSelect(cellInfo);
    setSelectedDate(cellInfo.start);
    setIsModalOpen(true);
  };

  const handleSelectEvent = (event: IEventList) => {
    onDateSelect({ start: event.start!, end: event.end! });
    setIsModalOpen(true);
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
          onDelete={onDelete}
          onEditSchedule={onEditSchedule}
        />
      </Modal>
    </S.Container>
  );
};

export default MainCalendar;

import { useMemo, useState } from 'react';

import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import * as S from './MainCalendar.style';
import Modal from '../ui/Modal';
import ScheduleList from '../schedule/schedule-list/ScheduleList';
import CustomToolbar from './CustomToolbar';
import { IEventList } from '@/types/calendar';
import { Schedule } from '@/types/schedule';
import { useCalendarEvents } from '@/hooks/useCalendarEvents';

dayjs.locale('ko');
const localizer = dayjsLocalizer(dayjs);

const MainCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    handleDateSelect,
    handleDelete,
    formatDateRange,
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

  const convertEventsToSchedules = (events: IEventList[]): Schedule[] => {
    return events.map(event => ({
      id: String(event.color.id),
      scheduleTitle: String(event.title),
      scheduleDate:
        event.start && event.end ? formatDateRange(event.start, event.end) : '',
      color: event.color.bgColor,
    }));
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
        onSelectEvent={handleSelectCell}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ScheduleList
          schedules={convertEventsToSchedules(selectedEvents)}
          onDelete={handleDelete}
        />
      </Modal>
    </S.Container>
  );
};

export default MainCalendar;

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
import { eventList } from '@/mocks/data/calendar';
import { Schedule } from '@/types/schedule';
import { formatDate } from '@/utils/formatDate';

dayjs.locale('ko');
const localizer = dayjsLocalizer(dayjs);

const MainCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<IEventList[]>([]);

  // 이벤트 데이터 가공
  const processedEvents = useMemo(() => {
    return eventList.map(event => ({
      ...event,
      end: dayjs(event.end).add(1, 'day').toDate(), // 이벤트 끝나는 날짜에 하루 더하기
    }));
  }, []);

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

  const formatDateRange = (start: Date, end: Date) => {
    const startDate = dayjs(start);
    const endDate = dayjs(end).subtract(1, 'day'); // 표시할 때는 다시 1일 빼기

    if (startDate.isSame(endDate, 'day')) {
      return formatDate(startDate.toDate());
    }
    return `${formatDate(startDate.toDate())} ~ ${formatDate(endDate.toDate())}`;
  };

  const handleSelectCell = (cellInfo: { start: Date; end: Date }) => {
    const selectedDay = dayjs(cellInfo.start);

    const eventsForDate = processedEvents.filter(event => {
      const eventStart = dayjs(event.start).startOf('day');
      const eventEnd = dayjs(event.end).startOf('day');
      const selectedDayStart = selectedDay.startOf('day');

      return (
        (selectedDayStart.isSame(eventStart, 'day') ||
          selectedDayStart.isAfter(eventStart, 'day')) &&
        selectedDayStart.isBefore(eventEnd, 'day')
      );
    });

    setSelectedEvents(eventsForDate);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setSelectedEvents(prev =>
      prev.filter(event => String(event.color.id) !== id),
    );
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

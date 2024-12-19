import { useMemo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import * as S from './MainCalendar.style';
import Modal from '../ui/modal';
import ScheduleList from '../schedule/schedule-list/ScheduleList';
import CustomToolbar from './CustomToolbar';
import { RootState } from '@/store';
import { calendarActions } from '@/store/slices/calendarSlice';
import { IEventList, IMainCalendarProps } from '@/types/calendar';

dayjs.locale('ko');
const localizer = dayjsLocalizer(dayjs);

const MainCalendar = ({ setSelectedDate }: IMainCalendarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const events = useSelector((state: RootState) => state.calendar.events);

  const displayEvents = useMemo(
    () =>
      events.map(event => ({
        ...event,
        end: dayjs(event.end).add(1, 'day').toDate(),
      })),
    [events],
  );

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
    const selectedDay = dayjs(cellInfo.start).startOf('day');

    const eventForDate = events.filter(event => {
      const eventStart = dayjs(event.start).startOf('day');
      const eventEnd = dayjs(event.end).startOf('day');

      return (
        selectedDay.isSame(eventStart) ||
        selectedDay.isSame(eventEnd) ||
        (selectedDay.isAfter(eventStart) && selectedDay.isBefore(eventEnd))
      );
    });

    dispatch(calendarActions.setSelectedEvents(eventForDate));
    setSelectedDate(cellInfo.start);
    setIsModalOpen(true);
  };

  const handleSelectEvent = (event: IEventList) => {
    const originalEvent = events.find(e => e.eventId === event.eventId);
    if (originalEvent) {
      handleSelectCell({
        start: originalEvent.start!,
        end: originalEvent.end!,
      });
    }
  };

  return (
    <S.Container>
      <Calendar
        localizer={localizer}
        events={displayEvents!}
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
        <ScheduleList />
      </Modal>
    </S.Container>
  );
};

export default MainCalendar;

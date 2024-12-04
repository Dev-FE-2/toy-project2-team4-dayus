import * as S from './MainCalendar.style';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import { useMemo } from 'react';
import { CustomToolbarProps, IEventList } from '@/types/calendar';
import { eventList } from '@/mocks/data/calendar';

dayjs.locale('ko');
const localizer = dayjsLocalizer(dayjs);

// onSelectSlot: https://jquense.github.io/react-big-calendar/examples/index.html?path=/docs/props--on-select-slot

const CustomToolbar = (props: CustomToolbarProps) => {
  const { label, onNavigate } = props;

  const [month, year] = label.split(' ');
  const calLabel = `${year}년 ${month}`;

  const buttonStyle = {
    color: 'var(--color-main)',
    size: 30,
  };

  return (
    <S.CalendarHeader>
      <S.CalendarHeaderInner>
        <S.NowMonthLabel>{calLabel}</S.NowMonthLabel>
        <button type="button" onClick={() => onNavigate('PREV')}>
          <IoIosArrowDropleftCircle {...buttonStyle} />
        </button>
        <button type="button" onClick={() => onNavigate('NEXT')}>
          <IoIosArrowDroprightCircle {...buttonStyle} />
        </button>
      </S.CalendarHeaderInner>
      <S.TodayButton type="button" onClick={() => onNavigate('TODAY')}>
        오늘
      </S.TodayButton>
    </S.CalendarHeader>
  );
};

const MainCalendar = () => {
  const components = useMemo(
    () => ({
      toolbar: CustomToolbar,
    }),
    [],
  );

  // (event:IEventList, start:Date, end:Date, isSelected:boolean)
  const eventStyleGetter = (event: IEventList) => {
    const style = {
      backgroundColor: event.color.bgColor,
      color: event.color.fontColor,
      borderRadius: 0,
    };
    return { style };
  };

  return (
    <S.Container>
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month']}
        components={components}
        eventPropGetter={eventStyleGetter}
      />
    </S.Container>
  );
};

export default MainCalendar;

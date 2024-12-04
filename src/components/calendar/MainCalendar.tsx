import * as S from './MainCalendar.style';
import {
  Calendar,
  dayjsLocalizer,
  Event,
  ToolbarProps,
} from 'react-big-calendar';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import { useMemo } from 'react';

type CustomToolbarProps = Pick<ToolbarProps, 'label' | 'onNavigate'>;
interface IEventList extends Event {
  color: IEventColorProps;
}
interface IEventColorProps {
  id: number;
  bgColor: string;
  fontColor: string;
}

dayjs.locale('ko');
const localizer = dayjsLocalizer(dayjs);

// onSelectSlot: https://jquense.github.io/react-big-calendar/examples/index.html?path=/docs/props--on-select-slot

const arrEventColor: IEventColorProps[] = [
  {
    id: 1,
    bgColor: '#f8f2a2',
    fontColor: '#000',
  },
  {
    id: 2,
    bgColor: '#a2a5f8',
    fontColor: '#fff',
  },
  {
    id: 3,
    bgColor: '#eaa687',
    fontColor: '#fff',
  },
  {
    id: 4,
    bgColor: '#f57897',
    fontColor: '#fff',
  },
  {
    id: 5,
    bgColor: '#584b48',
    fontColor: '#fff',
  },
  {
    id: 6,
    bgColor: '#dbF0e7',
    fontColor: '#000',
  },
  {
    id: 7,
    bgColor: '#5a5a5a',
    fontColor: '#fff',
  },
];

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

  // 임시 테스트 배열
  // end: 실제 일정 끝나는 날짜에 + 1 해서 넣어야함. 일정이 지정된 날 전날에 끝남.
  const testEventsList: IEventList[] = [
    {
      title: '일정 테스트',
      start: new Date(),
      end: new Date(),
      color: arrEventColor[0],
      // allDay: true
    },
    {
      title: '222',
      start: new Date(),
      end: new Date(2024, 11, 23),
      color: arrEventColor[6],
      // allDay: true
    },
  ];

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
        events={testEventsList}
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

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';

import * as S from './CustomToolbar.styles';
import { CustomToolbarProps } from '@/types/calendar';

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

export default CustomToolbar;

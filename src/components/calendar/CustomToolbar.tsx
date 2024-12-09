import * as S from './CustomToolbar.styles';
import { CustomToolbarProps } from '@/types/calendar';

const CustomToolbar = (props: CustomToolbarProps) => {
  const { label, onNavigate } = props;

  const [month, year] = label.split(' ');
  const calLabel = `${year}년 ${month}`;

  return (
    <S.CalendarHeader>
      <S.CalendarHeaderInner>
        <S.NowMonthLabel>{calLabel}</S.NowMonthLabel>
        <button onClick={() => onNavigate('PREV')}>
          <S.LeftArrowButton size={30} />
        </button>
        <button onClick={() => onNavigate('NEXT')}>
          <S.RightArrowButton size={30} />
        </button>
      </S.CalendarHeaderInner>
      <S.TodayButton onClick={() => onNavigate('TODAY')}>오늘</S.TodayButton>
    </S.CalendarHeader>
  );
};

export default CustomToolbar;

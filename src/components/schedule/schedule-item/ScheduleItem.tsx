import { GoTrash } from 'react-icons/go';

import * as S from './ScheduleItem.styles';
import { ScheduleItemProps } from '@/types/schedule';
import { formatDateRange } from '@/utils/formatDate';

const ScheduleItem = ({ schedule, onDelete }: ScheduleItemProps) => {
  if (!schedule) return null;

  return (
    <S.ScheduleItem>
      <S.ScheduleInfo>
        <S.ColorDot $bgColor={schedule.color.bgColor} />
        <S.ScheduleText>
          <S.Title>{schedule.title}</S.Title>
          <S.Date>
            {schedule.start &&
              schedule.end &&
              formatDateRange(schedule.start, schedule.end)}
          </S.Date>
        </S.ScheduleText>
      </S.ScheduleInfo>

      <S.DeleteButton onClick={() => onDelete(schedule.eventId)}>
        <GoTrash size={24} />
      </S.DeleteButton>
    </S.ScheduleItem>
  );
};

export default ScheduleItem;

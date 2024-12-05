import { GoTrash } from 'react-icons/go';

import * as S from './ScheduleItem.styles';
import { ScheduleItemProps } from '@/types/schedule';

const ScheduleItem = ({ schedule, onDelete }: ScheduleItemProps) => {
  if (!schedule) return null;

  return (
    <S.ScheduleItem>
      <S.ScheduleInfo>
        <S.ColorDot $bgColor={schedule.color} />
        <S.ScheduleText>
          <S.Title>{schedule.scheduleTitle}</S.Title>
          <S.Date>{schedule.scheduleDate}</S.Date>
        </S.ScheduleText>
      </S.ScheduleInfo>

      <S.DeleteButton onClick={() => onDelete(schedule.id)}>
        <GoTrash size={24} />
      </S.DeleteButton>
    </S.ScheduleItem>
  );
};

export default ScheduleItem;

import * as S from './ScheduleList.styles';
import ScheduleItem from './ScheduleItem';
import { ScheduleListProps } from '@/types/schedule';

const ScheduleList = ({ schedules = [], onDelete }: ScheduleListProps) => {
  const isEmptySchedule = schedules.length === 0;
  const headerTitle = isEmptySchedule
    ? '아직 일정이 없어요.'
    : `할 일이 ${schedules.length}개가 있어요.`;

  return (
    <S.Container>
      <S.ListContainer>
        <S.ModalTitle>{headerTitle}</S.ModalTitle>

        {isEmptySchedule ? (
          <S.NoDataContainer>
            <S.EmptyLogo />
            <S.NoDataText>일정을 추가해보아요!</S.NoDataText>
          </S.NoDataContainer>
        ) : (
          schedules.map(schedule => (
            <ScheduleItem
              key={schedule.id}
              schedule={schedule}
              onDelete={onDelete}
            />
          ))
        )}
      </S.ListContainer>

      <S.AddButtonContainer>
        <S.AddButton size={50} />
      </S.AddButtonContainer>
    </S.Container>
  );
};

export default ScheduleList;

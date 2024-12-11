import * as S from './ScheduleList.styles';
import ScheduleItem from '../schedule-item/ScheduleItem';
import { ScheduleListProps } from '@/types/schedule';
import { useToggleModal } from '@/hooks/useToggleModal';
import { ADD_SCHEDULE_MODAL_ID } from '@/constants/constant';

const ScheduleList = ({
  schedules = [],
  onDelete,
  onEditSchedule,
}: ScheduleListProps) => {
  const { toggleModal } = useToggleModal({ modalId: ADD_SCHEDULE_MODAL_ID });

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
              key={schedule.eventId}
              schedule={schedule}
              onDelete={onDelete}
              onEditSchedule={onEditSchedule}
            />
          ))
        )}
      </S.ListContainer>

      <S.AddButtonContainer>
        <S.AddButtonWrapper onClick={toggleModal}>
          <S.AddButton size={26} />
        </S.AddButtonWrapper>
      </S.AddButtonContainer>
    </S.Container>
  );
};

export default ScheduleList;

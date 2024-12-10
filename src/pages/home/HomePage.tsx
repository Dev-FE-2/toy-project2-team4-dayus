import MainCalendar from '@/components/calendar/MainCalendar';
import * as S from './HomePage.style';
import ModalFull from '@/components/ui/ModalFull';
import AddScheduleModal from '@/components/add-schedule-modal/AddScheduleModal';
import { useToggleModal } from '@/hooks/useToggleModal';
import { ADD_SCHEDULE_MODAL_ID } from '@/constants/constant';

const HomePage = () => {
  const { isOpen } = useToggleModal({ modalId: ADD_SCHEDULE_MODAL_ID });

  return (
    <S.Container>
      <MainCalendar />
      <ModalFull id="add-calendar-modal" isOpen={isOpen} navText="일정 추가">
        <AddScheduleModal />
      </ModalFull>
    </S.Container>
  );
};

export default HomePage;

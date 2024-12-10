import MainCalendar from '@/components/calendar/MainCalendar';
import * as S from './HomePage.style';
import ModalFull from '@/components/ui/ModalFull';
import AddScheduleModal from '@/components/add-schedule-modal/AddScheduleModal';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const HomePage = () => {
  const isOpen = useSelector(
    (state: RootState) => state.modal['add-schedule-modal'],
  );

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

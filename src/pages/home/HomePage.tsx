import MainCalendar from '@/components/calendar/MainCalendar';
import * as S from './HomePage.style';
import { useState } from 'react';
import ModalFull from '@/components/ui/ModalFull';
import AddScheduleModal from '@/components/add-schedule-modal/AddScheduleModal';
import Button from '@/components/ui/Button/Button';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <S.Container>
      <Button onClick={toggleModal}>Open Modal</Button>
      <MainCalendar />
      <ModalFull
        id="add-calendar-modal"
        isOpen={isOpen}
        navText="일정 추가"
        setIsOpen={setIsOpen}
      >
        <AddScheduleModal />
      </ModalFull>
    </S.Container>
  );
};

export default HomePage;

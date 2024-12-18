import { useEffect, useState, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as S from './HomePage.style';
import Spinner from '@/components/ui/Spinner';
import ModalFull from '@/components/ui/ModalFull';
import CafeEvents from '@/components/cafe-events/CafeEvents';
import MainCalendar from '@/components/calendar/MainCalendar';
import AddScheduleModal from '@/components/add-schedule-modal/AddScheduleModal';
import EditScheduleModal from '@/components/edit-schedule-modal/EditScheduleModal';
import { useToggleModal } from '@/hooks/useToggleModal';
import { useCalendarActions } from '@/hooks/useCalendarActions';
import { RootState } from '@/store';
import {
  ADD_SCHEDULE_MODAL_ID,
  EDIT_SCHEDULE_MODAL_ID,
} from '@/constants/constant';

const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user);
  const editingEvent = useSelector(
    (state: RootState) => state.calendar.editingEvent,
  );
  const isLoading = useSelector((state: RootState) => state.calendar.isLoading);

  const { fetchEvents } = useCalendarActions();

  const { isOpen: isAddModalOpen } = useToggleModal({
    modalId: ADD_SCHEDULE_MODAL_ID,
  });
  const { isOpen: isEditModalOpen, closeIdModal: closeEditModal } =
    useToggleModal({
      modalId: EDIT_SCHEDULE_MODAL_ID,
    });

  const loadEvents = useCallback(() => {
    if (user.email) {
      fetchEvents(user);
    }
  }, [user, fetchEvents]);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  return (
    <S.Container>
      {isLoading ? (
        <S.SpinnerWrapper>
          <Spinner size={40} text="일정을 불러오는 중이에요" textSize="xs" />
        </S.SpinnerWrapper>
      ) : (
        <MainCalendar setSelectedDate={setSelectedDate} />
      )}
      <CafeEvents />

      <ModalFull
        id={ADD_SCHEDULE_MODAL_ID}
        isOpen={isAddModalOpen}
        navText="일정 추가"
      >
        <AddScheduleModal selectedDate={selectedDate} />
      </ModalFull>
      <ModalFull
        id={EDIT_SCHEDULE_MODAL_ID}
        isOpen={isEditModalOpen}
        navText="일정 수정"
      >
        <EditScheduleModal
          schedule={editingEvent!}
          closeModal={() => {
            closeEditModal();
            navigate(-1);
          }}
        />
      </ModalFull>
    </S.Container>
  );
};

export default HomePage;

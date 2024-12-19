import { POST_SHIFT_MODAL_ID, SELECT_WORK_TYPE } from '@/constants/constant';
import { useToggleModal } from '@/hooks/useToggleModal';
import ModalFull from '../ui/modal-full';
import Textarea from '../ui/textarea';
import Select from '../ui/select';
import { FormEvent, useState } from 'react';
import SingleDayPicker from '../day-picker/SingleDayPicker';
import LabeledBox from '../ui/label/LabeledBox';
import * as S from './ShiftModal.styles';
import { postShiftCorrection } from '@/api/shiftApi';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ShiftModal = () => {
  const [workType, setWorkType] = useState('');
  const [workTime, setWorkTime] = useState('open');
  const [explanation, setExplanation] = useState('');
  const [date, setDate] = useState<Date>(
    new Date(new Date().setHours(0, 0, 0, 0)),
  );
  const [emptyForm, setEmptyForm] = useState(false);
  const navigate = useNavigate();

  const { isOpen, closeIdModal } = useToggleModal({
    modalId: POST_SHIFT_MODAL_ID,
  });
  const user = useSelector((state: RootState) => state.user);

  const handleWorkType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWorkType(event.target.value);
  };

  const handleWorkTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWorkTime(event.target.value);
  };

  const handleExplanation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setExplanation(event.target.value);
  };

  const handleDate = (newDate: Date) => {
    setDate(newDate);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(workType && workTime && date && explanation))
      return setEmptyForm(true);
    try {
      postShiftCorrection(workType, workTime, explanation, date, user);
      closeIdModal();
      navigate({ pathname: '/shift' });
    } catch (error) {
      navigate(-1);
      throw new Error(`근무 정정에 실패하였습니다: ${error}`);
    } finally {
      setWorkType('');
      setExplanation('');
    }
  };

  return (
    <ModalFull
      id={POST_SHIFT_MODAL_ID}
      isOpen={isOpen}
      navText="근무 정정 신청"
    >
      <S.FormContainer onSubmit={handleSubmit}>
        <LabeledBox id="work_type" text="정정 유형">
          <>
            <Select
              options={SELECT_WORK_TYPE}
              onChange={handleWorkType as () => void}
            />
            {!emptyForm ||
              (!workType && (
                <S.ShiftFormAlert>정정 유형을 선택해주세요</S.ShiftFormAlert>
              ))}
          </>
        </LabeledBox>
        <SingleDayPicker
          id="shift_date"
          text="근무 날짜"
          date={date}
          onChange={handleDate}
        />

        <LabeledBox id="work_type" text="근무 시간">
          <Select
            options={[
              { value: 'open', label: '오픈' },
              { value: 'close', label: '마감' },
            ]}
            onChange={handleWorkTime as () => void}
          />
        </LabeledBox>

        <LabeledBox id="work_type" text="상세 설명">
          <>
            <Textarea
              placeholder="근무 정정에 대한 상세한 설명을 작성해주세요."
              onChange={handleExplanation as () => void}
            />
            {!emptyForm ||
              (!explanation && (
                <S.ShiftFormAlert>
                  근무 정정에 대한 설명을 작성해주세요
                </S.ShiftFormAlert>
              ))}
          </>
        </LabeledBox>
        <S.SubmitButton>정정 신청하기</S.SubmitButton>
      </S.FormContainer>
    </ModalFull>
  );
};

export default ShiftModal;

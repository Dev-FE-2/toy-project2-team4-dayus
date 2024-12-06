import RangeDayPicker from '../day-picker/RangeDayPicker';
import Input from '../ui/Input';
import LabeledBox from '../ui/Label/LabeledBox';
import Textarea from '../ui/Textarea';
import * as S from './AddScheduleModal.style';

const AddScheduleModal = () => {
  return (
    <S.Container>
      <LabeledBox id="event_title" text="제목">
        <Input placeholder="일정 제목을 입력해 주세요." />
      </LabeledBox>
      <LabeledBox id="event_content" text="메모">
        <Textarea placeholder="메모를 입력해 주세요." height="8rem" />
      </LabeledBox>
      <RangeDayPicker />
    </S.Container>
  );
};

export default AddScheduleModal;

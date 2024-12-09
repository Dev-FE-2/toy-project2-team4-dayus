import ColorPicker from '../color-picker/ColorPicker';
import Button from '../ui/Button/Button';
import Input from '../ui/Input';
import LabeledBox from '../ui/Label/LabeledBox';
import Textarea from '../ui/Textarea';
import * as S from './AddScheduleModal.style';

const AddScheduleModal = () => {
  return (
    <S.Container>
      <div className="title-box">
        <Input placeholder="일정 제목을 입력해 주세요." />
        <ColorPicker />
      </div>
      <LabeledBox id="event-day-picker" text="기간 설정">
        <S.StyledRangeDayPicker />
      </LabeledBox>
      <LabeledBox id="event_content" text="메모">
        <Textarea placeholder="메모를 입력해 주세요." height="8rem" />
      </LabeledBox>
      <Button $fullWidth>일정 등록하기</Button>
    </S.Container>
  );
};

export default AddScheduleModal;

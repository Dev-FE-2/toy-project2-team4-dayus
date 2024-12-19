import { ProfileInfoProps } from '@/types/profile-modal';
import Input from '../ui/Input';
import * as S from './ProfileModal.styles';

const ProfileInfoItem = (props: ProfileInfoProps) => {
  const { title, name, value, onChange, disabled } = props;

  return (
    <S.ProfileInfoItem>
      <S.ProfileInfoTitle>{title}</S.ProfileInfoTitle>
      <Input
        name={name}
        disabled={disabled}
        onChange={onChange}
        value={value}
        style={{
          backgroundColor: disabled ? '#eee' : '#fff',
        }}
      />
    </S.ProfileInfoItem>
  );
};

export default ProfileInfoItem;

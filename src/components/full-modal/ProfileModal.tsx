import user from '@/assets/user.svg';
import Button from '../ui/button/Button';
import * as S from './ProfileModal.styles';
import { useToggleModal } from '@/hooks/useToggleModal';
import { EDIT_PROFILE_MODAL_ID } from '@/constants/constant';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserData, updateUserData } from '@/api/profileApi';
import { DocumentData } from 'firebase/firestore';
import { ChildProps } from '@/types/profile-modal';
import ProfileInfoItem from './ProfileInfoItem';

const ProfileModal = ({ onSendData }: ChildProps) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<DocumentData | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bankName, setBankName] = useState('');
  const [account, setAccount] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData();
      setUserData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (userData) {
      setName(userData.userName ?? '');
      setEmail(userData.email ?? '');
      setPhone(userData.phone ?? '');
      setBankName(userData.bankSn?.bankName);
      setAccount(userData.bankSn?.account);
      onSendData(userData);
    }
  }, [userData, onSendData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'phone') setPhone(value);
    else if (name === 'account') setAccount(value);
    else if (name === 'bankName') setBankName(value);
  };

  const onClick = async () => {
    const updatedData = {
      userSn: userData?.userSn,
      userName: name,
      email: email,
      phone: phone,
      bankSn: {
        bankName: bankName,
        account: account,
      },
    };
    setUserData(updatedData);
    await updateUserData({ name, email, phone, bankName, account });
    closeIdModal();
    navigate(-1);
  };

  const { closeIdModal } = useToggleModal({
    modalId: EDIT_PROFILE_MODAL_ID,
  });
  return (
    <S.ProfileWrapper>
      <S.ProfileHeader>
        <img src={user} alt="" width="98" />
        <S.ProfileHeaderName>{userData?.userName}</S.ProfileHeaderName>
        <S.ProfileHeaderLocation>{userData?.location}</S.ProfileHeaderLocation>
      </S.ProfileHeader>
      <S.ProfileInfo>
        <S.ProfileInfoUl>
          <ProfileInfoItem
            title="사번"
            name=""
            value={userData?.userSn}
            disabled={true}
            onChange={handleInputChange}
          />
          <ProfileInfoItem
            title="이름"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          <ProfileInfoItem
            title="이메일"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <ProfileInfoItem
            title="연락처"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
          <ProfileInfoItem
            title="은행"
            name="bankName"
            value={bankName}
            onChange={handleInputChange}
          />
          <ProfileInfoItem
            title="계좌번호"
            name="account"
            value={account}
            onChange={handleInputChange}
          />
        </S.ProfileInfoUl>
      </S.ProfileInfo>
      <S.ProfileButtons>
        <Button $fullWidth onClick={onClick}>
          수정 완료
        </Button>
      </S.ProfileButtons>
    </S.ProfileWrapper>
  );
};

export default ProfileModal;

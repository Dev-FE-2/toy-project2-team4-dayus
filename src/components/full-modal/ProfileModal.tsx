import user from '@/assets/user.svg';
import Button from '../ui/Button/Button';
import * as S from './ProfileModal.styles';
import { useToggleModal } from '@/hooks/useToggleModal';
import { EDIT_PROFILE_MODAL_ID } from '@/constants/constant';
import Input from '../ui/Input';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserData, updateUserData } from '@/api/profileApi';
import { DocumentData } from 'firebase/firestore';
import { ChildProps } from '@/types/profile-modal';

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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'account') {
      setAccount(value);
    } else if (name === 'bankName') {
      setBankName(value);
    }
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
        <S.ProfileHeaderName>홍길동</S.ProfileHeaderName>
        <S.ProfileHeaderLocation>강남점</S.ProfileHeaderLocation>
      </S.ProfileHeader>
      <S.ProfileInfo>
        <S.ProfileInfoUl>
          <S.ProfileInfoItem>
            <S.ProfileInfoTitle>사번</S.ProfileInfoTitle>
            <Input
              disabled
              style={{ backgroundColor: '#eee' }}
              value={userData?.userSn}
            />
          </S.ProfileInfoItem>
          <S.ProfileInfoItem>
            <S.ProfileInfoTitle>이름</S.ProfileInfoTitle>
            <Input onChange={onChange} value={name} name="name" />
          </S.ProfileInfoItem>
          <S.ProfileInfoItem>
            <S.ProfileInfoTitle>이메일</S.ProfileInfoTitle>
            <Input onChange={onChange} value={email} name="email" />
          </S.ProfileInfoItem>
          <S.ProfileInfoItem>
            <S.ProfileInfoTitle>연락처</S.ProfileInfoTitle>
            <Input onChange={onChange} value={phone} name="phone" />
          </S.ProfileInfoItem>
          <S.ProfileInfoItem>
            <S.ProfileInfoTitle>은행</S.ProfileInfoTitle>
            <Input onChange={onChange} value={bankName} name="bankName" />
          </S.ProfileInfoItem>
          <S.ProfileInfoItem>
            <S.ProfileInfoTitle>계좌번호</S.ProfileInfoTitle>
            <Input onChange={onChange} value={account} name="account" />
          </S.ProfileInfoItem>
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

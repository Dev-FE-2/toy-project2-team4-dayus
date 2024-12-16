import userSvg from '@/assets/user.svg';
import Button from '@/components/ui/Button/Button';
import * as S from './ProfilePage.styles';
import ModalFull from '@/components/ui/ModalFull';
import { useToggleModal } from '@/hooks/useToggleModal';
import ProfileModal from '@/components/full-modal/ProfileModal';
import { auth } from '@/server/firebase/auth';
import { EDIT_PROFILE_MODAL_ID } from '@/constants/constant';
import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { fetchUserData } from '@/api/profileApi';

const ProfilePage = () => {
  const [userData, setUserData] = useState<DocumentData | null>(null);
  const { isOpen, openIdModal } = useToggleModal({
    modalId: EDIT_PROFILE_MODAL_ID,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDataFromChild = (data: DocumentData | null) => {
    setUserData(data);
  };

  return (
    <>
      <S.ProfileWrapper>
        <S.ProfileHeader>
          <img src={userSvg} alt="" width="98" />
          <S.ProfileHeaderName>{userData?.userName}</S.ProfileHeaderName>
          <S.ProfileHeaderLocation>강남점</S.ProfileHeaderLocation>
        </S.ProfileHeader>
        <S.ProfileInfo>
          <S.ProfileInfoUl>
            <S.ProfileInfoItem>
              <S.ProfileInfoTitle>사번</S.ProfileInfoTitle>
              <span className="profile-info-item-content">
                {userData?.userSn}
              </span>
            </S.ProfileInfoItem>
            <S.ProfileInfoItem>
              <S.ProfileInfoTitle>이름</S.ProfileInfoTitle>
              <span className="profile-info-item-content">
                {userData?.userName}
              </span>
            </S.ProfileInfoItem>
            <S.ProfileInfoItem>
              <S.ProfileInfoTitle>이메일</S.ProfileInfoTitle>
              <span className="profile-info-item-content">
                {userData?.email}
              </span>
            </S.ProfileInfoItem>
            <S.ProfileInfoItem>
              <S.ProfileInfoTitle>연락처</S.ProfileInfoTitle>
              <span className="profile-info-item-content">
                {userData?.phone}
              </span>
            </S.ProfileInfoItem>
            <S.ProfileInfoItem>
              <S.ProfileInfoTitle>계좌번호</S.ProfileInfoTitle>
              <span className="profile-info-item-content">
                {userData?.bankSn.bankName + ' '}
                {userData?.bankSn.account}
              </span>
            </S.ProfileInfoItem>
          </S.ProfileInfoUl>
        </S.ProfileInfo>
        <S.ProfileButtons>
          <Button $fullWidth onClick={openIdModal}>
            내 정보 수정
          </Button>
          <Button
            $fullWidth
            $variant="outline"
            onClick={() => {
              auth.signOut();
            }}
          >
            로그아웃
          </Button>
        </S.ProfileButtons>
        <ModalFull
          id={EDIT_PROFILE_MODAL_ID}
          isOpen={isOpen}
          navText="내 정보 수정"
        >
          <ProfileModal onSendData={handleDataFromChild} />
        </ModalFull>
      </S.ProfileWrapper>
    </>
  );
};

export default ProfilePage;

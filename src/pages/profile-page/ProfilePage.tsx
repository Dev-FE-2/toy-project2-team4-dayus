import user from '@/assets/user.svg';
import Button from '@/components/ui/Button/Button';
import * as S from './ProfilePage.styles';

const myPage = () => {
  return (
    <>
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
              <span className="profile-info-item-content">1</span>
            </S.ProfileInfoItem>
            <S.ProfileInfoItem>
              <S.ProfileInfoTitle>이름</S.ProfileInfoTitle>
              <span className="profile-info-item-content">홍길동</span>
            </S.ProfileInfoItem>
            <S.ProfileInfoItem>
              <S.ProfileInfoTitle>이메일</S.ProfileInfoTitle>
              <span className="profile-info-item-content">
                gil_dxng@gmail.com
              </span>
            </S.ProfileInfoItem>
            <S.ProfileInfoItem>
              <S.ProfileInfoTitle>연락처</S.ProfileInfoTitle>
              <span className="profile-info-item-content">010-0000-0000</span>
            </S.ProfileInfoItem>
            <S.ProfileInfoItem>
              <S.ProfileInfoTitle>계좌번호</S.ProfileInfoTitle>
              <span className="profile-info-item-content">
                신한은행 110-123-456789
              </span>
            </S.ProfileInfoItem>
          </S.ProfileInfoUl>
        </S.ProfileInfo>
        <S.ProfileButtons>
          <Button $fullWidth>내 정보 수정</Button>
          <Button $fullWidth $variant="danger">
            로그아웃
          </Button>
        </S.ProfileButtons>
      </S.ProfileWrapper>
    </>
  );
};

export default myPage;

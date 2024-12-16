import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem var(--layout-padding);

  & > *:nth-child(n + 2) {
    margin-top: 4rem;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileHeaderName = styled.h3`
  font-size: var(--font-xl);
  font-weight: 600;
  margin-top: 0.8rem;
  margin-bottom: 0.6rem;
`;

export const ProfileHeaderLocation = styled.span`
  font-size: var(--font-base);
`;

export const ProfileInfo = styled.div`
  width: 100%;
  flex: 1;
`;

export const ProfileInfoUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ProfileInfoItem = styled.li`
  display: flex;
  align-items: center;
  font-size: var(--font-base);

  &:nth-child(n + 2) {
    margin-top: 2rem;
  }

  .profile-info-item-content {
    flex: 1 1 auto;
  }
`;

export const ProfileInfoTitle = styled.span`
  flex: 0 1 10rem;
  font-weight: 500;
`;

export const ProfileButtons = styled.div`
  width: 100%;

  & > button {
    margin-bottom: 1rem;

    &:last-child {
      margin: 0;
    }
  }
`;

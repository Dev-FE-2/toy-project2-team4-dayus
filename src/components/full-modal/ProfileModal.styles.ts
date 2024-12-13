import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const ProfileHeader = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
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
  /* flex: 1; */
  margin-bottom: 5rem;
`;

export const ProfileInfoUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ProfileInfoItem = styled.li`
  display: flex;
  align-items: center;
  font-size: var(--font-base);
  height: 4rem;
  margin: 0.5rem 0;
`;

export const ProfileInfoTitle = styled.span`
  display: inline-block;
  width: 120px;
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

import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const LoginLogoWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
export const LoginLogo = styled.img`
  width: 100%;
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > :last-child {
    margin-top: 2rem;
  }
`;

export const LoginFormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  margin-bottom: 2.8rem;

  &:last-of-type {
    margin-bottom: 1rem;
  }
`;

export const LoginLabel = styled.label`
  font-size: var(--font-lg);
`;

export const LoginFormAlert = styled.span`
  font-size: var(--font-base);
  color: tomato;
`;

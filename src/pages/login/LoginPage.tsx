import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button/Button';

const LoginPage = () => {
  return (
    <LoginWrapper>
      <LoginLogoWrapper>
        <LoginLogo src={logo}></LoginLogo>
      </LoginLogoWrapper>
      <LoginForm>
        <LoginFormItem>
          <LoginLabel htmlFor="email">이메일</LoginLabel>
          <Input placeholder="이메일을 입력해 주세요" id="email" type="text" />
        </LoginFormItem>
        <LoginFormItem>
          <LoginLabel htmlFor="password">패스워드</LoginLabel>
          <Input
            placeholder="비밀번호를 입력해 주세요"
            id="password"
            type="password"
          />
        </LoginFormItem>
        <Button $size="lg">로그인</Button>
      </LoginForm>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  position: absolute;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const LoginLogoWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const LoginLogo = styled.img`
  width: 100%;
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;

  & > :last-child {
    margin-top: 20px;
  }
`;

const LoginFormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`;

const LoginLabel = styled.label`
  font-size: var(--font-lg);
`;

export default LoginPage;

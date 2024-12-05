import { useState } from 'react';
import logo from '../../assets/logo.svg';
import * as S from './LoginPage.styles';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <S.LoginWrapper>
      <S.LoginLogoWrapper>
        <S.LoginLogo src={logo}></S.LoginLogo>
      </S.LoginLogoWrapper>
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </S.LoginWrapper>
  );
};

export default LoginPage;

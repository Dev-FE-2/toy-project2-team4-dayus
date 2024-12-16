import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import * as S from './LoginPage.styles';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  useEffect(() => {
    if (user?.uid) {
      navigate('/');
    }
  }, [user, navigate]);

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

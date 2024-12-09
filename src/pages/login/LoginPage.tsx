import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import * as S from './LoginPage.styles';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useNavigate } from 'react-router-dom';
import Spinner from '@/components/ui/Spinner';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  useEffect(() => {
    if (user !== undefined) {
      setLoading(false);

      if (user?.uid) {
        navigate('/');
      }
    }
  }, [user, navigate]);

  if (loading) {
    return <Spinner />;
  }

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

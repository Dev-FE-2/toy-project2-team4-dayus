import logo from '../../assets/logo.svg';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button/Button';
import LabeledBox from '@/components/ui/Label/LabeledBox';
import * as S from './LoginPage.styles';

const LoginPage = () => {
  return (
    <S.LoginWrapper>
      <S.LoginLogoWrapper>
        <S.LoginLogo src={logo}></S.LoginLogo>
      </S.LoginLogoWrapper>
      <S.LoginForm>
        <S.LoginFormItem>
          <LabeledBox id="email" text="이메일">
            <Input placeholder="이메일을 입력해 주세요" />
          </LabeledBox>
        </S.LoginFormItem>
        <S.LoginFormItem>
          <LabeledBox id="password" text="비밀번호">
            <Input placeholder="비밀번호를 입력해 주세요" type="password" />
          </LabeledBox>
        </S.LoginFormItem>
        <Button $size="lg">로그인</Button>
      </S.LoginForm>
    </S.LoginWrapper>
  );
};

export default LoginPage;

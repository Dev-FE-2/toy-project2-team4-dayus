import { useNavigate } from 'react-router-dom';

import * as S from './NotFound.styles';
import Button from '@/components/ui/Button/Button';
import NotFoundSvg from '@/assets/not-found.svg';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.NotFoundImg src={NotFoundSvg} alt="Not Found" />
      <S.Wrapper>
        <S.NotFoundText>존재하지 않는 페이지에요!</S.NotFoundText>
        <Button $variant="danger" onClick={() => navigate(-1)} $fullWidth>
          돌아가기
        </Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default NotFoundPage;

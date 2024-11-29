import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import * as S from './PageNav.styles';

type PageNavProps = {
  text: string;
  back?: boolean;
};

const PageNav = ({ text, back }: PageNavProps) => {
  const navigate = useNavigate();
  const onBack = () => {
    return !back || navigate(-1);
  };

  return (
    <S.PageNavBox>
      <S.PageNavButton onClick={onBack}>
        <IoChevronBack size="2.4rem" />
        <S.PageNavTitle>{text}</S.PageNavTitle>
      </S.PageNavButton>
    </S.PageNavBox>
  );
};

export default PageNav;

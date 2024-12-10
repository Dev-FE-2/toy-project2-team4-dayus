import { IoChevronBack } from 'react-icons/io5';
import * as S from './PageNav.styles';

type PageNavProps = {
  text: string;
  onClick: () => void;
  // back?: boolean;
};

const PageNav = ({ text, onClick }: PageNavProps) => {
  // const navigate = useNavigate();
  // const onBack = () => {
  //   return !back || navigate(-1);
  // };

  return (
    <S.PageNavBox>
      <S.PageNavButton onClick={onClick}>
        <IoChevronBack size="2.4rem" />
        <S.PageNavTitle>{text}</S.PageNavTitle>
      </S.PageNavButton>
    </S.PageNavBox>
  );
};

export default PageNav;

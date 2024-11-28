import { useNavigate } from 'react-router-dom';
import * as S from './Tab.styles';

// type alias 선언
type TabProps = { active: 'salary' | 'shift' };

const Tab = ({ active }: TabProps) => {
  const navigate = useNavigate();

  return (
    <S.TabWrapper>
      <S.TabList>
        <S.TabItem>
          <S.TabButton
            onClick={() => navigate('/salary')}
            $active={active === 'salary'}
          >
            급여 내역
          </S.TabButton>
        </S.TabItem>
        <S.TabItem>
          <S.TabButton
            onClick={() => navigate('/shift')}
            $active={active === 'shift'}
          >
            근무 정정
          </S.TabButton>
        </S.TabItem>
      </S.TabList>
    </S.TabWrapper>
  );
};

export default Tab;

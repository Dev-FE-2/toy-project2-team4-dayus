import { useNavigate } from 'react-router-dom';
import * as S from './Tab.styles';

type TabProps = { active: 'salary' | 'shift' };

const tabs = [
  { path: '/salary', title: '급여 내역', label: 'salary' },
  { path: '/shift', title: '근무 정정', label: 'shift' },
];

const Tab = ({ active }: TabProps) => {
  const navigate = useNavigate();

  return (
    <S.TabWrapper>
      <S.TabList>
        {tabs.map(({ path, title, label }) => (
          <S.TabItem key={label}>
            <S.TabButton
              onClick={() => navigate(path)}
              $active={active === label}
            >
              {title}
            </S.TabButton>
          </S.TabItem>
        ))}
      </S.TabList>
    </S.TabWrapper>
  );
};

export default Tab;

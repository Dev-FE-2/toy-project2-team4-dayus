import * as S from './Tab.styles';
import { Dispatch, SetStateAction } from 'react';

type TabItems = {
  title: string;
  label: string;
}[];

interface ITab {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  items: TabItems;
}

const Tab = ({ selected, setSelected, items: tabs }: ITab) => (
  <S.TabWrapper>
    <S.TabList>
      {tabs.map(({ title, label }) => (
        <S.TabItem key={label}>
          <S.TabButton
            onClick={() => setSelected(label)}
            $active={selected === label}
          >
            {title}
          </S.TabButton>
        </S.TabItem>
      ))}
    </S.TabList>
  </S.TabWrapper>
);

export default Tab;

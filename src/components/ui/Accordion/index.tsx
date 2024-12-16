import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import * as S from './Accordion.styles';

interface IAccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleToggle = () => {
    return detailsRef.current && setIsOpen(detailsRef.current.open);
  };

  return (
    <S.AccordionBox>
      <S.DetailsWrapper ref={detailsRef} onToggle={handleToggle} open={isOpen}>
        <S.DetailSummary>
          {title}
          <S.ChevronIcon $isOpen={isOpen} />
        </S.DetailSummary>
        {children}
      </S.DetailsWrapper>
    </S.AccordionBox>
  );
};

export default Accordion;

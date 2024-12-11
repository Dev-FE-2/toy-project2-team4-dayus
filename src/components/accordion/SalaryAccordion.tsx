import Accordion from '../ui/Accordion';
import * as S from './SalaryAccordion.styles';
import useSalaryItem from '@/hooks/useSalaryItem';

const SalaryAccordion = () => {
  const { selectSalary } = useSalaryItem();
  return (
    <Accordion title="지난달 급여 내역">
      <S.GridWrapper>
        {selectSalary.map(item => (
          <S.GridItem key={item.id}>
            <S.GridLabel>{item.label}</S.GridLabel>
            <S.GridValue aria-label={`${item.label} ${item.value}`}>
              {item.value}
            </S.GridValue>
          </S.GridItem>
        ))}
      </S.GridWrapper>
    </Accordion>
  );
};

export default SalaryAccordion;

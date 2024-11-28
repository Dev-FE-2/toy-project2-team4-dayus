import styled from 'styled-components';

import Select from '.';
import { ILabelProps } from '@/types/select';

const LabeledSelect = ({
  id,
  className,
  children,
  selectProps = { options: [] },
  ...labelProps
}: ILabelProps) => {
  return (
    <LabeledSelectBox className={className}>
      <label htmlFor={id} {...labelProps}>
        {children}
      </label>
      <Select id={id} {...selectProps} />
    </LabeledSelectBox>
  );
};

const LabeledSelectBox = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: var(--font-base);
    margin-bottom: 0.8rem;
  }
`;

export default LabeledSelect;

import { ILabelProps } from '@/types/form';
import { cloneElement, ReactElement } from 'react';
import styled from 'styled-components';

interface ILabeledBoxProps extends ILabelProps {
  children: ReactElement;
}

const LabeledBox = ({ id, text, children, ...props }: ILabeledBoxProps) => {
  return (
    <Div>
      <label htmlFor={id} {...props}>
        {text}
      </label>
      {cloneElement(children, { id })}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: var(--font-base);
    margin-bottom: 0.8rem;
  }
`;

export default LabeledBox;

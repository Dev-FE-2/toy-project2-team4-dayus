import { ILabelProps } from '@/types/form';
import { cloneElement, ReactElement } from 'react';
import styled from 'styled-components';
import Label from '.';

interface ILabeledBoxProps extends ILabelProps {
  children: ReactElement;
}

const LabeledBox = ({ id, text, children, ...props }: ILabeledBoxProps) => {
  return (
    <Div>
      <Label id={id} text={text} {...props} />
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

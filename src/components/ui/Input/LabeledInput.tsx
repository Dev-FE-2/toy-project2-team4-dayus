import React from 'react';
import Input, { IInputProps } from '.';
import styled from 'styled-components';

interface ILabelProps extends React.ComponentProps<'label'> {
  id: string;
  className?: string;
  inputProps?: IInputProps;
}

const LabeledInput = ({
  id,
  className,
  children,
  inputProps,
  ...labelProps
}: ILabelProps) => {
  return (
    <LabeledInputBox className={className}>
      <label htmlFor={id} {...labelProps}>
        {children}
      </label>
      <Input id={id} {...inputProps} />
    </LabeledInputBox>
  );
};

const LabeledInputBox = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: var(--font-base);
    margin-bottom: 0.8rem;
  }
`;

export default LabeledInput;

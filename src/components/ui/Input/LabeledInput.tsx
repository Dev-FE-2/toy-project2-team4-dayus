import Input from '.';
import styled from 'styled-components';
import { ILabelProps } from '@/types/input';

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

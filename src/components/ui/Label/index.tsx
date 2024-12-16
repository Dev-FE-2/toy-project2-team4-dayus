import { ILabelProps } from '@/types/form';

const Label = ({ id, text, ...props }: ILabelProps) => {
  return (
    <label htmlFor={id} {...props}>
      {text}
    </label>
  );
};

export default Label;

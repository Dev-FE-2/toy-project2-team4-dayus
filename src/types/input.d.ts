import { ComponentProps, ComponentPropsWithRef } from 'react';

type InputValueType = string | number | string[] | undefined;

export interface IInputProps extends ComponentPropsWithRef<'input'> {
  type?: string;
  value?: InputValueType;
  isCustom?: boolean;
  onChange?: () => void;
}

export interface ILabelProps extends ComponentProps<'label'> {
  id: string;
  className?: string;
  inputProps?: IInputProps;
}

import { ComponentProps, ComponentPropsWithRef } from 'react';

type SelectValueType = string | number | string[] | undefined;

export interface ISelectProps extends ComponentPropsWithRef<'select'> {
  width?: string;
  height?: string;
  value?: SelectValueType;
  isCustom?: boolean;
  options: Array<{
    value: string | number;
    label: string;
  }>;
  onChange?: () => void;
}

export interface ILabelProps extends ComponentProps<'label'> {
  id: string;
  className?: string;
  children: React.ReactNode;
  selectProps?: Omit<ISelectProps, 'id'>;
}

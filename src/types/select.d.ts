/* eslint-disable */
import { ComponentPropsWithRef } from 'react';

type SelectValueType = string | number | string[] | undefined;

export interface ISelectProps
  extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  width?: string;
  height?: string;
  value?: SelectValueType;
  isCustom?: boolean;
  options: Array<{
    value: string | number;
    label: string;
  }>;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

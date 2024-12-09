/* eslint-disable */
import { ComponentPropsWithRef, MouseEvent } from 'react';

export interface IColorPickerButtonProps
  extends ComponentPropsWithRef<'button'> {
  color: string;
  width?: string;
  height?: string;
  selected?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

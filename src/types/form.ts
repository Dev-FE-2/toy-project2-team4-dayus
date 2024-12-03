/*eslint-disable*/
import {
  ChangeEvent,
  ComponentProps,
  ComponentPropsWithRef,
  ReactNode,
} from 'react';

// -------- input -------- //
type InputValueType = string | number | string[] | undefined;

export interface IInputProps extends ComponentPropsWithRef<'input'> {
  type?: string;
  value?: InputValueType;
  isCustom?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
// -------- /input -------- //

// -------- textarea -------- //
type TextareaStyleType = {
  width?: string;
  height?: string;
};

export interface ITextareaProps
  extends ComponentPropsWithRef<'textarea'>,
    TextareaStyleType {
  value?: string | undefined;
  isCustom?: boolean;
  onChange?: () => void;
}
// -------- /textarea -------- //

// label
export interface ILabelProps extends ComponentProps<'label'> {
  id: string;
  text: ReactNode;
}

// -------- select -------- //
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
  onChange?: () => void;
}
// -------- /select -------- //

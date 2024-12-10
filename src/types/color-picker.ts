/* eslint-disable */
import { IEventColorProps } from './calendar';

export type ColorPickerType = {
  initialColor?: IEventColorProps;
  onColorChange?: (color: IEventColorProps) => void;
};

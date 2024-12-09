import { IColorPickerButtonProps } from '@/types/button';
import { forwardRef } from 'react';
import styled from 'styled-components';

const ColorPickerButton = forwardRef<
  HTMLButtonElement,
  IColorPickerButtonProps
>(
  (
    { color, width = '3rem', height = width, selected, onClick, ...props },
    ref,
  ) => {
    return (
      <StyledButton
        type="button"
        color={color}
        $width={width}
        $height={height}
        $selected={selected ? true : false}
        onClick={onClick}
        ref={ref}
        {...props}
      ></StyledButton>
    );
  },
);

const StyledButton = styled.button<{
  $width: string;
  $height: string;
  color: string;
  $selected: boolean;
}>`
  width: ${props => props.$width};
  height: ${props => props.$height};
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 2px solid transparent;
  ${props => props.$selected && 'border-color: #000'};
`;

export default ColorPickerButton;

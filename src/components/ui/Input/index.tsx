import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

type StyleType = {
  width?: string;
  height?: string;
};

type InputValueType = string | number | string[] | undefined;

interface IInputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    StyleType {
  type?: string;
  value?: InputValueType;
  onChange?: () => void;
  variant?: 'main';
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    { type = 'text', width, height, variant, value, onChange, ...props },
    ref,
  ) => {
    return (
      <StyledInput
        width={width}
        height={height}
        type={type}
        ref={ref}
        value={value}
        variant={variant}
        onChange={onChange}
        {...props}
      />
    );
  },
);

const mainStyle = (props: StyleType) => css`
  width: ${props.width || 'auto'};
  height: ${props.height || 'auto'};
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-base);
  font-weight: 500;
  border-radius: var(--radius-base);
  border: 1px solid var(--color-gray-border);

  &:focus,
  &:focus-visible {
    border: 1px solid var(--color-main);
  }
`;

const StyledInput = styled.input<
  Pick<IInputProps, 'width' | 'height' | 'variant'>
>`
  ${props => props.variant === 'main' && mainStyle};
`;

export default Input;

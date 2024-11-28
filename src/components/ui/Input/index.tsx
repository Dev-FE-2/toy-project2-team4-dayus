import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

interface IStyleType {
  width?: string;
  height?: string;
}

type InputValueType = string | number | string[] | undefined;

interface IInputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    IStyleType {
  id?: string;
  type?: string;
  value?: InputValueType;
  isCustom?: boolean;
  onChange?: () => void;
}

/**
 * 커스텀 attr 참고
 * @param {string} [width]
 * @param {string} [height]
 */
const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    { id, width, height, type = 'text', value, isCustom, onChange, ...props },
    ref,
  ) => {
    return (
      <>
        <StyledInput
          id={id}
          width={width}
          height={height}
          type={type}
          ref={ref}
          value={value}
          isCustom={isCustom}
          onChange={onChange}
          {...props}
        />
      </>
    );
  },
);

const mainStyle = css`
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
  Pick<IInputProps, 'width' | 'height' | 'isCustom'>
>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  ${props => !props.isCustom && mainStyle};
`;

export default Input;

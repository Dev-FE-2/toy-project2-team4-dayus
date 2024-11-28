import { forwardRef } from 'react';

import styled, { css } from 'styled-components';
import { ISelectProps } from '@/types/select';

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ width, height, isCustom, options, value, onChange, ...props }, ref) => {
    return (
      <StyledSelect
        width={width}
        height={height}
        ref={ref}
        value={value}
        isCustom={isCustom}
        onChange={onChange}
        {...props}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    );
  },
);

const mainStyle = css`
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-base);
  font-weight: 500;
  border-radius: var(--radius-base);
  border: 1px solid var(--color-gray-border);
  cursor: pointer;

  &:focus,
  &:focus-visible {
    border: 1px solid var(--color-main);
  }
`;

const StyledSelect = styled.select<
  Pick<ISelectProps, 'width' | 'height' | 'isCustom'>
>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  ${props => !props.isCustom && mainStyle};
`;

export default Select;

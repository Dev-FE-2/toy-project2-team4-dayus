import { forwardRef } from 'react';

import styled, { css } from 'styled-components';

interface IDayPickerInputProps {
  width?: string;
  height?: string;
  value: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  isCustom?: boolean;
}

const DayPickerInput = forwardRef<HTMLDivElement, IDayPickerInputProps>(
  ({ width, height, value, icon, isCustom, onClick, ...props }, ref) => {
    return (
      <Wrapper
        ref={ref}
        width={width}
        height={height}
        isCustom={isCustom}
        onClick={onClick}
        tabIndex={0}
        {...props}
      >
        <Value>{value}</Value>
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </Wrapper>
    );
  },
);

const mainStyle = css`
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-base);
  font-weight: 500;
  border-radius: var(--radius-base);
  border: 1px solid var(--color-gray-border);
  background-color: white;
  cursor: pointer;

  &:focus,
  &:focus-visible {
    border: 1px solid var(--color-main);
    outline: none;
  }
`;

const Wrapper = styled.div<
  Pick<IDayPickerInputProps, 'width' | 'height' | 'isCustom'>
>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  ${props => !props.isCustom && mainStyle};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Value = styled.span`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export default DayPickerInput;

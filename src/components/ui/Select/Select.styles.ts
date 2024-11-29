import styled, { css } from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const SelectWrapper = styled.div<{ width?: string; height?: string }>`
  position: relative;
  width: ${props => props.width || 'auto'};
`;

export const SelectButton = styled.div<{
  $isOpen: boolean;
  isCustom?: boolean;
}>`
  ${props =>
    !props.isCustom &&
    css`
      padding: var(--spacing-3) var(--spacing-4);
      font-size: var(--font-base);
      font-weight: 500;
      border-radius: var(--radius-base);
      border: 1px solid var(--color-gray-border);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover {
        background-color: var(--color-gray-100);
        transition: background-color 0.2s ease-in-out;
      }

      ${props.$isOpen &&
      css`
        border-color: var(--color-main);
      `}
    `}
`;

export const StyledArrow = styled(MdKeyboardArrowDown)<{ $isOpen: boolean }>`
  color: var(--color-gray-600);
  transition: transform 0.2s ease-in-out;
  transform: rotate(${props => (props.$isOpen ? '180deg' : '0deg')});
`;

export const OptionsWrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + var(--spacing-1));
  left: 0;
  right: 0;
  border-radius: var(--radius-base);
  border: 1px solid var(--color-gray-border);
  max-height: ${props => (props.$isOpen ? '300px' : '0')};
  opacity: ${props => (props.$isOpen ? '1' : '0')};
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  z-index: 1000;
  box-shadow: var(--shadow-md);
  pointer-events: ${props => (props.$isOpen ? 'auto' : 'none')};
`;

export const Option = styled.div<{ $isSelected: boolean }>`
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-sm);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  background-color: ${props =>
    props.$isSelected ? 'var(--color-gray-100)' : 'transparent'};

  &:hover {
    background-color: var(--color-gray-100);
  }
`;

import styled, { keyframes } from 'styled-components';

type SizeProps = {
  size: number;
};

type TextSizeProps = {
  $textSize: 'xs' | 'sm' | 'base';
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div<SizeProps>`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinnerRing = styled.div<SizeProps>`
  width: ${props => props.size * 0.7}px;
  height: ${props => props.size * 0.7}px;
  border: ${props => Math.max(props.size * 0.05, 3)}px solid transparent;
  border-radius: var(--radius-full);
  position: absolute;
  background:
    linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(45deg, transparent 25%, var(--color-main)) border-box;
  animation: ${spin} 1s linear infinite;
`;

export const Text = styled.p<TextSizeProps>`
  font-size: var(--font-${props => props.$textSize});
  font-weight: bold;
  color: var(--color-main);
  text-align: center;
  margin-top: var(--spacing-2);
`;

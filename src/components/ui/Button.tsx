import styled from 'styled-components';

type ButtonVariant =
  | 'main'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $fullWidth?: boolean;
  $width?: string;
}

const getVariantStyles = (variant: ButtonVariant = 'main') => {
  const colors = {
    main: [
      'var(--color-main)',
      'var(--color-main-hover)',
      'var(--color-white)',
    ],
    primary: [
      'var(--color-primary)',
      'var(--color-primary-hover)',
      'var(--color-white)',
    ],
    secondary: [
      'var(--color-secondary)',
      'var(--color-secondary-hover)',
      'var(--color-white)',
    ],
    success: [
      'var(--color-success)',
      'var(--color-success-hover)',
      'var(--color-white)',
    ],
    danger: [
      'var(--color-danger)',
      'var(--color-danger-hover)',
      'var(--color-white)',
    ],
    warning: [
      'var(--color-warning)',
      'var(--color-warning-hover)',
      'var(--color-black)',
    ],
    info: [
      'var(--color-info)',
      'var(--color-info-hover)',
      'var(--color-white)',
    ],
  };

  const [bgColor, hoverColor, textColor] = colors[variant];
  return `
   background-color: ${bgColor};
   color: ${textColor};
   &:hover {
     background-color: ${hoverColor};
   }
 `;
};

const getSizeStyles = (size: ButtonSize = 'md') => {
  const sizes = {
    sm: ['var(--font-sm)', 'var(--spacing-2)', 'var(--spacing-3)'],
    md: ['var(--font-base)', 'var(--spacing-3)', 'var(--spacing-4)'],
    lg: ['var(--font-lg)', 'var(--spacing-4)', 'var(--spacing-5)'],
  };

  const [fontSize, paddingY, paddingX] = sizes[size];
  return `
   font-size: ${fontSize};
   padding: ${paddingY} ${paddingX};
 `;
};

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--radius-base);
  cursor: pointer;
  transition: background-color 0.3s;
  width: ${props => {
    if (props.$fullWidth) return '100%';
    if (props.$width) return props.$width;
    return 'auto';
  }};
  ${props => getVariantStyles(props.$variant)}
  ${props => getSizeStyles(props.$size)}

 &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export { Button };

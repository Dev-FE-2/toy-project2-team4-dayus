import styled, { css } from 'styled-components';

type ButtonVariant =
  | 'main'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonRadius = 'sm' | 'base' | 'md' | 'lg' | 'full';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $radius?: ButtonRadius;
  $fullWidth?: boolean;
  $width?: string;
  $customStyle?: {
    background?: string;
    border?: string;
    padding?: string;
  };
}

const getRadiusStyles = (radius: ButtonRadius = 'base') => {
  const radiusMap = {
    sm: 'var(--radius-sm)',
    base: 'var(--radius-base)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    full: 'var(--radius-full)',
  };
  return radiusMap[radius];
};

const getVariantStyles = (variant: ButtonVariant = 'main') => {
  const colors = {
    main: [
      'var(--color-main)',
      'var(--color-main-hover)',
      'var(--color-white)',
      'none',
    ],
    primary: [
      'var(--color-primary)',
      'var(--color-primary-hover)',
      'var(--color-white)',
      'none',
    ],
    secondary: [
      'var(--color-secondary)',
      'var(--color-secondary-hover)',
      'var(--color-white)',
      'none',
    ],
    success: [
      'var(--color-success)',
      'var(--color-success-hover)',
      'var(--color-white)',
      'none',
    ],
    danger: [
      'var(--color-danger)',
      'var(--color-danger-hover)',
      'var(--color-white)',
      'none',
    ],
    warning: [
      'var(--color-warning)',
      'var(--color-warning-hover)',
      'var(--color-black)',
      'none',
    ],
    info: [
      'var(--color-info)',
      'var(--color-info-hover)',
      'var(--color-white)',
      'none',
    ],
    outline: [
      'transparent',
      'none',
      'var(--color-main)',
      '1px solid var(--color-main)',
    ],
  };

  const [bgColor, hoverColor, textColor, borderStyle] = colors[variant];
  return `
   background-color: ${bgColor};
   color: ${textColor};
   &:hover {
     background-color: ${hoverColor};
   }
  border: ${borderStyle};
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
  border-radius: ${props => getRadiusStyles(props.$radius)};
  cursor: pointer;
  transition: all 0.3s;
  width: ${props => {
    if (props.$fullWidth) return '100%';
    if (props.$width) return props.$width;
    return 'auto';
  }};

  ${props =>
    props.$customStyle
      ? css`
          background: ${props.$customStyle.background};
          border: ${props.$customStyle.border};
          padding: ${props.$customStyle.padding || '2rem'};
          aspect-ratio: 1;

          &:hover {
            filter: brightness(1.1);
          }
        `
      : css`
          border: none;
          ${getVariantStyles(props.$variant)}
          ${getSizeStyles(props.$size)}
        `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;

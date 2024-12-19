import styled from 'styled-components';
import Button from '../ui/button/Button';

export const FormContainer = styled.form`
  > *:not(:last-child) {
    margin-bottom: var(--spacing-5);
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const ShiftFormAlert = styled.span`
  padding-top: var(--spacing-2);
  font-size: var(--font-base);
  color: tomato;
`;

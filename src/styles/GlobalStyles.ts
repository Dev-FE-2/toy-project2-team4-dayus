import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import './design-tokens.css';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-bg);
    font-family: 'Pretendard', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import './design-tokens.css';
import './font.css';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
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

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
    font-family: var(--ff_eng), var(--ff_kor), "Malgun Gothic", "맑은 고딕", sans-serif;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto;
    appearance: none;
  }

  input,
  select,
  textarea {
    box-sizing: border-box;
    outline: 0 none;
    appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input[type="number"],
  input[type="password"],
  input[type="tel"],
  input[type="text"],
  textarea {
    font-family: var(--ff_eng), var(--ff_kor), "Malgun Gothic", "맑은 고딕", sans-serif;
  }

  /* hidden */
  .visibility-hidden {
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    position: absolute;
    width: 1px;
    height: 1px;
    white-space: nowrap;
    border: 0;
  }
`;

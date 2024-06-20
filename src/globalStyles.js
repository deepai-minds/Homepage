// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3 {
    margin: 0.5em 0;
  }

  p {
    margin: 1em 0;
  }
`;

export default GlobalStyle;

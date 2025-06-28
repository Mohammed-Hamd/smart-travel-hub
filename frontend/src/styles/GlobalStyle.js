import { createGlobalStyle } from 'styled-components';
import COLORS from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background-color: ${COLORS.lightBg};
    color: ${COLORS.text};
  }
  img {
    max-width: 100%;
    display: block;
  }
  a {
    color: ${COLORS.secondary};
    text-decoration: none;
  }
`;

export default GlobalStyle;

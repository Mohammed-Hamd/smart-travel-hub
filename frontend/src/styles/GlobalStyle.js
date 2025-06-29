import { createGlobalStyle } from 'styled-components';
import COLORS from './colors';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    background-color: ${COLORS.lightBg};
    color: ${COLORS.text};
  }
  body.dark {
    background-color: ${COLORS.primary};
    color: #fff;
  }
  body.dark a {
    color: ${COLORS.accent};
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

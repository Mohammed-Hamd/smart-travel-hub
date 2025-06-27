import { createGlobalStyle } from 'styled-components';

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
    background-color: #f4f6f9;
    color: #333;
  }
  img {
    max-width: 100%;
    display: block;
  }
  a {
    color: #007bff;
    text-decoration: none;
  }
`;

export default GlobalStyle;

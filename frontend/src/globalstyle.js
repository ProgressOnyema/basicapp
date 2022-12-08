import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Rubik;
  }

  p {
    font-weight: 500;
    font-size: 16px;
  }
`;
 
export default GlobalStyle;
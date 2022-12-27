import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';
 
const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
  }

  
  body {
    font-family: Rubik;
    font-size: 1em;
    letter-spacing: -.01em;
    background-color: ${Colors.VeryLightGray};
  }
`;
 
export default GlobalStyle;
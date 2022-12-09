import GlobalStyle from "./globalstyle";
import { Colors } from "./colors";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Card } from "./components/Card";

const theme = {
  colors: Colors
}

const Container = styled.div`
  background-color: ${props => props.theme.colors.VeryLightGray};
  padding: 30px 10px;
  width: 100%;
  height: 100%;
`


function App(props) {
  return (
    <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Container>
          <Card />
        </Container>
    </ThemeProvider>
    
    
  );
}

export default App;

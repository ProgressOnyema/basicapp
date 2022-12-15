import GlobalStyle from "./globalstyle";
import { Colors } from "./colors";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Card } from "./components/Card";
import CardForm from "./components/CardForm";
import maxblagun from "./assets/maxblagun.png"
import juliusomo from "./assets/juliusomo.png"

const theme = {
  colors: Colors
}

const Container = styled.div`
  padding: 30px 10px;
  width: 100%;
  height: 100%;
`


function App(props) {
  return (
    <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Container>
          <Card username={'maxblagun'} currentUser={false} image={maxblagun} />
          <Card username={'juliusomo'} currentUser={true} image={juliusomo} />
          <CardForm />
        </Container>
    </ThemeProvider>
    
    
  );
}

export default App;

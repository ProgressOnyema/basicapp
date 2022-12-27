import GlobalStyle from "./globalstyle";
import { Colors } from "./colors";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import CardForm from "./components/CardForm";
import CommentList from "./components/CommentList";
import ContextProvider from "./ContextProvider";
import { useEffect } from "react";
import data from "./data.json";


const theme = {
  colors: Colors
}


const Container = styled.div`
    padding: 30px 20px;
    width: 100%;
    height: 100%;
`

function App() {

  return (
    <ContextProvider>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Container>
          <CommentList />
          <CardForm />
        </Container>
      </ThemeProvider>
    </ContextProvider>
      
    
    
    
  );
}

export default App;

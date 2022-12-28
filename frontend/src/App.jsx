import GlobalStyle from "./globalstyle";
import { Colors } from "./colors";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import CardForm from "./components/CardForm";
import CommentList from "./components/CommentList";
import { useEffect } from "react";
import CommentProvider from "./contexts/CommentProvider";


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
    <CommentProvider>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Container>
          <CommentList />
          <CardForm comment />
        </Container>
      </ThemeProvider>
    </CommentProvider>
      
    
    
    
  );
}

export default App;

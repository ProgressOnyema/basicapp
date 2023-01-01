import GlobalStyle from "./globalstyle";
import { Colors } from "./colors";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import CardForm from "./components/CardForm";
import CommentList from "./components/CommentList";
import { CommentContext } from "./contexts/CommentProvider";
import Modal from "./components/Modal";
import { useContext } from "react";


const theme = {
  colors: Colors
}


const Container = styled.div`
    padding: 30px 20px;
    width: 100%;
    height: 100%;
`

function App() {

  const { showModal, data } = useContext(CommentContext)

  return (
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Container>
          { showModal ? <Modal/> : "" }
          <CommentList />
          <CardForm comment />
        </Container>
      </ThemeProvider>
      
    
    
    
  );
}

export default App;

import styled from 'styled-components';
import { Button, ButtonWrapper, Container, FormContent, Image } from './Layout';
import juliusomo from "../assets/juliusomo.png"


const Content = styled(FormContent)`
    border: 1px solid ${props => props.theme.colors.LightGray};
`


const CardForm = () => {
  return (
    <Container>
        <Content value={"Add a comment..."} onChange={e => e} />
        <Image src={ juliusomo }/>
        <ButtonWrapper><Button blue >send</Button></ButtonWrapper>
    </Container>
  )
}

export default CardForm
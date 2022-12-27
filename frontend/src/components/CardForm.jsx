import { Button, Container, CreateForm, Image } from './Layout';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { Context } from '../context_api';
// import juliusomo from "../images/avatars/image-juliusomo.png";
const FormButton = styled(Button)`
  width: 60%;
  justify-self: end;
`


const CardForm = () => {

  const { handleCreation } = useContext(Context)
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = value;
    handleCreation(comment)
    setValue("")
    // console.log(comment)
  }

  return (
    <Container>
        <CreateForm placeholder="Add a comment..." value={value}  onChange={(e) => setValue(e.target.value)} />
        <Image src="images/avatars/image-juliusomo.png" />
        <FormButton blue onClick={handleSubmit} >send</FormButton>
    </Container>
  )
}

export default CardForm
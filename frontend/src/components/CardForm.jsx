import { Container, CreateForm, Image, SmallButton } from './Layout';
import { useContext, useState } from 'react';
import { ADD_COMMENT, ADD_REPLY } from '../actions/commentActions';
import { CommentContext } from '../contexts/CommentProvider';



const CardForm = (props) => {

  const { dispatch } = useContext(CommentContext)
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = value;

    if(props.comment){
      dispatch({type: ADD_COMMENT, payload: comment})
    }
    else if(props.reply){
      dispatch({type: ADD_REPLY, payload: {
        id: props.id,
        content: comment,
        replyingTo: props.username,
      }})
    }
    
    setValue("")
  }

  return (
    <Container>
        <CreateForm placeholder="Add a comment..." value={value}  onChange={(e) => setValue(e.target.value)} />
        <Image src="images/avatars/image-juliusomo.png" />
        {props.comment ? <SmallButton blue onClick={handleSubmit}>send</SmallButton> 
        : <SmallButton blue onClick={handleSubmit}>update</SmallButton>}
        
    </Container>
  )
}

export default CardForm
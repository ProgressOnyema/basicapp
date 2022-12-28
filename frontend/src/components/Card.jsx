// eslint-disable-next-line
import { Button, Container, ContentBox,  EditForm, ReplyingTo, SmallButton } from './Layout';
import AuthContent from './AuthContent';
import Vote from './Vote';
import CardActions from './CardActions';
import { useContext, useRef, useState } from 'react';
import { CommentContext } from '../contexts/CommentProvider';
import { EDIT_COMMENT } from '../actions/commentActions';



export const Card = (props) => {

  const [edit, setEdit] = useState(false);
  const [newValue, setNewValue] = useState("");
  const { dispatch } = useContext(CommentContext);

  const contentbox = useRef();

  const handleEditToggle = () => {
    setEdit(!edit);
    setNewValue(contentbox.current.innerText);
  }

  const handleEdit = () => {
    dispatch({type: EDIT_COMMENT, payload: {content: newValue, id: props.id}})
    setEdit(!edit);
    setNewValue("");
  }

  return (
    <Container>
      <AuthContent createdAt={props.createdAt} image={props.image} username={props.username} />

      {edit ? <EditForm value={newValue} onChange={(e) => setNewValue(e.target.value)} /> : <ContentBox ref={contentbox}>
        {props.replyingTo ? <ReplyingTo>@{props.replyingTo}</ReplyingTo> : "" }
        { props.content }
      </ContentBox>
      }
      
      <Vote id={props.id} score={props.score}/>
      {edit ? <SmallButton blue onClick={handleEdit}>update</SmallButton> 
      : <CardActions id={props.id} username={props.username} handleEditToggle={handleEditToggle} handleReplyMode={props.handleReplyMode}/>}
    </Container>
  )
}

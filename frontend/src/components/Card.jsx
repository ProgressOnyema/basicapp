// eslint-disable-next-line
import { Button, Container, ContentBox,  EditForm, ReplyingTo, SmallButton } from './Layout';
import AuthContent from './AuthContent';
import Vote from './Vote';
import CardActions from './CardActions';
import { useContext, useRef, useState } from 'react';
import { CommentContext } from '../contexts/CommentProvider';
import { EDIT_COMMENT, EDIT_REPLY } from '../actions/commentActions';


export const Card = (props) => {

  const [edit, setEdit] = useState(false);
  const [newValue, setNewValue] = useState("");
  const { dispatch } = useContext(CommentContext);

  const handleEditToggle = () => {
    if(props.isComment === true){
      setEdit(!edit);
      setNewValue(props.content);
    }
    else if(props.isReply === true){
      setEdit(!edit);
      // const concatedText = "@" + props.replyingTo + " " + props.content;
      setNewValue(props.content);
    }
  }

  const handleEdit = () => {
    if(props.isComment === true){
      dispatch({type: EDIT_COMMENT, payload: {content: newValue, id: props.commentId}})
      setEdit(!edit);
      setNewValue("");
    }
    else if(props.isReply === true){
      dispatch({type: EDIT_REPLY, payload: {content: newValue, commentId: props.commentId, replyId: props.replyId}})
      setEdit(!edit);
      setNewValue("");
    }
    
  }

  return (
    <Container>
      <AuthContent createdAt={props.createdAt} image={props.image} username={props.username} />

      {edit ? <EditForm value={newValue} onChange={(e) => setNewValue(e.target.value)} /> : <ContentBox>
        {props.replyingTo ? <ReplyingTo>@{props.replyingTo }</ReplyingTo> : "" }
        { props.content }
      </ContentBox>
      }
      
      <Vote 
        commentId={props.commentId} 
        replyId={props.replyId} username={props.username}
        score={props.score} 
        isComment={props.isComment}
        isReply={props.isReply}/>
      {edit ? <SmallButton blue onClick={handleEdit}>update</SmallButton> 
      : <CardActions 
        isComment={props.isComment}
        isReply={props.isReply}
        commentId={props.commentId} 
        replyId={props.replyId} username={props.username} 
        handleEditToggle={handleEditToggle} 
        handleReplyMode={props.handleReplyMode}/>}
    </Container>
  )
}

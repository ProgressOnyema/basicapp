// eslint-disable-next-line
import { Container, ContentBox,  EditForm, ReplyingTo } from './Layout';
import AuthContent from './AuthContent';
import Vote from './Vote';
import CardActions from './CardActions';



export const Card = (props) => {
  return (
    <Container>
      <AuthContent createdAt={props.createdAt} image={props.image} username={props.username} />
      <ContentBox>
        {props.replyingTo ? <ReplyingTo>@{props.replyingTo}</ReplyingTo> : "" }
        { props.content }
      </ContentBox>
      <Vote score={props.score}/>
      <CardActions username={props.username}/>
    </Container>
  )
}

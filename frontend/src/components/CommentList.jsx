import { useContext, useState } from "react"
import { CommentContext } from "../contexts/CommentProvider";
import { Card } from "./Card"
import CardForm from "./CardForm";
import { ReplyList } from "./Layout"


const CommentList = () => {

  const { state } = useContext(CommentContext);
  const [replyMode, setReplyMode] = useState(false)
  const [id, setId] = useState("")


  const handleReplyMode = (id) => {
    setReplyMode(!replyMode)
    setId(id)
  }

  console.log(state.comments)

  return (
    <div>
        {state.comments && state.comments.map((comment, key) =>
            <div key={key}>
            <Card  
            isComment={true}
            commentId={comment.id}
            content={comment.content} 
            createdAt={comment.createdAt} score={comment.score} 
            image={comment.user.image.png} username={comment.user.username}
            handleReplyMode={handleReplyMode} />
            {replyMode && comment.id === id ? <CardForm reply id={comment.id} username={comment.user.username} /> : ""}
            <ReplyList>
              { comment.replies && comment.replies.map((reply, key) => (
                <div key={key}>
                  <li>
                    <Card 
                    isReply={true}
                    commentId={comment.id}
                    replyId={reply.id}
                    replyingTo={reply.replyingTo}
                    content={reply.content} 
                    createdAt={reply.createdAt} score={reply.score} 
                    image={reply.user.image.png} username={reply.user.username}
                    handleReplyMode={handleReplyMode} />
                  </li>
                  {replyMode && reply.id === id ? <CardForm reply id={comment.id} username={reply.user.username} /> : ""}
                </div>
              ))}
            </ReplyList>
            </div>
          )}
    </div>
  )
}

export default CommentList
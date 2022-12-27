import { useContext } from "react"
import { Context } from "../context_api"
import { Card } from "./Card"
import { ReplyList } from "./Layout"


const CommentList = () => {

  const { data } = useContext(Context);

  return (
    <div>
        {data.comments.map((comment, key) =>
            <div key={key}>
            <Card  
            content={comment.content} 
            createdAt={comment.createdAt} score={comment.score} 
            image={comment.user.image.png} username={comment.user.username} />
            <ReplyList>
              { comment.replies && comment.replies.map((reply, key) => (
                
                <li key={key}>
                  <Card 
                  replyingTo={reply.replyingTo}
                  content={reply.content} 
                  createdAt={reply.createdAt} score={reply.score} 
                  image={reply.user.image.png} username={reply.user.username} />
                </li>
          
              ))}
            </ReplyList>
            </div>
          )}
    </div>
  )
}

export default CommentList
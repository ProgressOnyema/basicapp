import { useContext } from "react"
import styled from "styled-components"
import { DOWNVOTE_COMMENT, DOWNVOTE_REPLY, UPVOTE_COMMENT, UPVOTE_REPLY } from "../actions/commentActions"
import { CommentContext } from "../contexts/CommentProvider"


const Main = styled.div`
  width: 7rem;
  padding: .6rem .8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  background-color: ${props => props.theme.colors.VeryLightGray};
  border-radius: 10px;
  font-weight: 600;
`


const VoteItem = styled.div`
  text-align: center;
`


const VoteSign = styled(VoteItem)`
  color: ${props => props.theme.colors.LightGrayishBlue};

  &:hover {
    color: ${props => props.theme.colors.ModerateBlue};
    cursor: pointer;
  }
`

const VoteNumber = styled(VoteItem)`
  color: ${props => props.theme.colors.ModerateBlue};
`

const Vote = (props) => {

  const { dispatch } = useContext(CommentContext);

  return (
    <Main>
        <VoteSign onClick={props.isComment ? () => dispatch({type: UPVOTE_COMMENT, payload: props.commentId}) 
        : () => dispatch({type: UPVOTE_REPLY, payload: {commentId: props.commentId, replyId: props.replyId}})}>+</VoteSign>
        <VoteNumber>{ props.score }</VoteNumber>
        {props.score <= 0 ? <VoteSign>-</VoteSign> 
        : <VoteSign onClick={props.isComment ? () => dispatch({type: DOWNVOTE_COMMENT, payload: props.commentId}) 
        : () => dispatch({type: DOWNVOTE_REPLY, payload: {commentId: props.commentId, replyId: props.replyId}})}>-</VoteSign> }
    </Main>
  )
}

export default Vote
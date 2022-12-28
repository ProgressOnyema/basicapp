import { useContext } from "react"
import { FaPen, FaReply, FaTrash } from "react-icons/fa"
import styled, { css } from "styled-components"
import { DELETE_COMMENT } from "../actions/commentActions";
import { CommentContext } from "../contexts/CommentProvider";


const Main = styled.div`
  display: flex;
  justify-content: right;
  grid-row: 3 / 4;
  grid-column: 2 / 3;
`
const CardAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  font-weight: 600;

  ${props => props && css`
        color: ${props => props.blue ? props => props.theme.colors.ModerateBlue : props => props.theme.colors.SoftRed};;
    `};

  &:hover {
    color: ${props => props.blue ? props => props.theme.colors.LightGrayishBlue : props => props.theme.colors.PaleRed};
    cursor: pointer;
  }
`

const CardActions = (props) => {

  const { state, dispatch } = useContext(CommentContext);
  // Work on the card actions for replies
  return (
    <Main>
        {props.username === state.currentUser.username ? 
        <>
          <CardAction red onClick={() => dispatch({type: DELETE_COMMENT, payload: props.id})}>
              <FaTrash style={{ fontSize: ".9em", marginRight: "5px" }} />Delete
          </CardAction>
          
          <CardAction blue onClick={props.handleEditToggle}>
              <FaPen style={{ fontSize: ".9em", marginRight: "5px" }} />Edit
          </CardAction>
        </>
        : (
        <CardAction blue onClick={() => props.handleReplyMode(props.id)}>
            <FaReply style={{ fontSize: ".9em", marginRight: "5px" }} />Reply
        </CardAction>)}
    </Main>
  )
}

export default CardActions
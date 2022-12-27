import { useContext } from "react"
import { FaPen, FaReply, FaTrash } from "react-icons/fa"
import styled, { css } from "styled-components"
import { Context } from "../context_api"


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

  const { data } = useContext(Context);

  return (
    <Main>
        {props.username === data.currentUser.username ? (
        <>
          <CardAction red>
              <FaTrash style={{ fontSize: ".9em", marginRight: "5px" }} />Delete
          </CardAction>
          <CardAction blue>
              <FaPen style={{ fontSize: ".9em", marginRight: "5px" }} />Edit
          </CardAction>
        </>
        ): (
        <CardAction blue>
            <FaReply style={{ fontSize: ".9em", marginRight: "5px" }} />Reply
        </CardAction>)}
    </Main>
  )
}

export default CardActions
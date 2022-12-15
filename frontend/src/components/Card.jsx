import styled from 'styled-components';
import { Container, ContentBox,  Image, YouTag } from './Layout';
// eslint-disable-next-line
import { FaPen, FaReply, FaTrash } from 'react-icons/fa';
import { device } from '../breakpoints';


const Author = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2em;
`

const NameTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
`

const Date = styled.p`
  display: inline;
  margin-left: 1rem;
`


const Vote = styled.div`
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
`

const VoteNumber = styled(VoteItem)`
  color: ${props => props.theme.colors.ModerateBlue};
`

const CardActions = styled.div`
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
`

const CardActionBlue = styled(CardAction)`
  color: ${props => props.theme.colors.ModerateBlue};
`
// eslint-disable-next-line
const CardActionRed = styled(CardAction)`
  color: ${props => props.theme.colors.SoftRed};
`

const AuthContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
`


export const Card = (props) => {
  return (
    <Container>
      <AuthContent>
        <Author>
          <Image src={ props.image } />
          <NameTag>
            <h4>{ props.username }</h4>
            { props.currentUser ? <YouTag>you</YouTag> : ""}
          </NameTag>
          
          <Date>2 weeks ago</Date>
        </Author>
        <ContentBox contentEditable="true" tabIndex="-1" onClick={(e) => {e.target.focus()}} />
      </AuthContent>
      
      <Vote>
        <VoteSign>+</VoteSign>
        <VoteNumber>5</VoteNumber>
        <VoteSign>-</VoteSign>
      </Vote>
      <CardActions>
        {props.username === "juliusomo" ? (
        <>
          <CardActionRed>
              <FaTrash style={{ fontSize: ".9em", marginRight: "5px" }} />Delete
          </CardActionRed>
          <CardActionBlue>
              <FaPen style={{ fontSize: ".9em", marginRight: "5px" }} />Edit
          </CardActionBlue>
        </>
        ): (
        <CardActionBlue>
            <FaReply style={{ fontSize: ".9em", marginRight: "5px" }} />Reply
        </CardActionBlue>)}
          
      </CardActions>
    </Container>
    // <CardActionRed>
    // <FaTrash style={{ fontSize: ".9em", marginRight: "5px" }} />Delete
    // </CardActionRed>


    // I need to work on contentBox
  )
}

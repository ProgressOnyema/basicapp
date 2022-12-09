import styled from 'styled-components';
import { FaReply, FaTrash } from 'react-icons/fa';
import { device } from '../breakpoints';


const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${props => props.theme.colors.White};
  border-radius: 5px;

  p {
    color: ${props => props.theme.colors.GrayishBlue};
    font-weight: 500;
  }

  /* textarea {
    color: ${props => props.theme.colors.GrayishBlue};
    font-weight: 500;
    font-size: 16px;
  } */


  @media ${device.mobileM}{
    max-width: 100%;
  }
`

const Author = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin-bottom: 1.2em;
`

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const Date = styled.p`
  display: inline;
`

const Content = styled.textarea`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.GrayishBlue};
  border: none;
  font-family: Rubik;
  font-size: 16px;
  margin-bottom: 1.2em;
`

const Vote = styled.div`
  width: 90px;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.VeryLightGray};
  border-radius: 10px;
  font-weight: 500;
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
  position: absolute;
  padding: inherit;
  display: flex;
  bottom: 8px;
  right: 0;
`

const CardAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 12px;
  font-weight: 600;
  letter-spacing: -.02em;
`

const CardActionBlue = styled(CardAction)`
  color: ${props => props.theme.colors.ModerateBlue};
`

const CardActionRed = styled(CardAction)`
  color: ${props => props.theme.colors.SoftRed};
`

const AuthContent = styled.div`
  display: flex;
  flex-direction: column;
`


export const Info = () => {
  return (
    <Header>
      <AuthContent>
        <Author>
          <Image />
          <h4>username</h4>
          <Date>2 weeks ago</Date>
        </Author>
        <Content />
      </AuthContent>
      
      <Vote>
        <VoteSign>+</VoteSign>
        <VoteNumber>5</VoteNumber>
        <VoteSign>-</VoteSign>
      </Vote>
      <CardActions>
        <CardActionBlue>
          <FaReply style={{ fontSize: ".9em", marginRight: "7px" }} />Reply
        </CardActionBlue>
        <CardActionRed>
        <FaTrash style={{ fontSize: ".9em", marginRight: "7px" }} />Delete
        </CardActionRed>
      </CardActions>
    </Header>
  )
}

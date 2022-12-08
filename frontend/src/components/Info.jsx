import styled from 'styled-components';
import { device } from '../breakpoints';


const Header = styled.div`
  position: relative;
  padding: 10px;
  background-color: ${props => props.theme.colors.White};
  border-radius: 3px;

  @media ${device.mobileM}{
    max-width: 100%;
  }
`

const Author = styled.div`
  display: flex;
  justify-content: space-between;
`

const Image = styled.img`
  width: 40px;
  height: 40px;
`

const Date = styled.p`
  display: inline;
`

const Content = styled.textarea`
  width: 100%;
  height: 100%;
`

const Vote = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  background-color: ${props => props.theme.colors.LightGrayishBlue};
`

const VoteItem = styled.div`
  text-align: center;
  padding: 5px;
`

const VoteSign = styled(VoteItem)`
  color: ${props => props.theme.colors.LightGray};
`

const VoteNumber = styled(VoteItem)`
  color: ${props => props.theme.colors.ModerateBlue};
`

const CardActions = styled.div`
  position: absolute;
  padding: 5px;
  display: flex;
`

const CardAction = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardActionBlue = styled(CardAction)`
  color: ${props => props.theme.colors.ModerateBlue};
`

const CardActionRed = styled(CardAction)`
  color: ${props => props.theme.colors.SoftRed};
`


export const Info = () => {
  return (
    <Header>
      <Author>
        <Image />
        <h4>username</h4>
        <Date>1 month ago</Date>
      </Author>
      <Content />
      <Vote>
        <VoteSign>+</VoteSign>
        <VoteNumber>5</VoteNumber>
        <VoteSign>-</VoteSign>
      </Vote>
      <CardActions>
        <CardActionBlue>
          Reply
        </CardActionBlue>
        <CardActionRed>
          Delete
        </CardActionRed>
      </CardActions>
    </Header>
  )
}

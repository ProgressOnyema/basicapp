import styled from "styled-components"


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
  return (
    <Main>
        <VoteSign>+</VoteSign>
        <VoteNumber>{ props.score }</VoteNumber>
        <VoteSign>-</VoteSign>
    </Main>
  )
}

export default Vote
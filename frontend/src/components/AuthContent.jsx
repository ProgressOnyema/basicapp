import { useContext } from "react"
import styled from "styled-components"
import Moment from "react-moment";
import 'moment-timezone';
import { CommentContext } from "../contexts/CommentProvider"
import { Image, YouTag } from "./Layout";



const Main = styled.div`
    display: flex;
    flex-direction: column;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
`

const Author = styled.div`
  display: flex;
  align-items: center;
  /* margin-bottom: 1.2em; */
`

const NameTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: .8rem;

  h4 {
    color: ${props => props.theme.colors.DarkBlue};
  }
`

const DatePosted = styled.p`
  display: inline;
  margin-left: .8rem;
`

const date = Date.now();
console.log(date);
const AuthContent = (props) => {

  const { state } = useContext(CommentContext);
  

  return (
    <Main>
        <Author>
            <Image src={ props.image } />
            <NameTag>
            <h4>{ props.username }</h4>
            { props.username === state.currentUser.username ? <YouTag>you</YouTag> : ""}
            </NameTag>
            <DatePosted><Moment fromNow>{ props.createdAt }</Moment></DatePosted>
        </Author>
    </Main>
  )
}

export default AuthContent
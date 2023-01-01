import { useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components"
import { DELETE_COMMENT, DELETE_REPLY } from '../actions/commentActions';
import { CommentContext } from '../contexts/CommentProvider';
import { Container, Button, ContentBox, BigButton } from "./Layout"


const ModalContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    padding: 0 1.2rem;;
    display: grid;
    place-items: center;
    background-color: rgba(0,0,0,0.5);
`


const ModalDeleteContainer = styled(Container)`
    padding: 1.5rem;
    box-shadow: none;
`

const Title = styled.h3`
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    color: ${props => props.theme.colors.DarkBlue}
`

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    grid-row: 3 / 4;
    grid-column: 1 / span 4;
`


const Modal = () => {

    const { data, handleCleanUp, dispatch } = useContext(CommentContext);

    const handleDelete = () => {
        if(data.isComment === true){
            dispatch({type: DELETE_COMMENT, payload: data.commentId})
        }
        else if(data.isReply === true){
            dispatch({type: DELETE_REPLY, payload: {commentId: data.commentId, replyId: data.replyId}})
        }
        handleCleanUp();
    }

    return ReactDOM.createPortal(
        <ModalContainer onClick={handleCleanUp}>
            <ModalDeleteContainer onClick={(e) => e.stopPropagation()}>
                <Title>Delete comment</Title>
                <ContentBox>
                    Are you sure you want to delete this comment? This will remove
                    the comment and can't be undone.
                </ContentBox>
                <ButtonWrapper>
                    <BigButton grayishblue onClick={handleCleanUp} >No, cancel</BigButton>
                    <BigButton onClick={handleDelete}>yes, delete</BigButton>
                </ButtonWrapper>
            </ModalDeleteContainer>
        </ModalContainer>,
        document.getElementById("portal-root")
    )
}

export default Modal
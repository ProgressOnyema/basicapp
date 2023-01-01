import { useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import { CommentReducer } from "../reducers/CommentReducer";
import original_data from '../data.json'
import { DELETE_COMMENT, DELETE_REPLY } from "../actions/commentActions";


export const CommentContext = createContext()

const CommentProvider = (props) => {


    const [ state, dispatch ] = useReducer(CommentReducer, [], (() => {
        const localData = JSON.parse(localStorage.getItem("data"));
        return localData ? localData : localStorage.setItem("data", JSON.stringify(original_data));
    }));

    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({
      commentId: "",
      replyId: "",
      isComment: false,
      isReply: false
    })


    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(state))
    }, [state])


    const handleModalToggle = (item) => {
      setShowModal(!showModal)
      if(item.isComment === true){
        setData({
          ...data,
          commentId: item.commentId,
          isComment: true
        })
      }
      else if(item.isReply === true){
        setData({
          ...data,
          commentId: item.commentId,
          replyId: item.replyId,
          isReply: true
        })
      }
    }

    const handleCleanUp = () => {
      setShowModal(!showModal)
      setData({
        commentId: "",
        replyId: "",
        isComment: false,
        isReply: false
      })
    }


  return (
    <CommentContext.Provider value={{ state, dispatch, showModal, data, handleCleanUp, handleModalToggle }}>
      { props.children }
    </CommentContext.Provider>
  )
}

export default CommentProvider
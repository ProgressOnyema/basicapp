import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { CommentReducer } from "../reducers/CommentReducer";
import data from '../data.json'


export const CommentContext = createContext()

const CommentProvider = (props) => {


    const [ state, dispatch ] = useReducer(CommentReducer, [], (() => {
        const localData = JSON.parse(localStorage.getItem("data"));
        return localData ? localData : [];
    }));


    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(state))
    }, [state])


  return (
    <CommentContext.Provider value={{ state, dispatch }}>
      { props.children }
    </CommentContext.Provider>
  )
}

export default CommentProvider
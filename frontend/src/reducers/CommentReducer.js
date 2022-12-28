import uuid from "react-uuid";
import { ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT, UPVOTE_COMMENT, DOWNVOTE_COMMENT, ADD_REPLY, DELETE_REPLY, EDIT_REPLY, UPVOTE_REPLY, DOWNVOTE_REPLY } from "../actions/commentActions"

export const CommentReducer = (state, action) => {
    switch(action.type){
        case ADD_COMMENT:
            const comments = [...state.comments, {
                id: uuid(),
                content: action.payload,
                createdAt: "just now",
                score: 0,
                user: {
                image: {
                    png: state.currentUser.image.png,
                    webp: state.currentUser.image.png
                },
                username: state.currentUser.username
                },
                replies: []
            }]
            return {...state, comments };
        case DELETE_COMMENT:
            const new_comments = state.comments.filter(comment => comment.id !== action.payload)
            return {...state, comments: new_comments};
        case EDIT_COMMENT:
            const edit_comments = state.comments.map((comment) => {
                if (comment.id === action.payload.id){
                    const new_comment = {
                        ...comment,
                        content: action.payload.content
                    };
                    return new_comment
                }
                return comment
            })
            return {...state, comments: edit_comments};
        case UPVOTE_COMMENT:
            const upvote_comments = state.comments.map((comment) => {
                if (comment.id === action.payload){
                    const new_comment = {
                        ...comment,
                        score: comment.score + 1
                    };
                    return new_comment
                }
                return comment
            })
            return {...state, comments: upvote_comments};
        case DOWNVOTE_COMMENT:
            const downvote_comments = state.comments.map((comment) => {
                if (comment.id === action.payload){
                    const new_comment = {
                        ...comment,
                        score: comment.score - 1
                    };
                    return new_comment
                }
                return comment
            })
            return {...state, comments: downvote_comments};


        case ADD_REPLY:
            const added_replies = state.comments.map((comment) => {
                if (comment.id === action.payload.id){
                    const new_comment = {
                        ...comment,
                        replies: [...comment.replies, {
                            id: uuid(),
                            content: action.payload.content,
                            createdAt: "just now",
                            score: 0,
                            replyingTo: action.payload.replyingTo,
                            user: {
                                image: { 
                                png: "images/avatars/image-juliusomo.png",
                                webp: "images/avatars/image-juliusomo.webp"
                                },
                                username: "juliusomo"
                            }
                        }]
                    };
                    return new_comment
                }
                return comment
            })
            return {...state, comments: added_replies};
        case DELETE_REPLY:
            return state
        case EDIT_REPLY:
            return state
        case UPVOTE_REPLY:
            return state
        case DOWNVOTE_REPLY:
            return state
        default:
            return state;
    }
}
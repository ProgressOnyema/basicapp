import uuid from "react-uuid";
import { ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT, UPVOTE_COMMENT, DOWNVOTE_COMMENT, ADD_REPLY, DELETE_REPLY, EDIT_REPLY, UPVOTE_REPLY, DOWNVOTE_REPLY } from "../actions/commentActions"

export const CommentReducer = (state, action) => {
    switch(action.type){
        case ADD_COMMENT:
            const comments = [...state.comments, {
                id: uuid(),
                content: action.payload,
                createdAt: Date.now(),
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
                            createdAt: Date.now(),
                            score: 0,
                            replyingTo: action.payload.replyingTo,
                            user: {
                                image: { 
                                png: state.currentUser.image.png,
                                webp: state.currentUser.image.webp
                                },
                                username: state.currentUser.username
                            }
                        }]
                    };
                    return new_comment
                }
                return comment
            })
            return {...state, comments: added_replies};
        case DELETE_REPLY:
            const delete_replies = state.comments.map((comment) => {
                if(comment.id === action.payload.commentId){
                    const new_delete_comment = {
                        ...comment,
                        replies: comment.replies.filter(reply => reply.id !== action.payload.replyId)
                    }
                    return new_delete_comment
                }
                return comment
            })
            return {...state, comments: delete_replies}
        case EDIT_REPLY:
            const edited_comments = state.comments.map(comment => {
                if(comment.id === action.payload.commentId){
                    const new_edited_comment = {
                        ...comment,
                        replies: comment.replies.map(reply => {
                            if(reply.id === action.payload.replyId){
                                const new_edited_reply = {
                                    ...reply,
                                    content: action.payload.content
                                }
                                return new_edited_reply
                            }
                            return reply
                        })
                    }
                    return new_edited_comment
                }
                return comment
            })
            return {...state, comments: edited_comments}
        case UPVOTE_REPLY:
            const upvoted_comments = state.comments.map(comment => {
                if(comment.id === action.payload.commentId){
                    const new_comment = {
                        ...comment,
                        replies: comment.replies.map(reply => {
                            if(reply.id === action.payload.replyId){
                                const new_edited_reply = {
                                    ...reply,
                                    score: reply.score + 1
                                }
                                return new_edited_reply
                            }
                            return reply
                        })
                    }
                    return new_comment
                }
                return comment
            })
            return {...state, comments: upvoted_comments}
        case DOWNVOTE_REPLY:
            const downvoted_comments = state.comments.map(comment => {
                if(comment.id === action.payload.commentId){
                    const new_comment = {
                        ...comment,
                        replies: comment.replies.map(reply => {
                            if(reply.id === action.payload.replyId){
                                const new_edited_reply = {
                                    ...reply,
                                    score: reply.score - 1
                                }
                                return new_edited_reply
                            }
                            return reply
                        })
                    }
                    return new_comment
                }
                return comment
            })
            return {...state, comments: downvoted_comments}
        default:
            return state;
    }
}
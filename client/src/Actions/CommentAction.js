export const AddCommentAction=(comment)=>(dispatch)=>{
    dispatch({
        type:'ADD_COMMENT',
        payload:comment
    })
}
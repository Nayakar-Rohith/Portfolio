export const AddCommentAction=(comment)=>(dispatch)=>{
    dispatch({
        type:'ADD_COMMENT',
        payload:comment
    })
}

//export const RemoveTodoAction = (todo) => (dispatch, getState) => {
//    const { Todo:{ todos } } = getState(); 
//    dispatch({
//    type: "REMOVE_TODO_SUCCESS",
//    payload: todos.filter((t) => todo !== t),
//    });
//   }
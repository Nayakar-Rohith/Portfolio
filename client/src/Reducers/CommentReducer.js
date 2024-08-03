export const AddCommentReducer =(state={comments:[]},action)=>{
    switch (action.type) {
        case 'ADD_COMMENT':
            console.log("Reducer",action)
            return {...state,comments:[action.payload,...state.comments]}
        
            //case "REMOVE_TODO_SUCCESS":
            //    return { todos: action.payload };
            //removes the todo

        default:
           return state
    }
}
export const AddCommentReducer =(state={comments:[]},action)=>{
    switch (action.type) {
        case 'ADD_COMMENT':
            console.log("Reducer",action)
            return {...state,comments:[action.payload,...state.comments]}
            
        default:
           return state
    }
}
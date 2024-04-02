export const getAllBlogsReducer=(state={blogs:[]},action)=>{
    switch(action.type)
    {
        case 'GET_BLOGS_REQ':return{
            loading:true,
            ...state
        }
        case 'GET_BLOGS_SUCCESS':return{
            loading:false,
            blogs:action.payload
        }
        case 'GET_BLOGS_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}
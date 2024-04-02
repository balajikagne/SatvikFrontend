export const getAllofferReducer=(state={offers:[]},action)=>{
    switch(action.type)
    {
        case 'GET_OFFERS_REQ':return{
            loading:true,
            ...state
        }
        case 'GET_OFFERS_SUCCESS':return{
            loading:false,
            offers:action.payload
        }
        case 'GET_OFFERS_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const registerUserReducer=(state={},action)=>{
    switch (action.type)
    {
        case 'USER_REGISTER_REQ':
            return{
                loading:true
            }
        case 'USER_REGISTER_SUCCESS':
            return{
                loading:false,
                success:true
            }
        case 'USER_REGISTER_FAILED':
            return {
                loading:false,
                error:action.payload
            }
        default:return state
    }
}

export const loginUserReducer=(state={},action)=>{
    switch (action.type)
    {
        case 'USER_LOGIN_REQ':
            return{
                loading:true
            }
        case 'USER_LOGIN_SUCCESS':
            
            return{
                loading:false,
                success:true,
                currentUser:action.payload
            }
        case 'USER_LOGIN_FAILED':
            return {
                loading:false,
                error:action.payload
            }
        default:return state
    }
}
export const addressUserReducer=(state={},action)=>{
    switch (action.type)
    {
        case 'USER_ADDRESS_REQ':
            return{
                loading:true
            }
        case 'USER_ADDRESS_SUCCESS':
            return{
                loading:false,
                success:true,
                currentAddress:action.payload
            }
        case 'USER_ADDRESS_FAILED':
            return {
                loading:false,
                error:action.payload
            }
        default:return state
    }
}

export const setAddressUserReducer=(state={},action)=>{
    switch (action.type)
    {
        case 'USER_SETADDRESS_REQ':
            return{
                loading:true
            }
        case 'USER_SETADDRESS_SUCCESS':
            return{
                loading:false,
                success:true,
                currentUser:action.payload
            }
        case 'USER_SETADDRESS_FAILED':
            return {
                loading:false,
                error:action.payload
            }
        default:return state
    }
}
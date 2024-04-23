import axios from 'axios';
import Swal from 'sweetalert2'
export const registerUser=(userData)=>async dispatch=>{
    dispatch({type:'USER_REGISTER_REQ'})
    try{
        const response=await axios.post('https://satvikbackend.onrender.com/api/users/register',userData)
        dispatch({type:'USER_REGISTER_SUCCESS'})
    
        Swal.fire({
            title:"Account successfully created,Now login by Mobile and password",
            text:'Thank You',
            icon:'success',
            confirmButtonText: "OK",
          }).then((result)=>{
            if (result){
             window.location.href='/login'
            }
            else{
             window.location.href='/login'
            }
         })
    }
    catch(error){
        dispatch({type:'USER_REGISTER_FAILED',payload:error})
    }
}
export const userAddress=(userAddress)=>async dispatch=>{
    dispatch({type:'USER_SETADDRESS_REQ'})
    try{
        const response=await axios.post('https://satvikbackend.onrender.com/api/users/useraddress',userAddress)
        dispatch({type:'USER_SETADDRESS_SUCCESS'})
         Swal.fire({
            title:"Data Saved Successfully",
            text:'Thank You',
            icon:'success',
            confirmButtonText: "OK",
          }).then((result)=>{
            if (result){
             window.location.href='/orderOptions'
            }
            else{
             window.location.href='/orderOptions'
            }
         })
    }
    catch(error){
        dispatch({type:'USER_SETADDRESS_FAILED',payload:error})
    }
}
export const upDateuserAddress=(userAddress)=>async dispatch=>{
    dispatch({type:'USER_SETADDRESS_REQ'})
    try{
        const response=await axios.post('https://satvikbackend.onrender.com/api/users/updateuseraddress',userAddress)
        dispatch({type:'USER_SETADDRESS_SUCCESS'})
        Swal.fire({
            title:"Data Saved Successfully",
            text:'Thank You',
            icon:'success',
            confirmButtonText: "OK",
          }).then((result)=>{
            if (result){
             window.location.href='/orderOptions'
            }
            else{
             window.location.href='/orderOptions'
            }
         })
        
    }
    catch(error){
        dispatch({type:'USER_SETADDRESS_FAILED',payload:error})
    }
}
export const userAddressData=(userId)=>async dispatch=>{
    dispatch({type:'USER_ADDRESS_REQ'})
    try{
        const response=await axios.post('https://satvikbackend.onrender.com/api/users/useraddressData',{userId})
        dispatch({type:'USER_ADDRESS_SUCCESS',payload:response.data})
    }
    catch(error){
        dispatch({type:'USER_ADDRESS_FAILED',payload:error})
    }
}
export const loginUser=(userdata)=>async dispatch=>{
    dispatch({type:'USER_LOGIN_REQ'})
    try{
        const response=await axios.post('https://satvikbackend.onrender.com/api/users/login',userdata)
        dispatch({type:'USER_LOGIN_SUCCESS',payload: response.data})
        localStorage.setItem('currentUser',JSON.stringify(response.data))

        Swal.fire({
            title:"Login successfully",
            text:'Thank You',
            icon:'success',
            confirmButtonText: "OK",
          }).then((result)=>{
             if (result){
              window.location.href='/'
             }
             else{
              window.location.href='/'
             }
          })
        
        
    }
    catch(error){
        dispatch({type:'USER_LOGIN_FAILED',payload:error})
        Swal.fire({
            title:"Please enter correct information",
            text:'Thank You',
            icon:'warning',
            confirmButtonText: "OK",
          })
    }
}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('currentUser')
    window.location.href='/login';
}

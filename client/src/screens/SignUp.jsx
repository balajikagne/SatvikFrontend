import React,{useState} from 'react'
import './SignupScreen.css'
import { registerUser } from '../actions/userActions';
import {useDispatch} from 'react-redux';
import Swal from 'sweetalert2'
function SignUp() {
    const [name, setName] = useState('');
    const [mobNumber, setmobNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch=useDispatch()
      function GotoLogin(){
        window.location.href='/login'
      }
    const handleSignup = () => {
      const userData={name:name,mobNumber:mobNumber,password:password,confirmPassword:confirmPassword}
      if  (name===''|| mobNumber === '' || (password===''|| confirmPassword==='')){
        alert('Please Enter All Details')
        window.localStorage.href='/singup';
      }
      else{
        dispatch(registerUser(userData))
        Swal.fire({
          title:"Account successfully created",
          text:'Thank You',
          icon:'success',
          confirmButtonText: "OK",
        })
      }
      
    };
  return (
    <>
      <div className="container">
      <div className="signupBox">
        <h2 className="heading">Sign Up</h2>
        <form>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>mobNumber:</label>
          <input
            type="number"
            value={mobNumber}
            onChange={(e) => setmobNumber(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="button" onClick={handleSignup} className="signupButton">
            Sign Up
          </button>

          <div className="loginLink" onClick={()=>{GotoLogin()}}>
            Already have an account? Log In
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp

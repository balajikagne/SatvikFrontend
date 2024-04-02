import React, { useEffect, useState } from "react";
import "./LoginScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Swal from 'sweetalert2';
function LoginScreen() {
  const [mobNumber, setmobNumber] = useState("");
  const [password, setPassword] = useState();
  const [rememberMe, setRememberMe] = useState(false);
  const currentUser = useSelector((state) => state.loginUserReducer);
  const { CurrentUser } = currentUser;

  const dispatch = useDispatch();
  const handleLogin = () => {
    const userdata = {
      mobNumber: mobNumber,
      password: password,
      rememberMe: rememberMe,
    };
    if (mobNumber === "" || password === "") {
      Swal.fire({
        title:"Please enter valide information",
        text:'Thank You',
        icon:'warning',
        confirmButtonText: "OK",
      })
    } else {
      dispatch(loginUser(userdata));
      
    }
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser") !== null) {
      window.location.href='/'
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className="loginBox">
          <h2 className="heading">Login</h2>
          <form>
            <label>mobNumber:</label>
            <input
              type="text"
              value={mobNumber}
              onChange={(e) => setmobNumber(e.target.value)}
            />

            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="rememberMe">
              <input
                type="checkbox"
                id="rememberMeCheckbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="rememberMeCheckbox"
              />
              <label htmlFor="rememberMeCheckbox" className="rememberMeLabel">
                Remember Me
              </label>
            </div>

            <button type="button" onClick={handleLogin} className="loginButton">
              Login
            </button>

            <div className="forgotPassword">Forgot Password?</div>
            <div className="signupLink">
              Don't have an account? <a href="/signup">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;

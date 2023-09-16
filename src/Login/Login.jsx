import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="login">
        <h1 className="login-txt">LOGIN</h1>
        <h6 className="login-p">Please enter your e-mail and password:</h6>
        <div className="login-box">
          <input type="text" placeholder="Email" className="input-login" />
          <div className="forgot-pass">
            <input
              type="text"
              name=""
              id=""
              placeholder="Password"
              className="input-login"
            />
            <p className="forgot">Forgot password?</p>
          </div>
          <button className="btn-login">LOGIN</button>
        </div>
        <Link to="/register" className="Link">
          <p className="create-one">
            Don't have an account? <span>Create one</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import "./ResetPass.css";

const ResetPass = () => {
  return (
    <div className="Reset">
      <div className="reset">
        <h1 className="reset-txt">Reset Password</h1>
        <div className="reset-box">
          <input type="text" placeholder="Password" className="reset-login" />
          <div className="forgot-pass">
            <input
              type="text"
              name=""
              id=""
              placeholder="Confirm Password"
              className="reset-login"
            />
          </div>
          <button className="rst-login">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;

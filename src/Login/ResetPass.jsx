import React from "react";
import "./ResetPass.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

const emailSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email Address is required"),
});

const ResetPass = () => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      // dispatch(loginUser(values));
      setTimeout(() => {
        if (authState.isSuccess) {
          navigate("/");
        }
      }, 300);
    },
  });
  return (
    <div className="Reset">
      <div className="reset">
        <h1 className="reset-txt">Reset Password</h1>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="reset-box">
            <input
              type="email"
              placeholder="Email Address"
              className="reset-login"
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email}
            </div>
            {/* <div className="forgot-pass">
            <input
              type="text"
              name=""
              id=""
              placeholder="Confirm Password"
              className="reset-login"
            />
          </div> */}
            <button className="rst-login">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;

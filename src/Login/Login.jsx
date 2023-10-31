import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/users/userSlice";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email Address is required"),
  password: yup.string().required("Password is required"),
});
const Login = () => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (authState.user !== null && authState.isError == false) {
      navigate("/");
    }
  }, [authState]);

  return (
    <div className="Login">
      <div className="login">
        <h1 className="login-txt">LOGIN</h1>
        <h6 className="login-p">Please enter your e-mail and password:</h6>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="login-box">
            <input
              type="text"
              placeholder="Email"
              className="input-login"
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email}
            </div>
            <div className="forgot-pass">
              <input
                type="password"
                placeholder="Password"
                className="input-login"
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                value={formik.values.password}
              />
              <div className="error">
                {formik.touched.password && formik.errors.password}
              </div>
              <Link to="/reset-password" className="Link">
                <p className="forgot">Forgot password?</p>
              </Link>
            </div>
            <button className="btn-login" type="submit">
              LOGIN
            </button>
          </div>
          <Link to="/register-account" className="Link">
            <p className="create-one">
              Don't have an account? <span>Create one</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import "./ResetPass.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import "./ResetPass.css";
import { resetPassword } from "../features/users/userSlice";
// import { forgotPasswordToken } from "../features/users/userSlice";

const forgotSchema = yup.object({
  password: yup.string().required("Enter Password"),
  //   password: yup.string().required("Confirm Password"),
});

const Forgotpass = () => {
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];
  console.log(getToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: forgotSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: getToken, password: values?.password }));
      navigate("/login");
    },
  });
  return (
    <div className="Reset">
      <div className="reset">
        <h1 className="reset-txt">Reset Password</h1>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="reset-box">
            <div className="forgot-pass">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Password"
                className="reset-login"
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                value={formik.values.password}
              />
              <div className="error">
                {formik.touched.password && formik.errors.password}
              </div>
            </div>
            <button className="rst-login" type="submit">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgotpass;

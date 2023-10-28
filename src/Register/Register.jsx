import React from "react";
import "./Register.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/users/userSlice";

const signUpSchema = yup.object({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup.string().nullable().email("Email should be valid").required("Email Address is required"),
  mobile: yup.string().required("Mobile No is required"),
  password: yup.string().required("Password is required"),
});

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  return (
    <div className="Register">
      <div className="register">
        <h1 className="register-txt">REGISTER</h1>
        <h6 className="register-p">Please fill in the information below:</h6>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="register-box">
            <input
              type="text"
              placeholder="First name"
              name="firstname"
              className="input-register"
              value={formik.values.firstname}
              onChange={formik.handleChange("firstname")}
              onBlur={formik.handleBlur("firstname")}
            />
            <div className="error">
              {formik.touched.firstname && formik.errors.firstname}
            </div>
            <input
              type="text"
              placeholder="Last name"
              name="lastname"
              className="input-register"
              value={formik.values.lastname}
              onChange={formik.handleChange("lastname")}
              onBlur={formik.handleBlur("lastname")}
            />
            <div className="error">
              {formik.touched.lastname && formik.errors.lastname}
            </div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="input-register"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email}
            </div>
            <input
              type="text"
              placeholder="Mobile"
              name="mobile"
              className="input-register"
              value={formik.values.mobile}
              onChange={formik.handleChange("mobile")}
              onBlur={formik.handleBlur("mobile")}
            />
            <div className="error">
              {formik.touched.mobile && formik.errors.mobile}
            </div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input-register"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
            />
            <div className="error">
              {formik.touched.password && formik.errors.password}
            </div>
            <button type="submit" className="btn-register">
              CREATE MY ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

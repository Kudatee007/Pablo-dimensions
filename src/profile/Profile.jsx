import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/users/userSlice";
import { BiEdit } from "react-icons/bi";

const profileSchema = yup.object({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email Address is required"),
  mobile: yup.string().required("Mobile No is required"),
});

const Profile = () => {
  const [edit, setEdit] = useState(true);
  const userState = useSelector((state) => state.auth.user);
  console.log(userState);
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: userState?.firstname,
      lastname: userState?.lastname,
      email: userState?.email,
      mobile: userState?.mobile,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile(values));
      setEdit(true)
    },
  });
  return (
    <div>
      <div>
        <h1>My Profile</h1>
        <BiEdit onClick={()=>setEdit(false)}/>
      </div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            // name="firstname"
            onChange={formik.handleChange("firstname")}
            onBlur={formik.handleBlur("firstname")}
            value={formik.values.firstname}
            disabled={edit}
          />
          <div className="error">
            {formik.touched.firstname && formik.errors.firstname}
          </div>
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            // name="lastname"
            onChange={formik.handleChange("lastname")}
            onBlur={formik.handleBlur("lastname")}
            value={formik.values.lastname}
            disabled={edit}
          />
          <div className="error">
            {formik.touched.lastname && formik.errors.lastname}
          </div>
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            // name="email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            disabled={edit}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email}
          </div>
        </div>
        <div>
          <label htmlFor="mobile">Mobile No</label>
          <input
            type="number"
            // name="mobile"
            onChange={formik.handleChange("mobile")}
            onBlur={formik.handleBlur("mobile")}
            value={formik.values.mobile}
            disabled={edit}
          />
          <div className="error">
            {formik.touched.mobile && formik.errors.mobile}
          </div>
        </div>
        {edit === false && (
          <button className="" type="submit">
            SAVE
          </button>
        )}
      </form>
    </div>
  );
};

export default Profile;

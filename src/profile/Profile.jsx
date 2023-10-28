import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/users/userSlice";
import { BiEdit } from "react-icons/bi";
import "./Profile.css";

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
  const userState = useSelector((state) => state?.auth?.user);
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
      setEdit(true);
    },
  });
  return (
    <div className="Profile">
      <div>
        <h1 className="profileHead">My Profile</h1>
      </div>
      <form action="" onSubmit={formik.handleSubmit} className="profileForm">
        <div className="profileBox">
          <div className="editBox">
          <label htmlFor="firstname" className="profileLabel">
            First Name
          </label>
          <BiEdit onClick={() => setEdit(false)} className="editIcon" />
        </div>
          <input
            type="text"
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange("firstname")}
            onBlur={formik.handleBlur("firstname")}
            disabled={edit}
            className="profileField"
          />
          <div className="error">
            {formik.touched.firstname && formik.errors.firstname}
          </div>
        </div>
        <div className="profileBox">
          <label htmlFor="lastname" className="profileLabel">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange("lastname")}
            onBlur={formik.handleBlur("lastname")}
            disabled={edit}
            className="profileField"
          />
          <div className="error">
            {formik.touched.lastname && formik.errors.lastname}
          </div>
        </div>
        <div className="profileBox">
          <label htmlFor="email" className="profileLabel">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            disabled={edit}
            className="profileField"
          />
          <div className="error">
            {formik.touched.email && formik.errors.email}
          </div>
        </div>
        <div className="profileBox">
          <label htmlFor="mobile" className="profileLabel">
            Mobile No
          </label>
          <input
            type="number"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange("mobile")}
            onBlur={formik.handleBlur("mobile")}
            disabled={edit}
            className="profileField"
          />
          <div className="error">
            {formik.touched.mobile && formik.errors.mobile}
          </div>
        </div>
        {edit === false && (
          <button className="profileBtn" type="submit">
            SAVE
          </button>
        )}
      </form>
    </div>
  );
};

export default Profile;

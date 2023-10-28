import React from "react";
import "./Contactus.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createQuery } from "../features/contact/contactSlice";

const contactScema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().nullable().email("Email should be valid").required("Email is required"),
  mobile: yup.string().default('').nullable().required("Mobile is required"),
  comment: yup.string().default('').nullable().required("Comment is required"),
});

const Contactus = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactScema,
    onSubmit: (values) => {
      dispatch(createQuery(values))
    },
  });
  return (
    <div className="Contact-us">
      <h1 className="contact-us">CONTACT US</h1>
      <h2 className="contact-h2">WHAT IS SHIPPING AND DELIVERY POLICY?</h2>
      <p className="contact-p">Delivery and shipping policy</p>
      <h2 className="contact-h2">HOW DO I RETURN AN ITEM?</h2>
      <p className="contact-p">Return policy</p>
      <h2 className="contact-h2">CUSTOM ORDERS</h2>
      <h3 className="contact-h3">
        PLEASE INCLUDE AS MUCH INFORMATION AS POSSIBLE.
      </h3>
      <ul className="contact-ul">
        <li className="contact-h3">
          BUDGET - Custom orders start at $500USD and will depend on the style,
          fabric etc
        </li>
        <li className="contact-h3">QUANTITY</li>
        <li className="contact-h3">TYPE OF OUTFIT/EVENT</li>
        <li className="contact-h3">DATE NEEDED</li>
        <li className="contact-h3">PREFERRED FABRICS ETC</li>
      </ul>
      <form action="" className="contact-form" onSubmit={formik.handleSubmit}>
        <div className="cform-in">
          <input
            type="text"
            placeholder="Your name"
            className="cform-input"
            name="name"
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            value={formik.values.name}
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <input
            type="text"
            placeholder="Your email"
            className="cform-input"
            name="email"
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email}
          </div>
        </div>
        <input
          type="text"
          placeholder="Phone number"
          className="cform-input"
          name="mobile"
          onChange={formik.handleChange("mobile")}
          onBlur={formik.handleBlur("mobile")}
          value={formik.values.mobile}
        />
        <div className="error">
          {formik.touched.mobile && formik.errors.mobile}
        </div>
        <textarea
          id=""
          cols="30"
          rows="10"
          className="cform-area"
          placeholder="Your message"
          name="comment"
          onChange={formik.handleChange("comment")}
          onBlur={formik.handleBlur("comment")}
          value={formik.values.comment}
        ></textarea>
        <div className="error">
          {formik.touched.comment && formik.errors.comment}
        </div>
        <button className="btn-cform">SEND MESSAGE</button>
      </form>
    </div>
  );
};

export default Contactus;

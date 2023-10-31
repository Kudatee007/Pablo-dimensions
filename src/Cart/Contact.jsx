import React, { useState, useEffect } from "react";
import "./Contact.css";
import { Link, useNavigate } from "react-router-dom";
import { FaShippingFast, FaHouseUser } from "react-icons/fa";
import Cartdetails from "./Cartdetails";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  createAnOrder,
  deleteUserCart,
  getUserCart,
  resetState,
} from "../features/users/userSlice";
import { PaystackButton } from "react-paystack";

const shippingSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  address: yup.string().required("Address Details are required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  pincode: yup.string().required("Zipcode is required"),
});

const Contact = () => {
  const navigate = useNavigate();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const [shippingInfo, setShippingInfo] = useState(null);
  const dispatch = useDispatch();
  const [cartProductState, setCartProductState] = useState([]);
  const shippingFee = 20;
console.log(cartState);
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };


  useEffect(() => {
    let items = [];
    for (let index = 0; index < cartState?.length; index++) {
      items.push({
        product: cartState[index].productId._id,
        quantity: cartState[index].quantity,
        color: cartState[index].color._id,
        price: cartState[index].price,
      });
      setCartProductState(items);
    }
  }, [cartState]);

  // useEffect(()=> {
  //   if (authState.orderedProduct !== null && authState.orderedProduct.status == true) {
  //     navigate("/my-orders")
  //   }
  // })

  const checkOutHandler = () => {
    dispatch(
      createAnOrder({
        totalPrice: totalAmount,
        totalPriceAfterDiscount: totalAmount,
        orderItems: cartProductState,
        shippingInfo: JSON.parse(localStorage.getItem("address")),
      })
    );
    dispatch(deleteUserCart(config2));
    localStorage.removeItem("address");
    dispatch(resetState());
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      localStorage.setItem("address", JSON.stringify(values));
    },
  });

  // PAYMENT HANDLER
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
     checkOutHandler();
  };

  const emailAddress = authState?.user?.email
  const config = {
    reference: new Date().getTime().toString(),
    email: emailAddress,
    amount: totalAmount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_ff3ace27b32e03f132720a4c38669d241b54e842",
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    // console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Place order",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="Contact">
      <div className="inner-contact1">
        <Cartdetails />
      </div>
      <div className="inner-contact2">
        <h2 className="contact-h">Contact</h2>
        <p className="contact-mail">{emailAddress}</p>
        <h2 className="contact-h">Delivery method</h2>
        <div className="Delivery-method">
          <div className="del-method">
            <FaShippingFast />
            <p>Shipping</p>
          </div>
        </div>
        <h1 className="contact-h">Shipping address</h1>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="address-block">
            <select
              name="country"
              onChange={formik.handleChange("country")}
              onBlur={formik.handleBlur("country")}
              value={formik.values.country}
              required
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="nigeria">NIG</option>
              <option value="usa">USA</option>
              <option value="canada">CAD</option>
            </select>
            <div className="error">
              {formik.touched.country && formik.errors.country}
            </div>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              onChange={formik.handleChange("firstName")}
              onBlur={formik.handleBlur("firstName")}
              value={formik.values.firstName}
              required
            />
            <div className="error">
              {formik.touched.firstName && formik.errors.firstName}
            </div>
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              onChange={formik.handleChange("lastName")}
              onBlur={formik.handleBlur("lastName")}
              value={formik.values.lastName}
              required
            />
            <div className="error">
              {formik.touched.lastName && formik.errors.lastName}
            </div>
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={formik.handleChange("address")}
              onBlur={formik.handleBlur("address")}
              value={formik.values.address}
              required
            />
            <div className="error">
              {formik.touched.address && formik.errors.address}
            </div>
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              name="other"
              onChange={formik.handleChange("other")}
              onBlur={formik.handleBlur("other")}
              value={formik.values.other}
              required
            />
            <div className="error">
              {formik.touched.other && formik.errors.other}
            </div>
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={formik.handleChange("city")}
              onBlur={formik.handleBlur("city")}
              value={formik.values.city}
              required
            />
            <div className="error">
              {formik.touched.city && formik.errors.city}
            </div>
            <input
              type="text"
              placeholder="State"
              name="state"
              onChange={formik.handleChange("state")}
              onBlur={formik.handleBlur("state")}
              value={formik.values.state}
              required
            />
            <div className="error">
              {formik.touched.state && formik.errors.state}
            </div>
            <input
              type="text"
              placeholder="Zip code"
              name="pincode"
              onChange={formik.handleChange("pincode")}
              onBlur={formik.handleBlur("pincode")}
              value={formik.values.pincode}
              required
            />
            <div className="error">
              {formik.touched.pincode && formik.errors.pincode}
            </div>
            {/* Total amount */}
            <div>
              <div className="sub-ship1">
                <p className="ship-p">Subtotal</p>
                <p className="ship_price">$ {totalAmount ? totalAmount : 0}</p>
              </div>
              <div className="sub-ship2">
                <p className="ship-p">Shipping</p>
                <p className="ship_price">${shippingFee}</p>
              </div>
              {/* TOTAL */}
              <div className="ship-total">
                <h6 className="total-txt">Total</h6>
                <p className="total-p">
                  usd{" "}
                  <span className="total-span">
                    $ {totalAmount ? totalAmount + shippingFee : 0}
                  </span>
                </p>
              </div>
            </div>
            {/* <Link className="Link"> */}
            {/* <PaystackButton {...componentProps} /> */}
            {/* <button className="btn-gotoship" type="submit">
              Place Order
            </button> */}
            <PaystackButton {...componentProps} type="submit"  className="btn-gotoship"/>
            {/* </Link> */}
            {/* <button type="submit">Place Order</button> */}
          </div>
        </form>
        <p>return to cart</p>
      </div>
    </div>
  );
};

export default Contact;

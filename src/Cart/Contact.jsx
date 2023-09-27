import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaArrowDown,
  FaSpinner,
  FaShippingFast,
  FaHouseUser,
} from "react-icons/fa";
import shoe from "../Img/shoe1.svg";
import Cartdetails from "./Cartdetails";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="inner-contact1">
        <Cartdetails />
      </div>
      <hr className="divider" />
      <div className="inner-contact2">
        <h2 className="contact-h">Contact</h2>
        <p className="contact-mail">Timmyturner@gmail.com</p>
        <h2 className="contact-h">Delivery method</h2>
        <div className="Delivery-method">
          <div className="del-method">
            <input type="checkbox" name="" id="" />
            <FaShippingFast />
            <p>Ship</p>
          </div>
          <div className="del-method">
            <input type="checkbox" name="" id="" />
            <FaHouseUser />
            <p>Pick up</p>
          </div>
        </div>
        <h1 className="contact-h">Shipping address</h1>
        <div className="address-block">
          <select name="" id="">
            <option value="">NIG</option>
            <option value="">USA</option>
            <option value="">CAD</option>
          </select>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Company (optional)" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Apartment, suite, etc. (optional)" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Phone" />
          <Link to="/shipping" className="Link">
            <button className="btn-gotoship">Continue to shipping</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

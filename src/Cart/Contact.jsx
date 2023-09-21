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

const Contact = () => {
  return (
    <div className="Contact">
      {/* <div className="summary-box">
        <div className="toggle-summary">
          <div className="tog-sum">
            <FaShoppingCart size={13} />
            <p>Hide order summary</p>
            <FaArrowDown size={10} />
          </div>
          <p>$72.50</p>
        </div>
        <div>
          <div className="ship-inf">
            <img src={shoe} alt="" className="ship-img" />
            <div>
              <p> New Pablo Dimension 2023 Classic wears.</p>
              <p>XXL / WHITE</p>
            </div>
            <p>$72.50</p>
          </div>
          DISCOUNT BOX
          <div>
            <h2>Discount code</h2>
            <div>
              <input type="text" />
              <FaSpinner />
            </div>
          </div>
        </div>
      </div> */}
      <div>
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

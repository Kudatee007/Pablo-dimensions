import React from "react";
import "./Contactus.css";

const Contactus = () => {
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
      <form action="" className="contact-form">
        <div className="cform-in">
          <input type="text" placeholder="Your name" className="cform-input" />
          <input type="text" placeholder="Your email" className="cform-input" />
        </div>
        <input
          type="text"
          placeholder="Order number (optional)"
          className="cform-input"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="cform-area"
          placeholder="Your message"
        ></textarea>
        <button className="btn-cform">SEND MESSAGE</button>
      </form>
    </div>
  );
};

export default Contactus;

import React from "react";
import ficon from "../Img/fbicon.svg";
import ticon from "../Img/ticon.svg";
import igicon from "../Img/igicon.svg";
import yicon from "../Img/yicon.svg";
import tikicon from "../Img/tiktokicon.svg";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot1">
        <h2>Footer menu</h2>
        <ul className="footer-list">
          <li>About</li>
          <li>FAQs</li>
          <li>Return Policy</li>
          <li>Delivery Policy</li>
          <li>Contact</li>
          <li>Reviews</li>
          <li>Custom orders</li>
        </ul>
      </div>
      <div className="foot2">
        <h2>CONTACT</h2>
        <p>Email: info@maisondefashion.com</p>
        <p>Call: +44 (0) 3330124624</p>
      </div>
      <div className="foot3">
        <img src={ficon} alt="" />
        <img src={ticon} alt="" />
        <img src={igicon} alt="" />
        <img src={yicon} alt="" />
        <img src={tikicon} alt="" />
      </div>
    </div>
  );
};

export default Footer;

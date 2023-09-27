import React from "react";
import { Link } from "react-router-dom";
import ficon from "../Img/fbicon.svg";
import ticon from "../Img/ticon.svg";
import igicon from "../Img/igicon.svg";
import yicon from "../Img/yicon.svg";
import tikicon from "../Img/tiktokicon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot1">
        <h2>Footer menu</h2>
        <ul className="footer-list">
          <Link to="/about" className="lii Link">
            <li className="lii">About</li>
          </Link>
          <Link to="/return" className="lii Link">
            <li className="lii">Return Policy</li>
          </Link>
          <Link to="/delivery-policy" className="lii Link">
            <li className="lii">Delivery Policy</li>
          </Link>
          <Link to="/contact-us" className="lii Link">
            <li className="lii">Contact</li>
          </Link>
          <Link to="/contact-us" className="lii Link">
            <li>Custom orders</li>
          </Link>
        </ul>
      </div>
      <div className="foot2">
        <h2>CONTACT</h2>
        <p>Email: info@Pablo_Dimensions.com</p>
        <p>Call: +44 3330124624</p>
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

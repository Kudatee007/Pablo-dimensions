import React from "react";
import shoe from "../Img/shoe1.svg";
import "./Shipping.css";
import {
  FaArrowLeft,
  FaCreditCard,
  FaLock,
  FaQuestionCircle,
} from "react-icons/fa";

const Shipping = () => {
  return (
    <div className="shipping">
      <div className="shipping1">
        <h1 className="pablo-d">Pablo_Dimensions</h1>
        <div className="contact-ship">
          <div className="cont-shipping cont-shipping1">
            <div className="cont-ship">
              <h6 className="conship-txt">Contact</h6>
              <p className="conship-p">Timmyturner@gmail.com</p>
            </div>
            <p className="conship-change">Change</p>
          </div>
          <div className="cont-shipping">
            <div className="cont-ship">
              <h6 className="conship-txt">Ship to</h6>
              <p className="conship-p">15 Adekunle street, 11022 Lagos NG</p>
            </div>
            <p className="conship-change">Change</p>
          </div>
        </div>
        <div className="ship-method">
          <h1 className="ship-H">Shipping method</h1>
          <div className="ship">
            <div className="ship-check">
              <input type="checkbox" name="" id="" />
              <p className="ship-p">Standard</p>
            </div>
            <p className="ship-price">$19.65</p>
          </div>
        </div>
        {/* PAYMENT */}
        <h1 className="pablo-d">Payment</h1>
        <p className="payment-txt">All transactions are secured and encrypted.</p>
        <div className="card-box">
          <div className="credit-card">
            <h2 className="credit-txt">Credit card</h2>
            <FaCreditCard />
          </div>
          {/* CARD NUMBERS */}
          <div className="card-numberbox">
            <div className="card-position">
              <input type="text" placeholder="Card number" className="card-number"/>
              <FaLock className="react-icon"/>
            </div>
            <div>
              <input type="text" placeholder="Cardholder name" className="input-card"/>
            </div>
            <div className="cvv-date">
              <input type="text" placeholder="Expiration date (MM/YY)" className="input-card"/>
              <div className="card-position">
                <input type="text" placeholder="Security code" className="card-number"/>
                <FaQuestionCircle className="react-icon"/>
              </div>
            </div>
          </div>
        </div>
        {/* BILLING ADDRESS */}
        <h1 className="pablo-d">Billing address</h1>
        <p className="payment-txt">Select the address that matches your card or payment method.</p>
        <div className="billing-box">
          <div className="bill-box">
            <input type="checkbox" name="" id="" />
            <p className="credit-txt">Same as shipping address</p>
          </div>
          <div className="bill-box">
            <input type="checkbox" name="" id="" />
            <p className="credit-txt">Use a different billing address</p>
          </div>
        </div>
        {/* PAY NOW BUTTON */}
        <div className="return-payment">
          <p className="return-txt">
            <FaArrowLeft /> Return to information
          </p>
          <button className="cnt-payment">Continue to payment</button>
        </div>
      </div>

      <hr className="divider" />

      <div className="shipping2">
        {/* cart details */}
        <div className="ship-info">
          <img src={shoe} alt="" className="ship-img" />
          <p> New Pablo Dimension 2023 Classic wears.</p>
          <p>$100</p>
        </div>
        {/* subtotal / shipping*/}
        <div className="sub-ship1">
          <p className="ship-p">Subtotal</p>
          <p className="ship_price">$100.00</p>
        </div>
        <div className="sub-ship2">
          <p className="ship-p">Shipping</p>
          <p className="ship_price">$19.65</p>
        </div>
        {/* TOTAL */}
        <div className="ship-total">
          <h6 className="total-txt">Total</h6>
          <p className="total-p">
            usd <span className="total-span">$119.65</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;

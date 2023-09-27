import React, { useState } from "react";
import shoe from "../Img/shoe1.svg";
import "./Cartdetails.css";
import { FaShoppingCart, FaArrowDown, FaArrowUp } from "react-icons/fa";

const Cartdetails = () => {
  const [carts, setCarts] = useState();
  const [hide, setHide] = useState();
  const [show, setShow] = useState("Show");

  function handleCarts() {
    setCarts(!carts);
    setHide(carts ? "Hide" : "Show");
  }
  return (
    <div className="cartDetails">
      <div className="tog-sum" onClick={handleCarts}>
        <div className="inner-ts">
          <FaShoppingCart size={13} />
          <p>{carts ? "Hide order summary" : "Show order summary"}</p>
        </div>
        {carts ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />}
      </div>
      <div className={carts ? "shipping2" : "shipping2 shipping2-NX"}>
        {/* cart details */}
        <div className="ship-info">
          <img src={shoe} alt="" className="ship-img" />
          <div className="ship-in">
            <p> New Pablo Dimension 2023 Classic wears.</p>
            <p>$100</p>
          </div>
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

export default Cartdetails;

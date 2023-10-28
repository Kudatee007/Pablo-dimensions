import React, { useState, useEffect } from "react";
import shoe from "../Img/shoe1.svg";
import "./Cartdetails.css";
import { FaShoppingCart, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Cartdetails = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.auth.cartProducts);
  const [carts, setCarts] = useState();
  const [hide, setHide] = useState();
  const [show, setShow] = useState("Show");
  const [totalAmount, setTotalAmount] = useState(null);

  function handleCarts() {
    setCarts(!carts);
    setHide(carts ? "Hide" : "Show");
  }

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index].quantity) * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);
  const shippingFee = 20
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
        {cartState &&
          cartState?.map((item, index) => {
            return (
              <div className="ship-info" key={index}>
                <img src={item?.productId?.images[0].url} alt="" className="ship-img" />
                <div className="ship-in">
                  <p>{item?.productId?.title}</p>
                  <p>${item?.price * item?.quantity}</p>
                  <p>{item?.color?.title}</p>
                  <p>{item?.quantity}</p>
                </div>
              </div>
            );
          })}
        {/* subtotal / shipping*/}
        <div className="sub-ship1">
          <p className="ship-p">Subtotal</p>
          <p className="ship_price">$ {totalAmount? totalAmount : 0}</p>
        </div>
        <div className="sub-ship2">
          <p className="ship-p">Shipping</p>
          <p className="ship_price">${shippingFee}</p>
        </div>
        {/* TOTAL */}
        <div className="ship-total">
          <h6 className="total-txt">Total</h6>
          <p className="total-p">
            usd <span className="total-span">$ {totalAmount? totalAmount + shippingFee: 0}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cartdetails;

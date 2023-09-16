import React from "react";
import "./Cart.css";
import cart from "../Img/shoe1.svg";
import plus from "../Img/lightplus.svg";
import minus from "../Img/lightminus.svg";

const Cart = () => {
  return (
    <div className="Cart">
      <div>
        <h1 className="cart-sum">CART SUMMARY</h1>
      </div>
      <div className="sub-total">
        <div>
          <h2 className="total-h">Subtotal</h2>
          <p className="total-p">Delivery fees not included yet.</p>
        </div>
        <h2 className="total-price">$32.997</h2>
      </div>
      <div className="cart-space">
        <h3 className="cart-sum">CART (4)</h3>
        <div className="cart-info">
          <div>
            <img src={cart} alt="" className="cart-image" />
            <div className="remove-box">
              <img src={plus} alt="" className="remove" />
              <p className="remove-txt">REMOVE</p>
            </div>
          </div>
          <div>
            <h1 className="cart-name">
              New Pablo Dimension 2023 Classic wears.
            </h1>
            <p className="cart-s">Seller: Pablo Dimension</p>
            <p className="cart-s">Size: L</p>
            <h3 className="cart-price">$3,566</h3>
            <div className="btn-plus-minus">
              <button>
                <img src={minus} alt="" />
              </button>
              <p>2</p>
              <button>
                <img src={plus} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="cart-info">
          <div>
            <img src={cart} alt="" className="cart-image" />
            <div className="remove-box">
              <img src={plus} alt="" className="remove" />
              <p className="remove-txt">REMOVE</p>
            </div>
          </div>
          <div>
            <h1 className="cart-name">
              New Pablo Dimension 2023 Classic wears.
            </h1>
            <p className="cart-s">Seller: Pablo Dimension</p>
            <p className="cart-s">Size: L</p>
            <h3 className="cart-price">$3,566</h3>
            <div className="btn-plus-minus">
              <button>
                <img src={minus} alt="" />
              </button>
              <p>2</p>
              <button>
                <img src={plus} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="cart-info">
          <div>
            <img src={cart} alt="" className="cart-image" />
            <div className="remove-box">
              <img src={plus} alt="" className="remove" />
              <p className="remove-txt">REMOVE</p>
            </div>
          </div>
          <div>
            <h1 className="cart-name">
              New Pablo Dimension 2023 Classic wears.
            </h1>
            <p className="cart-s">Seller: Pablo Dimension</p>
            <p className="cart-s">Size: L</p>
            <h3 className="cart-price">$3,566</h3>
            <div className="btn-plus-minus">
              <button>
                <img src={minus} alt="" />
              </button>
              <p>2</p>
              <button>
                <img src={plus} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="but-cart">
          <button className="call">CA</button>
          <button className="add-cart">Checkout ($32,997)</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

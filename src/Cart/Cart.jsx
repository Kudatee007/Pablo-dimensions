import React, { useEffect } from "react";
import "./Cart.css";
import cart from "../Img/shoe1.svg";
import plus from "../Img/lightplus.svg";
import minus from "../Img/lightminus.svg";
import { FaTrash, FaPhone, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../features/users/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state.auth.cartProducts);
  console.log(userCartState);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);
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
        {userCartState
          ? userCartState.map((item, index) => {
              return (
                <div className="cart-info" key={index}>
                  <div>
                  <img src={item?.productId?.images[0].url} alt="" className="cart-image" />
                    <div className="remove-box">
                      <FaTrash size={12} />
                      <p className="remove-txt">REMOVE</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="cart-name">{item?.title}</h1>
                    <p className="cart-s">Seller: Pablo Dimension</p>
                    <p className="cart-s">Size: L</p>
                    <p className="cart-s">
                      <ul>
                        <li
                          style={{ backgroundColor: item?.color.title }}
                          className="colors"
                        ></li>
                      </ul>
                    </p>
                    <h3 className="cart-price">${item?.price}</h3>
                    <div className="btn-plus-minus">
                      <p className="cart-count">Quantity:{item?.quantity}</p>
                      <p className="cart-count">Total:{item?.price * item?.quantity}</p>
                    </div>
                  </div>
                </div>
              );
            })
          : []}

        <div className="but-cart">
          <button className="call">
            <FaPhone />
          </button>
          <Link to="/contact-info" className="Link add-cart">
            <button className="add-cart">
              <FaShoppingCart /> Checkout ($32,997)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

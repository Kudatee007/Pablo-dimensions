import React, { useEffect, useState } from "react";
import "./Cart.css";
import cart from "../Img/shoe1.svg";
import plus from "../Img/lightplus.svg";
import minus from "../Img/lightminus.svg";
import { FaTrash, FaPhone, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../features/users/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state.auth.cartProducts);
  console.log(userCartState);
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };

  console.log();

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateCartProduct({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 200);
    }
  }, [productUpdateDetail]);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index].quantity) * userCartState[index].price;
      setTotalAmount(sum);
    }
  }, [userCartState]);

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
        <h2 className="total-price">${totalAmount ? totalAmount : "0"}</h2>
      </div>
      <div className="cart-space">
        <h3 className="cart-sum">
          CART ({userCartState?.length ? userCartState?.length : "0"})
        </h3>
        {userCartState
          ? userCartState?.map((item, index) => {
              return (
                <div className="cart-info" key={index}>
                  <div>
                    <img
                      src={item?.productId?.images[0].url}
                      alt=""
                      className="cart-image"
                    />
                    <div
                      className="remove-box"
                      onClick={() => {
                        deleteACartProduct(item?._id);
                      }}
                    >
                      <FaTrash size={12} />
                      <p className="remove-txt">REMOVE</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="cart-name">{item?.title}</h1>
                    <p className="Cart-s">Seller: Pablo Dimension</p>
                    <p className="Carts">Size: L</p>
                    <div className="cart-s">
                      <p className="cartColor">Color:</p>
                      <ul>
                        <li
                          style={{ backgroundColor: item?.color.title }}
                          className="colorS"
                        ></li>
                      </ul>
                    </div>
                    <h3 className="cart-price">${item?.price}</h3>
                    <div className="btn-plus-minus">
                      {/* <p className="cart-count">Quantity:{item?.quantity}</p> */}
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={
                          productUpdateDetail?.quantity
                            ? productUpdateDetail?.quantity
                            : item?.quantity
                        }
                        onChange={(e) => {
                          setProductUpdateDetail({
                            cartItemId: item?._id,
                            quantity: e.target.value,
                          });
                        }}
                      />
                      <p className="cart-count">
                        Total: {item?.price * item?.quantity}
                      </p>
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
          {(totalAmount !== null || totalAmount !== 0) && (
            <div>
              {" "}
              <Link to="/contact-info" className="Link add-cart">
                <button className="add-cart">
                  <FaShoppingCart /> Checkout ({totalAmount})
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

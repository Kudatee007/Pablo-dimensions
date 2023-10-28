import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import "./Latest.css";
import grid1 from "../Img/grid1.svg";
import grid2 from "../Img/grid2.svg";
import { Link, useNavigate } from "react-router-dom";
import wish from "../Img/wish.svg";
import cart from "../Img/cart.svg";
// import { FaThermometerQuarter } from "react-icons/fa";
import {
  addToWishlist,
  getAllProducts,
} from "../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Latest = () => {
  const [grid, setGrid] = useState(false);
  const navigate = useNavigate();

  function handleGrid() {
    setGrid(!grid);
  }
  const productState = useSelector((state) => state.product.product);
  console.log(productState);
  const dispatch = useDispatch();
  console.log(productState);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    dispatch(getAllProducts());
  };
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  return (
    <div className="latest-brand">
      <h1 className="brand-txt">LATEST BRAND</h1>
      <div className="func-box">
        <button>FILTER</button>
        <button>SORT</button>
        <div className="empty-div"></div>
        <div className="grid-box">
          <img src={grid1} alt="" />
          <img src={grid2} alt="" />
        </div>
      </div>
      <div className="display-box">
        {productState
          ? productState.map((item, index) => {
              const { brand, title, price, images, totalrating, _id } = item;
              return (
                <div key={index}>
                  {/* <div> */}
                  <div className="dis-box">
                    <div className="wish-cart">
                        <img
                          src={wish}
                          alt=""
                          className="wish"
                          onClick={() => {
                            addToWish(item?._id);
                          }}
                        />
                      <img src={cart} alt="" className="cart-w" />
                    </div>
                    {/* <div className="gridImg"> */}
                    <div onClick={() => navigate("/product/" + _id)}>
                      <img src={images[0].url} alt="" className="grid-img" />
                    </div>
                    {/* <img src={shop1} alt="" className="grid-img" />
                  </div> */}
                    <h5>{brand}</h5>
                    <h6>{title}</h6>
                    <p>${price} USD</p>
                  </div>
                  {/* </div> */}
                </div>
              );
            })
          : []}
      </div>
    </div>
  );
};

export default Latest;

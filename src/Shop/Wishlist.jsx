import React, { useState, useEffect } from "react";
import wish from "../Img/carousel1.svg";
import cancel from "../Img/cancel.svg";
import "./Wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/users/userSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  
  useEffect(() => {
    getWishlistFromDb();
  }, []);
  const wishlistState = useSelector((state) => state.auth);
  console.log(wishlistState);
  return (
    <div>
      <h1 className="brand-txt">Wishlist</h1>
      {/* {wishlistState? wishlistState.map((item, index) => {
        const {brand, title, price, image} = item
        return (
          <div className="wish-list" key={index}>
            <div className="wishList">
              <img src={cancel} alt="" className="can" />
              <img src={image[0].url} alt="" className="wishImg" />
            </div>
            <h5>{brand}</h5>
            <h6>{title}</h6>
            <p>${price} USD</p>
          </div>
        );
      }) : []} */}
    </div>
  );
};

export default Wishlist;

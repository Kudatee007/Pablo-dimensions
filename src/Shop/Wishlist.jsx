import React, { useEffect } from "react";
import "./Wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/users/userSlice";
import { MdCancel } from "react-icons/md";
import { addToWishlist } from "../features/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getWishlistFromDb();
  }, []);
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };

  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };
  return (
    <div className="wish-body">
      <h1 className="brand-txt">Wishlist</h1>
      <div className="wishList">
        {wishlistState.length === 0 && <div>No Data</div>}
        {wishlistState?.map((item, index) => {
          return (
            <div className="wish-list" key={index}>
              <MdCancel
                className="Mdcancel"
                onClick={() => {
                  removeFromWishlist(item?._id);
                }}
              />
              <div className="wishList">
                <img src={item?.images[0].url} alt="" className="wishImg" />
              </div>
              <h6 className="wishTitle">{item?.title}</h6>
              <p className="wishPrice">${item?.price} USD</p>
              <div className="color-wish">
                <p className="wishColor">Color:</p>
                <ul>
                  <li
                    style={{ backgroundColor: item?.color.title }}
                    className="colors"
                  ></li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;

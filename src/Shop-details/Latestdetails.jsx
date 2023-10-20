import React, { useEffect } from "react";
import "./Latestdetails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import shoe1 from "../Img/shoe1.svg";
import shoe2 from "../Img/shoe2.svg";
import shoe3 from "../Img/shoe3.svg";
import shoe4 from "../Img/shoe4.svg";
import shoe5 from "../Img/shoe5.svg";
import plus from "../Img/plus.svg";
import { FaShoppingCart, FaPhone } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct } from "../features/products/productSlice";

const Latestdetails = () => {
  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector(state => state.product.singleproduct)
  console.log(productState);

  useEffect(() => {
    dispatch(getAProduct(getProductId));
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="latest-details">
      <div className="latest-display">
        <div className="latest-div1">
          <Carousel
            responsive={responsive}
            className="carousel-latest"
            swipeable={true}
            draggable={true}
            showDots={false}
            renderDotsOutside={false}
          >
            <div className="details">
              <img src={shoe1} alt="" className="latest-details-img1" />
            </div>
            <div>
              <img src={shoe2} alt="" className="latest-details-img1" />
            </div>
            <div>
              <img src={shoe3} alt="" className="latest-details-img1" />
            </div>
            <div>
              <img src={shoe4} alt="" className="latest-details-img1" />
            </div>
            <div>
              <img src={shoe5} alt="" className="latest-details-img1" />
            </div>
          </Carousel>
        </div>
        <div className="latest-div2">
          <h1 className="latest-name">{productState?.title}</h1>
          <p className="latest-price">${productState?.price}</p>
          <div className="size">
            <h2 className="size-txt">Size</h2>
            <div className="size-box">
              <p className="medium">M</p>
              <p className="large">L</p>
              <p className="xlarge">XL</p>
            </div>
          </div>
          <div className="color">
            <h2 className="color-txt">Color</h2>
            <div className="color-box">
              <span className="white">{productState?.color}</span>
            </div>
          </div>
          <div>
            <h2 className="description-head">PRODUCT DETAILS</h2>
            <div>
              <div className="description">
                <h3 className="description-txt">Description</h3>
                <h2 className="description-name">{productState?.title}</h2>
                <p className="description-p">
                {productState?.description}
                {/* dangerouslySetInnerHtml={{
                  _html:productState?.title
                }} */}
                </p>
              </div>
            </div>
          </div>
          <div className="button-cart">
            <button className="call">
              <FaPhone />
            </button>
            <button className="add-cart">
              {" "}
              <FaShoppingCart /> <span>ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestdetails;

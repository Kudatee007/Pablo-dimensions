import React from "react";
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

const Latestdetails = () => {
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
          <h1 className="latest-name">Pablo Dimension female Joggers</h1>
          <p className="latest-price">$8,999</p>
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
              <span className="white"></span>
              <span className="black"></span>
              <span className="orange"></span>
              <span className="green"></span>
              <span className="pink"></span>
              <span className="blue"></span>
              <span className="red"></span>
              <span className="purple"></span>
            </div>
          </div>
          <div>
            <h2 className="description-head">PRODUCT DETAILS</h2>
            <div>
              <div className="description">
                <h3 className="description-txt">Description</h3>
                <h2 className="description-name">ALEXANDER MCQUEEN</h2>
                <p className="description-p">
                  Brushstroke Harness abstract-print shirt For AW23, Alexander
                  McQueen puts a futuristic spin on sartorial silhouettes, as
                  exemplified by this shirt. Cut from stretch cotton poplin, a
                  contrasting harness detailed with the ‘Brushstroke’ print
                  interrupts the conventional collared style and gives it a
                  unique edge.
                </p>
              </div>
            </div>
          </div>
          <div className="button-cart">
            <button className="call"><FaPhone /></button>
            <button className="add-cart"> <FaShoppingCart /> <span>ADD TO CART</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestdetails;

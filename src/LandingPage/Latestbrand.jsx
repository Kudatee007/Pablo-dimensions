import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import model1 from "../Img/IMG_6125.jpg";
import model2 from "../Img/IMG_6126.jpg";
import model3 from "../Img/IMG_6127.jpg";
import "./Latestbrand.css";

const Latestbrand = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="carousel">
      <h1>Latest brand</h1>
      <Carousel responsive={responsive} className="carousel-responsive">
        <div>
          <img src={model1} alt="" className="carousel-img" />
        </div>
        <div>
          <img src={model2} alt="" className="carousel-img" />
        </div>
        <div>
          <img src={model3} alt="" className="carousel-img" />
        </div>
        <div>
          <img src={model1} alt="" className="carousel-img" />
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default Latestbrand;

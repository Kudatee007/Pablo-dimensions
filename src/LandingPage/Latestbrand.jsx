import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Latestbrand.css";
import carousel1 from "../Img/carousel1.svg";
// import carousel2 from "../Img/carousel2.svg";
// import carousel3 from "../Img/carousel3.svg";
// import carousel4 from "../Img/carousel4.svg";
// import carousel5 from "../Img/carousel5.svg";
// import carousel6 from "../Img/carousel6.svg";
import shoe1 from "../Img/shoe1.svg";
import shoe2 from "../Img/shoe2.svg";
import shoe3 from "../Img/shoe3.svg";
import shoe4 from "../Img/shoe4.svg";
import shoe5 from "../Img/shoe5.svg";
import shoe6 from "../Img/shoe6.svg";
import shoe7 from "../Img/shoe7.svg";
import shoe8 from "../Img/shoe8.svg";
import shoe9 from "../Img/shoe9.svg";
import shoe10 from "../Img/shoe10.svg";
import women1 from "../Img/women1.svg";
import women2 from "../Img/women2.svg";
import women3 from "../Img/women3.svg";
import latest1 from "../Img/latest1.svg";
import latest2 from "../Img/latest2.svg";
import latest3 from "../Img/latest3.svg";
import latest4 from "../Img/latest4.svg";
import latest5 from "../Img/latest5.svg";
import latest6 from "../Img/latest6.svg";
import latest7 from "../Img/latest7.svg";
import latest8 from "../Img/latest8.svg";
import latest9 from "../Img/latest9.svg";
import latest10 from "../Img/latest10.svg";

const Latestbrand = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1400, min: 767 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const responsive1 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1400, min: 767 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 767, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="carousel">
      {/* LATEST MEN'S BRANDS */}
      <div className="inner-carousel">
        <h1 className="latest-text">LATEST MEN'S BRANDS</h1>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          ssr={true} // means to render carousel on server-side.
          autoPlaySpeed={1000}
          // renderDotsOutside={true}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="carousel-responsive"
        >
          <div className="carousel-div">
            <img src={carousel1} alt="" className="carousel-img" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div">
            <img src={carousel1} alt="" className="carousel-img" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div">
            <img src={carousel1} alt="" className="carousel-img" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div">
            <img src={carousel1} alt="" className="carousel-img" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div">
            <img src={carousel1} alt="" className="carousel-img" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div">
            <img src={carousel1} alt="" className="carousel-img" />
            <button>Shop now</button>
          </div>
        </Carousel>
      </div>
      {/* LATEST WOMAN'S BRANDS */}
      <div className="inner-carousel">
        <h1 className="latest-text">LATEST WOMAN'S BRANDS</h1>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          autoPlaySpeed={1000}
          // renderDotsOutside={true}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="carousel-responsive"
        >
          <div className="carousel-div">
            <img src={women1} alt="" className="carousel-img" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div">
            <img src={women2} alt="" className="carousel-img" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div">
            <img src={women3} alt="" className="carousel-img" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div">
            <img src={women1} alt="" className="carousel-img" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div">
            <img src={women2} alt="" className="carousel-img" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div">
            <img src={women3} alt="" className="carousel-img" />
            <button>Shop now</button>
          </div>
        </Carousel>
      </div>
      {/* LATEST BRAND */}
      <div className="inner-carousel">
        <h1 className="latest-text">LATEST BRANDS</h1>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive1}
          ssr={true} // means to render carousel on server-side.
          autoPlaySpeed={1000}
          // renderDotsOutside={true}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="carousel-responsive"
        >
          <div className="carousel-div1">
            <img src={latest1} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={latest2} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={latest3} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={latest4} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={latest5} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={latest6} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={latest7} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={latest8} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={latest9} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={latest10} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
        </Carousel>
      </div>
      {/* LATEST SLIDES */}
      <div className="inner-carousel">
        <h1 className="latest-text">LATEST SLIDES BRANDS</h1>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive1}
          ssr={true} // means to render carousel on server-side.
          autoPlaySpeed={1000}
          // renderDotsOutside={true}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="carousel-responsive"
        >
          <div className="carousel-div1">
            <img src={shoe1} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={shoe2} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={shoe3} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={shoe4} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={shoe5} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={shoe6} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={shoe7} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={shoe8} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={shoe9} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
          <div className="carousel-div1">
            <img src={shoe10} alt="" className="carousel-img1" />
            <button>Shop now</button>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Latestbrand;

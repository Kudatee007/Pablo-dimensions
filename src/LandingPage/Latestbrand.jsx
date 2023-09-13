import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carousel1 from "../Img/carousel1.svg";
// import carousel2 from "../Img/carousel2.svg";
// import carousel3 from "../Img/carousel3.svg";
// import carousel4 from "../Img/carousel4.svg";
// import carousel5 from "../Img/carousel5.svg";
// import carousel6 from "../Img/carousel6.svg";
import "./Latestbrand.css";

const Latestbrand = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
  return (
    <div className="carousel">
      {/* LATEST MEN'S BRANDS */}
      <div className="inner-carousel">
        <h1 className="latest-text">LATEST MEN'S BRANDS</h1>
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
      {/* LATEST BRAND */}
      <div className="inner-carousel">
        <h1 className="latest-text">LATEST BRANDS</h1>
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
      {/* LATEST SLIDES */}
      <div className="inner-carousel">
        <h1 className="latest-text">LATEST SLIDES BRANDS</h1>
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
    </div>
  );
};

export default Latestbrand;

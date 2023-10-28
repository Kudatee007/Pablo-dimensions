import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Page1.css";
import { Link } from "react-router-dom";
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
import latest1 from "../Img/latest1.svg";
import { getAllProducts } from "../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Page1 = () => {
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
  const productState = useSelector((state) => state?.product?.product);
  console.log(productState);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    dispatch(getAllProducts());
  };
  const [popular, setPopular] = useState();
  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      if (element.category === "Men's Clothing") {
        data.push(element)
      }
      setPopular(data)
    }
  }, [productState]);
  console.log(popular);

  return (
    <div>
      <div className="models">
        <div className="model-label">
          <h4>NEW SEASON</h4>
          <h1>PABLO DIMENSION</h1>
        </div>
      </div>
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
            {productState
              ? productState.map((item, index) => {
                  if (item.category == "Men's Clothing") {
                    const { images } = item;
                    return (
                      <div className="carousel-div" key={index}>
                        <img
                          src={images[0].url}
                          alt=""
                          className="carousel-img"
                        />
                        <Link to="/collections">
                          <button className="shop-now">Shop now</button>
                        </Link>
                      </div>
                    );
                  }
                })
              : []}
          </Carousel>
        </div>
        {/* LATEST WOMAN'S BRANDS */}
        <div className="inner-carousel">
          <h1 className="latest-text">LATEST WOMAN'S BRANDS</h1>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            autoPlaySpeed={1000}
            // renderDotsOutside={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="carousel-responsive"
          >
            {productState
              ? productState.map((item, index) => {
                  if (item.category == "Women's Clothing") {
                    const { images } = item;
                    return (
                      <div className="carousel-div" key={index}>
                        <img
                          src={images[0].url}
                          alt=""
                          className="carousel-img"
                        />
                        <Link to="/collections">
                          <button className="shop-now">Shop now</button>
                        </Link>
                      </div>
                    );
                  }
                })
              : []}
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
            removeArrowOnDeviceType={["tablet", "mobile"]}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="carousel-responsive"
          >
            {productState
              ? productState.map((item, index) => {
                  if (item.tags == "featured") {
                    const { images } = item;
                    return (
                      <div className="carousel-div1" key={index}>
                        <img
                          src={images[0].url}
                          alt=""
                          className="carousel-img1"
                        />
                        <Link to="/collections">
                          <button className="shop-now">Shop now</button>
                        </Link>
                      </div>
                    );
                  }
                })
              : []}
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
            removeArrowOnDeviceType={["tablet", "mobile"]}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="carousel-responsive"
          >
            <div className="carousel-div1">
              <img src={shoe1} alt="" className="carousel-img1" />
              <Link to="/collections">
                <button className="shop-now">Shop now</button>
              </Link>
            </div>
            <div className="carousel-div1">
              <img src={shoe2} alt="" className="carousel-img1" />
              <Link to="/collections">
                <button className="shop-now">Shop now</button>
              </Link>
            </div>
            <div className="carousel-div1">
              <img src={shoe3} alt="" className="carousel-img1" />
              <Link to="/collections">
                <button className="shop-now">Shop now</button>
              </Link>
            </div>
            <div className="carousel-div1">
              <img src={shoe4} alt="" className="carousel-img1" />
              <Link to="/collections">
                <button className="shop-now">Shop now</button>
              </Link>
            </div>
            <div className="carousel-div1">
              <img src={shoe5} alt="" className="carousel-img1" />
              <Link to="/collections">
                <button className="shop-now">Shop now</button>
              </Link>
            </div>
            <div className="carousel-div1">
              <img src={shoe6} alt="" className="carousel-img1" />
              <Link to="/collections">
                <button className="shop-now">Shop now</button>
              </Link>
            </div>
            <div className="carousel-div1">
              <img src={shoe7} alt="" className="carousel-img1" />
              <Link to="/collections">
                <button className="shop-now">Shop now</button>
              </Link>
            </div>
            <div className="carousel-div1">
              <img src={shoe8} alt="" className="carousel-img1" />
              <Link to="/collections">
                <button className="shop-now">Shop now</button>
              </Link>
            </div>
            <div className="carousel-div1">
              <img src={shoe9} alt="" className="carousel-img1" />
              <Link to="/collections">
                <button className="shop-now">Shop now</button>
              </Link>
            </div>
            <div className="carousel-div1">
              <img src={shoe10} alt="" className="carousel-img1" />
              <Link to="/collections">
                <button className="shop-now">Shop now</button>
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Page1;

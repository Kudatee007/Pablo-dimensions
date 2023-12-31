import React, { useEffect, useState } from "react";
import "./Latestdetails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactStars from "react-rating-stars-component";
import { FaShoppingCart, FaPhone } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct } from "../features/products/productSlice";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/users/userSlice";
import wish from "../Img/wish.svg";
import {
  addToWishlist,
} from "../features/products/productSlice";

const Latestdetails = () => {
  const [color, setColor] = useState(null);
  const [star, setStar] = useState(null);
  // const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.singleproduct);
  const cartState = useSelector((state) => state.auth.cartProducts);
  console.log(productState?.tags);

  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, []);

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  const uploadCart = async () => {
    if (color === null) {
      toast.error("Please choose a color");
      return false;
    } else {
      dispatch(
        addProdToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      // navigate("/cart");
    }
  };

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

  const colorData = productState?.color;
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
              <img
                src={productState?.images[0].url}
                alt=""
                className="latest-details-img1"
              />
            </div>
            <div>
              <img
                src={productState?.images[0].url}
                alt=""
                className="latest-details-img1"
              />
            </div>
          </Carousel>
          <div className="wish-Cart">
            <img
              src={wish}
              alt=""
              className="wish"
              onClick={() => {
                addToWish(productState?._id);
              }}
            />
          </div>
          <ReactStars
            count={5}
            size={19}
            value={
              productState?.tags == "featured"
                ? 4
                : productState?.tags == "popular"
                ? 4.5
                : productState?.tags == "special"
                ? 5
                : 0
            }
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            classNames="react-icon"
          />
        </div>
        <div className="latest-div2">
          <h1 className="latest-name">{productState?.title}</h1>
          <p className="latest-price">${productState?.price}</p>
          {/* <div className="size">
            <h2 className="size-txt">Size</h2>
            <div className="size-box">
              <p
                className={`medium ${
                  selectedSize === "medium" ? "selected" : ""
                }`}
                onClick={() => setSelectedSize("medium")}
              >
                M
              </p>
              <p
                className={`large ${
                  selectedSize === "large" ? "selected" : ""
                }`}
                onClick={() => setSelectedSize("large")}
              >
                L
              </p>
              <p
                className={`xlarge ${
                  selectedSize === "xlarge" ? "selected" : ""
                }`}
                onClick={() => setSelectedSize("xlarge")}
              >
                XL
              </p>
              <p
                className={`xlarge ${
                  selectedSize === "xxlarge" ? "selected" : ""
                }`}
                onClick={() => setSelectedSize("xxlarge")}
              >
                XXL
              </p>
            </div>
          </div> */}

          <div>
            {alreadyAdded === false && (
              <div className="quant">
                <h3>Quantity :</h3>
                <div>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                    className="quantityBox"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="color">
            {alreadyAdded === false && (
              <>
                <h2 className="color-txt">Color</h2>
                <div className="color-box">
                  {/* <span className="white">{productState?.color}</span> */}
                  <ul className="colorUl">
                    {colorData &&
                      colorData.map((item, index) => {
                        return (
                          <li
                            key={index}
                            style={{ backgroundColor: item?.title }}
                            className="colors"
                            onClick={() => setColor(item?._id)}
                          ></li>
                        );
                      })}
                  </ul>
                </div>
              </>
            )}
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
            <button
              className="add-cart"
              type="button"
              onClick={() => {
                alreadyAdded ? navigate("/cart") : uploadCart();
              }}
            >
              <FaShoppingCart />{" "}
              <span>{alreadyAdded ? "Go to Cart" : "Add to Cart"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestdetails;

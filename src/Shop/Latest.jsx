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
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [tags, setTags] = useState([]);
  const productState = useSelector((state) => state?.product?.product);
  const dispatch = useDispatch();
  console.log(productState?.tags);
  // FILTER STATE
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [tag, setTag] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    let newBrands = [];
    let newCategory = [];
    let newtags = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      newCategory.push(element.category);
      newtags.push(element.tags);
      newBrands.push(element.brand);
    }
    setCategories(newCategory);
    setBrands(newBrands);
    setTags(newtags);
  }, [productState]);

  console.log(sort);

  function handleGrid() {
    setGrid(!grid);
  }

  useEffect(() => {
    getProducts();
  }, [sort, tag, category, minPrice, maxPrice]);

  const getProducts = () => {
    dispatch(
      getAllProducts({ sort, brand, tag, category, minPrice, maxPrice })
    );
  };
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  console.log([...new Set(categories)], [...new Set(tags)]);
  return (
    <div className="latest-brand">
      <h1 className="brand-txt">LATEST BRAND</h1>
      <div className="func-box">
        <div>
          <select
            name=""
            id=""
            defaultValue={"manula"}
            onChange={(e) => setSort(e.target.value)}
            className="select-option"
          >
            <option value="sortby" selected>
              SORT BY
            </option>
            <option value="title">Alphabetically, A-Z</option>
            <option value="-title">Alphabetically, Z-A</option>
            <option value="price">Price, low to high</option>
            <option value="-price">Price, high to low</option>
            <option value="createdAt">Date, old to new</option>
            <option value="-createdAt">Date, new to old</option>
          </select>
        </div>
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
                    <ReactStars
                      count={5}
                      size={19}
                      value={5}
                      edit={false}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                      classNames="react-icon"
                    />{" "}
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

import React from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import shop from "../Img/shop1.svg";
import shop1 from "../Img/shoe1.svg";
import "./Latest.css";
import grid1 from "../Img/grid1.svg";
import grid2 from "../Img/grid2.svg";
import { Link } from "react-router-dom";
import wish from "../Img/wish.svg";
import cart from "../Img/cart.svg";

const Latest = () => {
  return (
    <div className="latest-brand">
      <h1 className="brand-txt">LATEST BRAND</h1>
      <div className="func-box">
        <button>FILTER</button>
        <button>SORT</button>
        <div className="empty-div"></div>
        <div className="grid-box">
          <img src={grid1} alt="" />
          <img src={grid2} alt="" />
        </div>
      </div>
      <div className="display-box">
        <div>
          <Link to="/collection-details" className="Link">
            <div className="dis-box">
              <div className="wish-cart">
                <img src={wish} alt="" className="wish" />
                <img src={cart} alt="" className="cart-w" />
              </div>
              <div className="gridImg">
                <img src={shop} alt="" className="grid-img" />
                <img src={shop1} alt="" className="grid-img" />
              </div>
              <h5>PABLO</h5>
              <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
              <p>$45.50 USD</p>
            </div>
          </Link>
          {/* <ReactStars count={5} size={24} value={3} activeColor="#ffd700" /> */}
          <ReactStars
            count={5}
            size={19}
            value={3}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            classNames="react-icon"
          />
        </div>
        <div>
          <Link to="/collection-details" className="Link">
            <div className="dis-box">
              <div className="wish-cart">
                <img src={wish} alt="" className="wish" />
                <img src={cart} alt="" className="cart-w" />
              </div>
              <div className="gridImg">
                <img src={shop} alt="" className="grid-img" />
                <img src={shop1} alt="" className="grid-img" />
              </div>
              <h5>PABLO</h5>
              <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
              <p>$45.50 USD</p>
            </div>
          </Link>
          {/* <ReactStars count={5} size={24} value={3} activeColor="#ffd700" /> */}
          <ReactStars
            count={5}
            size={19}
            value={3}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            classNames="react-icon"
          />
        </div>
        <div>
          <Link to="/collection-details" className="Link">
            <div className="dis-box">
              <div className="wish-cart">
                <img src={wish} alt="" className="wish" />
                <img src={cart} alt="" className="cart-w" />
              </div>
              <div className="gridImg">
                <img src={shop} alt="" className="grid-img" />
                <img src={shop1} alt="" className="grid-img" />
              </div>
              <h5>PABLO</h5>
              <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
              <p>$45.50 USD</p>
            </div>
          </Link>
          {/* <ReactStars count={5} size={24} value={3} activeColor="#ffd700" /> */}
          <ReactStars
            count={5}
            size={19}
            value={3}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            classNames="react-icon"
          />
        </div>
        <div>
          <Link to="/collection-details" className="Link">
            <div className="dis-box">
              <div className="wish-cart">
                <img src={wish} alt="" className="wish" />
                <img src={cart} alt="" className="cart-w" />
              </div>
              <div className="gridImg">
                <img src={shop} alt="" className="grid-img" />
                <img src={shop1} alt="" className="grid-img" />
              </div>
              <h5>PABLO</h5>
              <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
              <p>$45.50 USD</p>
            </div>
          </Link>
          {/* <ReactStars count={5} size={24} value={3} activeColor="#ffd700" /> */}
          <ReactStars
            count={5}
            size={19}
            value={3}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            classNames="react-icon"
          />
        </div>
        <div>
          <Link to="/collection-details" className="Link">
            <div className="dis-box">
              <div className="wish-cart">
                <img src={wish} alt="" className="wish" />
                <img src={cart} alt="" className="cart-w" />
              </div>
              <div className="gridImg">
                <img src={shop} alt="" className="grid-img" />
                <img src={shop1} alt="" className="grid-img" />
              </div>
              <h5>PABLO</h5>
              <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
              <p>$45.50 USD</p>
            </div>
          </Link>
          {/* <ReactStars count={5} size={24} value={3} activeColor="#ffd700" /> */}
          <ReactStars
            count={5}
            size={19}
            value={3}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            classNames="react-icon"
          />
        </div>
        <div>
          <Link to="/collection-details" className="Link">
            <div className="dis-box">
              <div className="wish-cart">
                <img src={wish} alt="" className="wish" />
                <img src={cart} alt="" className="cart-w" />
              </div>
              <div className="gridImg">
                <img src={shop} alt="" className="grid-img" />
                <img src={shop1} alt="" className="grid-img" />
              </div>
              <h5>PABLO</h5>
              <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
              <p>$45.50 USD</p>
            </div>
          </Link>
          {/* <ReactStars count={5} size={24} value={3} activeColor="#ffd700" /> */}
          <ReactStars
            count={5}
            size={19}
            value={3}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            classNames="react-icon"
          />
        </div>
        <div>
          <Link to="/collection-details" className="Link">
            <div className="dis-box">
              <div className="wish-cart">
                <img src={wish} alt="" className="wish" />
                <img src={cart} alt="" className="cart-w" />
              </div>
              <div className="gridImg">
                <img src={shop} alt="" className="grid-img" />
                <img src={shop1} alt="" className="grid-img" />
              </div>
              <h5>PABLO</h5>
              <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
              <p>$45.50 USD</p>
            </div>
          </Link>
          {/* <ReactStars count={5} size={24} value={3} activeColor="#ffd700" /> */}
          <ReactStars
            count={5}
            size={19}
            value={3}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            classNames="react-icon"
          />
        </div>
        <div>
          <Link to="/collection-details" className="Link">
            <div className="dis-box">
              <div className="wish-cart">
                <img src={wish} alt="" className="wish" />
                <img src={cart} alt="" className="cart-w" />
              </div>
              <div className="gridImg">
                <img src={shop} alt="" className="grid-img" />
                <img src={shop1} alt="" className="grid-img" />
              </div>
              <h5>PABLO</h5>
              <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
              <p>$45.50 USD</p>
            </div>
          </Link>
          {/* <ReactStars count={5} size={24} value={3} activeColor="#ffd700" /> */}
          <ReactStars
            count={5}
            size={19}
            value={3}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            classNames="react-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Latest;

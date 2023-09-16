import React from "react";
import shop from "../Img/shop1.svg";
import "./Latest.css";
import grid1 from "../Img/grid1.svg";
import grid2 from "../Img/grid2.svg";
import { Link } from "react-router-dom";

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
        <Link to="/collection-details" className="Link">
          <div className="dis-box">
            <img src={shop} alt="" className="grid-img" />
            <h5>PABLO</h5>
            <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
            <p>$45.50 USD</p>
          </div>
        </Link>
        <Link to="/collection-details" className="Link">
          <div className="dis-box">
            <img src={shop} alt="" className="grid-img" />
            <h5>PABLO</h5>
            <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
            <p>$45.50 USD</p>
          </div>
        </Link>
        <Link to="/collection-details" className="Link">
          <div className="dis-box">
            <img src={shop} alt="" className="grid-img" />
            <h5>PABLO</h5>
            <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
            <p>$45.50 USD</p>
          </div>
        </Link>
        <Link to="/collection-details" className="Link">
          <div className="dis-box">
            <img src={shop} alt="" className="grid-img" />
            <h5>PABLO</h5>
            <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
            <p>$45.50 USD</p>
          </div>
        </Link>
        <Link to="/collection-details" className="Link">
          <div className="dis-box">
            <img src={shop} alt="" className="grid-img" />
            <h5>PABLO</h5>
            <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
            <p>$45.50 USD</p>
          </div>
        </Link>
        <Link to="/collection-details" className="Link">
          <div className="dis-box">
            <img src={shop} alt="" className="grid-img" />
            <h5>PABLO</h5>
            <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
            <p>$45.50 USD</p>
          </div>
        </Link>
        <Link to="/collection-details" className="Link">
          <div className="dis-box">
            <img src={shop} alt="" className="grid-img" />
            <h5>PABLO</h5>
            <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
            <p>$45.50 USD</p>
          </div>
        </Link>
        <Link to="/collection-details" className="Link">
          <div className="dis-box">
            <img src={shop} alt="" className="grid-img" />
            <h5>PABLO</h5>
            <h6>FLAIR African Print mini skirt -SAMPLE SALE</h6>
            <p>$45.50 USD</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Latest;

import React, { useState } from "react";
import "./Navbar.css";
import Marquee from "react-fast-marquee";
import hamburger from "../Img/hamburger.svg";
import pabloLogo from "../Img/pablologo.svg";
import pabloblacklogo from "../Img/pabloblacklogo.svg";
import search from "../Img/search.svg";
import cart from "../Img/cart.svg";
import profile from "../Img/profile.svg";
import plus from "../Img/plus.svg";
import minus from "../Img/minus.svg";
import lightcancel from "../Img/lightcancel.svg";
import lightplus from "../Img/lightplus.svg";
import lightminus from "../Img/lightminus.svg";
import insta from "../Img/insta.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BsCart4, BsFillPersonFill, BsPerson } from "react-icons/bs";
import { TbBrandWish } from "react-icons/tb";

const Navbar = () => {
  const authState = useSelector((state) => state?.auth);
  const [total, setTotal] = useState(null);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth.cartProducts);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index].quantity) * Number(cartState[index].price);
      setTotal(sum);
    }
  }, [cartState]);
  console.log(cartState);
  const [side, setSide] = useState(false);
  const [latest, setLatest] = useState(false);
  const [women, setWomen] = useState(false);
  const [men, setMen] = useState(false);
  const [newMen, setNewMen] = useState(false);
  const [newWomen, setNewWomen] = useState(false);
  const [newBoys, setNewBoys] = useState(false);
  const [newGirls, setNewGirls] = useState(false);
  const [menCloth, setMenCloth] = useState(false);
  const [menAccess, setMenAccess] = useState(false);
  const [menFoot, setMenFoots] = useState(false);
  const [womenCloth, setWomenCloth] = useState(false);
  const [womenAccess, setWomenAccess] = useState(false);
  const [womenFoot, setWomenFoot] = useState(false);
  const [latestIcon, setLatestIcon] = useState(lightplus);
  const [menIcon, setMenIcon] = useState(lightplus);
  const [womenIcon, setWomenIcon] = useState(lightplus);
  const [newmenIcon, setNewmenIcon] = useState(plus);
  const [newomenIcon, setNewomenIcon] = useState(plus);
  const [newBoyIcon, setNewBoyIcon] = useState(plus);
  const [newGirlIcon, setNewgirlIcon] = useState(plus);
  const [clothIcon, setClothIcon] = useState(plus);
  const [accessIcon, setAccessIcon] = useState(plus);
  const [menFootIcon, setMenFootIcon] = useState(plus);
  const [womenFootIcon, setWomenFootIcon] = useState(plus);
  const [womenClothIcon, setWomenClothIcon] = useState(plus);
  const [womenAccessIcon, setWomenAccessIcon] = useState(plus);

  function handleSide() {
    setSide(!side);
  }
  function handleWomen() {
    setWomen(!women);
    setMen(false);
    setLatest(false);
    setMenIcon(lightplus);
    setLatestIcon(lightplus);
    if (womenIcon == lightplus) {
      setWomenIcon(lightminus);
    } else {
      setWomenIcon(lightplus);
    }
  }
  function handleMen() {
    setMen(!men);
    setWomen(false);
    setLatest(false);
    setWomenIcon(lightplus);
    setLatestIcon(lightplus);
    if (menIcon == lightplus) {
      setMenIcon(lightminus);
    } else {
      setMenIcon(lightplus);
    }
  }
  function handleLatest() {
    setLatest(!latest);
    setMen(false);
    setWomen(false);
    setMenIcon(lightplus);
    setWomenIcon(lightplus);
    if (latestIcon == lightplus) {
      setLatestIcon(lightminus);
    } else {
      setLatestIcon(lightplus);
    }
  }
  function handleNewMen() {
    setNewMen(!newMen);
    setNewWomen(false);
    setNewBoys(false);
    setNewGirls(false);
    setNewomenIcon(plus);
    setNewBoyIcon(plus);
    setNewgirlIcon(plus);
    if (newmenIcon == plus) {
      setNewmenIcon(minus);
    } else {
      setNewmenIcon(plus);
    }
  }
  function handleNewWomen() {
    setNewWomen(!newWomen);
    setNewMen(false);
    setNewBoys(false);
    setNewGirls(false);
    setNewmenIcon(plus);
    setNewBoyIcon(plus);
    setNewgirlIcon(plus);
    if (newomenIcon == plus) {
      setNewomenIcon(minus);
    } else {
      setNewomenIcon(plus);
    }
  }
  function handleNewBoys() {
    setNewBoys(!newBoys);
    setNewWomen(false);
    setNewMen(false);
    setNewGirls(false);
    setNewmenIcon(plus);
    setNewomenIcon(plus);
    setNewgirlIcon(plus);
    if (newBoyIcon == plus) {
      setNewBoyIcon(minus);
    } else {
      setNewBoyIcon(plus);
    }
  }
  function handleNewGirls() {
    setNewGirls(!newGirls);
    setNewWomen(false);
    setNewMen(false);
    setNewBoys(false);
    setNewmenIcon(plus);
    setNewomenIcon(plus);
    setNewBoyIcon(plus);
    if (newGirlIcon == plus) {
      setNewgirlIcon(minus);
    } else {
      setNewgirlIcon(plus);
    }
  }

  function handleMenCloth() {
    setMenCloth(!menCloth);
    setMenAccess(false);
    setMenFoots(false);
    setAccessIcon(plus);
    setMenFootIcon(plus);
    if (clothIcon == plus) {
      setClothIcon(minus);
    } else {
      setClothIcon(plus);
    }
  }
  function handleMenAccess() {
    setMenAccess(!menAccess);
    setMenCloth(false);
    setMenFoots(false);
    setClothIcon(plus);
    setMenFootIcon(plus);
    if (accessIcon == plus) {
      setAccessIcon(minus);
    } else {
      setAccessIcon(plus);
    }
  }
  function handleMenFoot() {
    setMenFoots(!menFoot);
    setMenAccess(false);
    setMenCloth(false);
    setClothIcon(plus);
    setAccessIcon(plus);
    if (menFootIcon == plus) {
      setMenFootIcon(minus);
    } else {
      setMenFootIcon(plus);
    }
  }
  function handleWomenCloth() {
    setWomenCloth(!womenCloth);
    setWomenAccess(false);
    setWomenFoot(false);
    setWomenAccessIcon(plus);
    setWomenFootIcon(plus);
    if (womenClothIcon == plus) {
      setWomenClothIcon(minus);
    } else {
      setWomenClothIcon(plus);
    }
  }
  function handleWomenAccess() {
    setWomenAccess(!womenAccess);
    setWomenCloth(false);
    setWomenFoot(false);
    setWomenClothIcon(plus);
    setWomenFootIcon(plus);
    if (womenAccessIcon == plus) {
      setWomenAccessIcon(minus);
    } else {
      setWomenAccessIcon(plus);
    }
  }
  function handleWomenFoot() {
    setWomenFoot(!womenFoot);
    setWomenAccess(false);
    setWomenCloth(false);
    setWomenClothIcon(plus);
    setWomenAccessIcon(plus);
    if (womenFootIcon == plus) {
      setWomenFootIcon(minus);
    } else {
      setWomenFootIcon(plus);
    }
  }
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="navBar">
      <Marquee className="pabloHead">
        <h1 className="pb-txt">Pablo_Dimensions</h1>
      </Marquee>
      {/* <div >
        <h1>Pablo_Dimensions</h1>
      </div> */}
      <nav className="Nav">
        <img
          src={hamburger}
          alt=""
          className="hamburger"
          onClick={handleSide}
        />
        <div className={side ? "side" : "side-NX"}>
          <img
            src={lightcancel}
            alt=""
            className="cancel"
            onClick={handleSide}
          />
          <div className="first-dropdown">
            <div className="headTag">
              <Link to="/" className="Link">
                <h2 className="first-list">HOME</h2>
              </Link>
            </div>
            <div className="headTag">
              <div className="plus-div" onClick={handleLatest} id="Latest">
                <h2 className="first-list">LATEST</h2>
                <img src={latestIcon} alt="" className="plus-icon" />
              </div>
              <div className={latest ? "list" : "list-NX"} id="latest">
                <div className="second-list">
                  <div className="plus-div" onClick={handleNewMen}>
                    <h3>NEW MENS</h3>
                    <img src={newmenIcon} alt="" className="plus-icon" />
                  </div>
                  <ul
                    className={newMen ? "secondList" : "secondList-NX"}
                    id="latests"
                  >
                    <li>T-shirts</li>
                    <li>Shirts</li>
                    <li>Sweatshirts</li>
                    <li>Sweatpants</li>
                    <li>Polo Shirts</li>
                    <li>Shorts</li>
                    <li>Jackets & Coats</li>
                    <li>Swimwear</li>
                    <li>Footwear</li>
                  </ul>
                </div>
                <div className="second-list">
                  <div onClick={handleNewWomen} className="plus-div">
                    <h3>NEW WOMANS</h3>
                    <img src={newomenIcon} alt="" className="plus-icon" />
                  </div>
                  <ul className={newWomen ? "secondList" : "secondList-NX"}>
                    <li className="dress">Dresses</li>
                    <li>T-Shirts</li>
                    <li>Jacket & Coats</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Shoes</li>
                    <li>Bags</li>
                    <li>Bodysuits</li>
                    <li>Jewellery</li>
                    <li>Footwear</li>
                  </ul>
                </div>
                <div className="second-list">
                  <div className="plus-div" onClick={handleNewBoys}>
                    <h3>NEW BOYS</h3>
                    <img src={newBoyIcon} alt="" className="plus-icon" />
                  </div>
                  <ul className={newBoys ? "secondList" : "secondList-NX"}>
                    <li>T-shirts</li>
                    <li>Polo Shirts</li>
                    <li>Shorts</li>
                    <li>Shirts</li>
                    <li>Jeans</li>
                    <li>Dungarees</li>
                    <li>Jackets and Coats</li>
                    <li>Sweatshirts & Hoodies</li>
                    <li>Footwear</li>
                  </ul>
                </div>
                <div className="second-list">
                  <div className="plus-div" onClick={handleNewGirls}>
                    <h3>NEW GIRLS</h3>
                    <img src={newGirlIcon} alt="" className="plus-icon" />
                  </div>
                  <ul className={newGirls ? "secondList" : "secondList-NX"}>
                    <li>Tops</li>
                    <li>Dresses</li>
                    <li>Jackets and Coats</li>
                    <li>Jeans and Leggings</li>
                    <li>Shorts and Skirts</li>
                    <li>Sweatshirts</li>
                    <li>Swimwear</li>
                    <li>Accessories</li>
                    <li>Footwear</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="headTag">
              <div className="plus-div" onClick={handleMen} id="Men">
                <h2 className="first-list">MEN</h2>
                <img src={menIcon} alt="" className="plus-icon" />
              </div>
              <div className={men ? "list" : "list-NX"} id="men">
                <div className="second-list">
                  <div className="plus-div" onClick={handleMenCloth}>
                    <h3>CLOTHING</h3>
                    <img src={clothIcon} alt="" className="plus-icon" />
                  </div>
                  <ul className={menCloth ? "secondList" : "secondList-NX"}>
                    <li>T-Shirts</li>
                    <li>Polo Shirts</li>
                    <li>Blazers</li>
                    <li>Coats & Jackets</li>
                    <li>Sweat Shirts</li>
                    <li>Knitwear</li>
                    <li>Jeans</li>
                    <li>Shirts</li>
                    <li>Shorts</li>
                    <li>Sweat Pants</li>
                    <li>Swimwear</li>
                    <li>Trousers</li>
                    <li>Activewear</li>
                  </ul>
                </div>
                <div className="second-list">
                  <div className="plus-div" onClick={handleMenAccess}>
                    <h3>ACCESSORIES</h3>
                    <img src={accessIcon} alt="" className="plus-icon" />
                  </div>
                  <ul className={menAccess ? "secondList" : "secondList-NX"}>
                    <li>Bags</li>
                    <li>Belts</li>
                    <li>Hats</li>
                    <li>Caps</li>
                    <li>Scarfs And Gloves</li>
                    <li>Wallets</li>
                    <li>Masks</li>
                    <li>Tech Accessories</li>
                    <li>Jewellery</li>
                    <li>Underwear</li>
                    <li>Socks</li>
                    <li>Sunglasses</li>
                    <li>Keychains</li>
                    <li>Ties</li>
                  </ul>
                </div>
                <div className="second-list">
                  <div className="plus-div" onClick={handleMenFoot}>
                    <h3>FOOTWEAR</h3>
                    <img src={menFootIcon} alt="" className="plus-icon" />
                  </div>
                  <ul className={menFoot ? "secondList" : "secondList-NX"}>
                    <li>Shoes</li>
                    <li>Sneakers</li>
                    <li>Slides and Sandals</li>
                    <li>Boots</li>
                    <li>Loafers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="headTag">
              <div className="plus-div" onClick={handleWomen} id="Women">
                <h2 className="first-list">WOMEN</h2>
                <img src={womenIcon} alt="" className="plus-icon" />
              </div>
              <div className={women ? "list" : "list-NX"} id="women">
                <div className="second-list">
                  <div className="plus-div" onClick={handleWomenCloth}>
                    <h3>CLOTHING</h3>
                    <img src={womenClothIcon} alt="" className="plus-icon" />
                  </div>
                  <ul className={womenCloth ? "secondList" : "secondList-NX"}>
                    <li>Tops</li>
                    <li>Jeans and Trousers</li>
                    <li>Shorts & Skirts</li>
                    <li>Jackets & Coats</li>
                    <li>T-Shirts</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Bodysuits</li>
                    <li>Dresses</li>
                  </ul>
                </div>
                <div className="second-list">
                  <div className="plus-div" onClick={handleWomenAccess}>
                    <h3>ACCESSORIES</h3>
                    <img src={womenAccessIcon} alt="" className="plus-icon" />
                  </div>
                  <ul className={womenAccess ? "secondList" : "secondList-NX"}>
                    <li>Bags and Purses</li>
                    <li>Belts</li>
                    <li>Jewellery</li>
                    <li>Masks</li>
                    <li>Hats and Scarves</li>
                    <li>Socks and Tights</li>
                  </ul>
                </div>
                <div className="second-list">
                  <div className="plus-div" onClick={handleWomenFoot}>
                    <h3>FOOTWEAR</h3>
                    <img src={womenFootIcon} alt="" className="plus-icon" />
                  </div>
                  <ul className={womenFoot ? "secondList" : "secondList-NX"}>
                    <li>Boots</li>
                    <li>Sneakers</li>
                    <li>Heels</li>
                    <li>Sandals and Slides</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="buttons">
              <Link className="Link" to="/my-orders">
                <button className="btn-order">My Orders</button>
              </Link>
              <button onClick={handleLogOut} className="btn-logout">
                Log Out
              </button>
            </div> */}
            <div className="black-logo">
              <img src={pabloblacklogo} alt="" />
            </div>
          </div>
        </div>
        <Link className="Link" to="/wishlist">
          <TbBrandWish className="cart" />
        </Link>
        <Link to="/" className="Link">
          <img src={pabloLogo} alt="" className="pablo-logo" />
        </Link>
        <Link to="/cart" className="Link">
          <div className="cartHead">
            <div className="cartHeadP">
              <p>{cartState?.length}</p>
            </div>
            <BsCart4 className="cart" />
          </div>
          {/* <p>$ {total ? total : 0}</p> */}
        </Link>
        <Link
          to={authState?.user === null ? "/login" : "/my-profile"}
          className="Link"
        >
          {/* <img src={profile} alt="" className="profile" /> */}

          {authState?.user === null ? (
            // <p className="profileState">Login to your account</p>
            <BsPerson className="cart" />
          ) : (
            // <p className="profileState">{authState?.user?.firstname}</p>
            <BsFillPersonFill className="cart" />
          )}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

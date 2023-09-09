import React, { useState } from "react";
import "./Navbar.css";
import hamburger from "../Img/hamburger.svg";
import pabloLogo from "../Img/pablologo.svg";
import search from "../Img/search.svg";
import cart from "../Img/cart.svg";
import profile from "../Img/profile.svg";

const Navbar = () => {
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
  //   const [latest, seeMen] = useState(false);

  function handleSide() {
    setSide(!side);
  }
  function handleWomen() {
    setWomen(!women);
    setMen(false);
    setLatest(false);
  }
  function handleMen() {
    setMen(!men);
    setWomen(false);
    setLatest(false);
  }
  function handleLatest() {
    setLatest(!latest);
    setMen(false);
    setWomen(false);
  }
  function handleNewMen() {
    setNewMen(!newMen);
    setNewWomen(false);
    setNewBoys(false);
    setNewGirls(false);
  }
  function handleNewWomen() {
    setNewWomen(!newWomen);
    setNewMen(false);
    setNewBoys(false);
    setNewGirls(false);
  }
  function handleNewBoys() {
    setNewBoys(!newBoys);
    setNewWomen(false);
    setNewMen(false);
    setNewGirls(false);
  }
  function handleNewGirls() {
    setNewGirls(!newGirls);
    setNewWomen(false);
    setNewMen(false);
    setNewBoys(false);
  }

  function handleMenCloth() {
    setMenCloth(!menCloth);
  }
  function handleMenAccess() {
    setMenAccess(!menAccess);
  }
  function handleMenFoot() {
    setMenFoots(!menFoot);
  }
  function handleWomenCloth() {
    setWomenCloth(!womenCloth);
  }
  function handleWomenAccess() {
    setWomenAccess(!womenAccess);
  }
  function handleWomenFoot() {
    setWomenFoot(!womenFoot);
  }
  return (
    <div className="navBar">
      <div className="pabloHead">
        <h1>Pablo_Dimensions</h1>
      </div>
      <nav className="Nav">
        <img
          src={hamburger}
          alt=""
          className="hamburger"
          onClick={handleSide}
        />
        <div className={side ? "side" : "side-NX"}>
          <img src={hamburger} alt="" className="cancel" onClick={handleSide} />
          <ul className="first-dropdown">
            <li className="first-list">HOME</li>
            <hr className="line"/>
            <div>
              <li onClick={handleLatest} className="first-list">
                LATEST
              </li>

              <div className={latest ? "list" : "list-NX"}>
                <div className="second-list">
                  <h3 onClick={handleNewMen}>NEW MENS</h3>
                  <ul className={newMen ? "secondList" : "secondList-NX"}>
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
                  <h3 onClick={handleNewWomen}>NEW WOMANS</h3>
                  <ul className={newWomen ? "secondList" : "secondList-NX"}>
                    <li>Dresses</li>
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
                  <h3 onClick={handleNewBoys}>NEW BOYS</h3>
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
                  <h3 onClick={handleNewGirls}>NEW GIRLS</h3>
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
              <hr className="line"/>
            </div>
            <div>
              <li onClick={handleMen} className="first-list">
                MEN
              </li>
              <div className={men ? "list" : "list-NX"}>
                <div className="second-list">
                  <h3 onClick={handleMenCloth}>CLOTHING</h3>
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
                  <h3 onClick={handleMenAccess}>ACCESSORIES</h3>
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
                  <h3 onClick={handleMenFoot}>FOOTWEAR</h3>
                  <ul className={menFoot ? "secondList" : "secondList-NX"}>
                    <li>Shoes</li>
                    <li>Sneakers</li>
                    <li>Slides and Sandals</li>
                    <li>Boots</li>
                    <li>Loafers</li>
                  </ul>
                </div>
              </div>
              <hr className="line"/>
            </div>
            <div>
              <li onClick={handleWomen} className="first-list">
                WOMEN
              </li>
              <div className={women ? "list" : "list-NX"}>
                <div className="second-list">
                  <h3 onClick={handleWomenCloth}>CLOTHING</h3>
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
                  <h3 onClick={handleWomenAccess}>ACCESSORIES</h3>
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
                  <h3 onClick={handleWomenFoot}>FOOTWEAR</h3>
                  <ul className={womenFoot ? "secondList" : "secondList-NX"}>
                    <li>Boots</li>
                    <li>Sneakers</li>
                    <li>Heels</li>
                    <li>Sandals and Slides</li>
                  </ul>
                </div>
              </div>
              <hr className="line"/>
            </div>
          </ul>
          <div className="icon-foot">
            <hr className="line"/>
            <h1 className="h11">fwrwrwrw</h1>
          </div>
        </div>
        <img src={search} alt="" className="search" />
        <img src={pabloLogo} alt="" className="pablo-logo" />
        <img src={profile} alt="" className="profile" />
        <img src={cart} alt="" className="cart" />
      </nav>
      <div></div>
    </div>
  );
};

export default Navbar;

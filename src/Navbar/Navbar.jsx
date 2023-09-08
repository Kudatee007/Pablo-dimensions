import React from 'react'
import "./Navbar.css"
import hamburger from "../Img/hamburger.svg"
import pabloLogo from "../Img/pablologo.svg"
import search from "../Img/search.svg"
import cart from "../Img/cart.svg"
import profile from "../Img/profile.svg"

const Navbar = () => {
  return (
    <div className='navBar'>
        <div className='pabloHead'>
            <h1>Pablo_Dimensions</h1>
        </div>
        <div className='Nav'>
            <img src={hamburger} alt="" className='hamburger'/>
            <img src={search} alt="" className='search'/>
            <img src={pabloLogo} alt="" className='pablo-logo'/>
            <img src={profile} alt="" className='profile'/>
            <img src={cart} alt="" className='cart'/>
        </div>
    </div>
  )
}

export default Navbar
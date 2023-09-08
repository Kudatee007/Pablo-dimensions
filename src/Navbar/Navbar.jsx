import React from 'react'
import "./Navbar.css"
import hamburger from "../Img/icon-park-outline_hamburger-button.svg"
import pabloLogo from "../Img/pablologo.jpg"
import search from "../Img/www.ofuure.com by html.to.design ❤️ FREE version - 20/07/Link - Search.svg"
import cart from "../Img/www.ofuure.com by html.to.design ❤️ FREE version - 20/07/presentation.Icon.svg"
import profile from "../Img/www.ofuure.com by html.to.design ❤️ FREE version - 20/07/Link.svg"

const Navbar = () => {
  return (
    <div className='navBar'>
        <div className='pabloHead'>
            <h1>Pablo_Dimensions</h1>
        </div>
        <div className='Nav'>
            <img src={hamburger} alt="" className='hamburger'/>
            <img src={profile} alt="" className='profile'/>
            <img src={pabloLogo} alt="" className='pablo-logo'/>
            <img src={search} alt="" className='search'/>
            <img src={cart} alt="" className='cart'/>
        </div>
    </div>
  )
}

export default Navbar
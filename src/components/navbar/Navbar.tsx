import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar nav'>
      <h1 className='navbar__logo'>LOGO</h1>
      <div className="navbar__menu">
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar__blog">
        <a href="#about">Blog</a>
      </div>
    </div>
  )
}

export default Navbar

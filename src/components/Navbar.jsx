import React from 'react'
import "./Navbar.css"
import logo from ".././assets/vb_logo.jpeg"
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <div className='container'>
      <div className='navbar-links'>
        <div className='navbar-link'>
          <NavLink className={({isActive}) => isActive ? "active-nav-link" : ""} to={"/"}>Form</NavLink>
        </div>
        <div className='navbar-link'>
          <NavLink className={({isActive}) => isActive ? "active-nav-link" : ""} to={"/profile"}>Profile</NavLink>
        </div>
      </div>
      <div className='navbar-logo-container'>
        <img className='navbar-logo' src={logo} />
      </div>
    </div>
  )
}


import React, { useRef , useEffect} from 'react'
import { useState } from 'react';
import "./Navebar.css"
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import bar_icon from "../../assets/bar_icon.png"
import {logout } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

function Navebar() {
  const [showMenu, setShowMenu] = useState(false);

  const navref = useRef();

  useEffect (() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navref.current.classList.add("dark")
      }else {
        navref.current.classList.remove("dark")
      }

    })
  },[])

  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await logout();
    navigate('/login');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

  return (
    <div ref={navref} className='nav-bar'>
      <div className='left-bar'>
        <div className='bar-icon' onClick={()=>setShowMenu(!showMenu)}>
          <img src={bar_icon} alt="" />
        </div>
        <img src={logo} alt="" />

          <ul className={showMenu ? "active-menu" : ""}>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        
      </div>
      <div className='right-bar'>
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className='caret-container'>
          <img src={profile_img} alt="" className='frofile-pick' />
          <span className='caret'><img src={caret_icon} alt="" className='icons' /></span>
          <p onClick={()=>handleLogout()} >Sing Out of Netflix</p>
        </div>
      </div>
    </div>
  )
}

export default Navebar

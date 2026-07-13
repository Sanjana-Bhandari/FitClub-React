import React, { useState, useEffect } from 'react'
import './Header.css'
import Logo from '../assets/logo.png'
import Bars from '../assets/bars.png'
import {Link} from "react-scroll"
const Header = () => {
 const [mobile, setMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const handleResize = () => {
    setMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);


  const [menuOpened, setMenuOpened] = useState(false)
  return (
   <div className="header">
    <img src={Logo} alt="" className='logo' />
    {mobile ? (
  <>
    {!menuOpened ? (
      <div
        style={{
          backgroundColor: "var(--appColor)",
          padding: "0.5rem",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setMenuOpened(true)}
      >
        <img
          src={Bars}
          alt=""
          style={{ width: "1.5rem", height: "1.5rem" }}
        />
      </div>
    ) : (
      <ul className="header-menu">
        <li
          style={{ alignSelf: "flex-end", cursor: "pointer" }}
          onClick={() => setMenuOpened(false)}
        >
          ✕
        </li>

        <li>
          <Link
            to="home"
            smooth={true}
            onClick={() => setMenuOpened(false)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="programs"
            smooth={true}
            onClick={() => setMenuOpened(false)}
          >
            Programs
          </Link>
        </li>

        <li>
          <Link
            to="reasons"
            smooth={true}
            onClick={() => setMenuOpened(false)}
          >
            Why Us
          </Link>
        </li>

        <li>
          <Link
            to="plans"
            smooth={true}
            onClick={() => setMenuOpened(false)}
          >
            Plans
          </Link>
        </li>

        <li>
          <Link
            to="testimonials"
            smooth={true}
            onClick={() => setMenuOpened(false)}
          >
            Testimonials
          </Link>
        </li>
      </ul>
    )}
  </>
) : (
  <ul className="header-menu">
    <li><Link to="home" smooth={true}>Home</Link></li>
    <li><Link to="programs" smooth={true}>Programs</Link></li>
    <li><Link to="reasons" smooth={true}>Why Us</Link></li>
    <li><Link to="plans" smooth={true}>Plans</Link></li>
    <li><Link to="testimonials" smooth={true}>Testimonials</Link></li>
  </ul>
)}
   </div>
  )
}
export default Header

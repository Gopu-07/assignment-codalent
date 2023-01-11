import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = () => {
  return (
    <div className="main">
      <div className="header">
        <div className="left">
          <h2>Pied Piper</h2>
        </div>
        <div className="middle">
          <ul>
            <li>
              <NavLink to="#">Home</NavLink>
            </li>
            <li>
              <NavLink to="#">Products</NavLink>
            </li>
            <li>
              <NavLink to="#">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="#">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="right {className}">
          <i class="fa-solid fa-bars menu "></i>
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
      </div>
      <div className="main-body">
        <h1>Beautiful analytics to grow smarter</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage,
          <br /> and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="buttons">
          <button className="demo">
            <i class="fa-regular fa-circle-play"></i>Demo
          </button>
          <button className="signin">Sign up</button>
        </div>
        <div className="banner">
          <div className="img">
            <img src="MacBook Pro 16.png" />
            <img className="inner-img2 inner-img" src="mobile.png" />
            <img
              className="inner-img"
              src="Screen mockup (REPLACE FILL) (1).png"
            />
            <img className="shadow" src="Shadow.png" />
            <img className="camera" src="camera.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

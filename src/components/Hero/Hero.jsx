import React from "react";
import "./Hero.css";
import Profile_Img from "/profile_img.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="home" className="hero">
      <img src={Profile_Img} alt="" />
      <h1>
        <span>I'm Rohan Sharma,</span> frontend developer based in India
      </h1>
      <p>
        I am frontend developer from Uttar Pradesh, India with 1+ year of
        experience in MERN
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;

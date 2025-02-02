import React from "react";
import "./Hero.css";
import Profile_Img from "../../assets/imgpsh_fullsize_anim.jpeg";

function Hero() {
  return (
    <div className="hero">
      <img src={Profile_Img} alt="" />
      <h1>
        <span>I'm Rohan Sharma,</span> frontend developer based in India
      </h1>
      <p>
        I am frontend developer from Uttar Pradesh, India with 1+ year of
        experience in MERN
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;

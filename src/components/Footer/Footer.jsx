import React from "react";
import "./Footer.css";
import footer_logo from "/32px-R_logo.svg.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footter-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I am a frontend developer from, India with 1+ years of experience in
            companies like Sytaldyn.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={"/usericon.svg"} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2023 Rohan Sharma. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React, { useState } from "react";
import "../Navbar/Navbar.css";
import underline_img from "/underlineImg.svg";

import logo from "../../assets/32px-R_logo.svg.png";
import { use } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            {" "}
            <p
              onClick={() => {
                setmenu("home");
              }}
            >
              Home
            </p>
          </AnchorLink>

          {menu === "home" ? <img src={underline_img} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              onClick={() => {
                setmenu("about");
              }}
            >
              About Me
            </p>
          </AnchorLink>
          {menu === "about" ? <img src={underline_img} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p
              onClick={() => {
                setmenu("services");
              }}
            >
              Services
            </p>
          </AnchorLink>{" "}
          {menu === "services" ? <img src={underline_img} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p
              onClick={() => {
                setmenu("work");
              }}
            >
              Portfolio
            </p>
          </AnchorLink>
          {menu === "work" ? <img src={underline_img} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              onClick={() => {
                setmenu("contact");
              }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline_img} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;

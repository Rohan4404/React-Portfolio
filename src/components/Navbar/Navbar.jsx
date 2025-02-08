import React, { useRef, useState } from "react";
import "../Navbar/Navbar.css";
import underline_img from "/underlineImg.svg";
import logo from "/32px-R_logo.svg.png";
import { use } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "/toggle_icon.svg";
import menu_close from "/cancel.svg";

function Navbar() {
  const [menu, setmenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mov-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mov-close"
        />
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

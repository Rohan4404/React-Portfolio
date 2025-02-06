import React from "react";
import "./About.css";
import About_me from "../../assets/About_Me.svg";
import Profile_img from "../../assets/imgpsh_fullsize_anim.jpeg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={About_me} alt="" />
      </div>
      -
      <div className="about-sections">
        <div className="about-left">
          <img src={Profile_img} alt="" />
        </div>
        <div className="about-rignt">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "50%" }} />
            </div>{" "}
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>{" "}
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>{" "}
            <div className="about-skill">
              <p>THREE JS</p>
              <hr style={{ width: "50%" }} />
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>LIVE PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;

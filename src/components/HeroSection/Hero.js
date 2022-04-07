import React, { useState } from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import nowar from "../../images/nowar.mp4";
import resume from "../../images/resume.pdf"


function Hero() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((show) => !show);
  };
  return (
    <div className="hero_container"  >
      <Navbar toggle={toggle} />
     
      <video autoPlay loop muted >
        <source  src={nowar} type="video/mp4" />
      </video>
      <div className="content">
        <div className="content_items">
          <h1>Welcome to my personal Portfolio</h1>
          <p>
          A Front-end Developer based in Montreal
          </p>

          <div className="btn"><em><a style={{textDecoration:"none", color:"white", borderRadius:"7px"}} href={resume} target="_blank"> Resume </a></em></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
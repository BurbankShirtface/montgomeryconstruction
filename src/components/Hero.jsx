import React from "react";

import Nav from "./Nav";

import Logo from "../assets/MontgomeryConstructionLogo.png";

import "./Hero.css";
import "./Nav.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <Nav />
      <img
        src={Logo}
        alt="Montgomery Construction logo"
        className="hero-logo"
      />
    </div>
  );
};

export default Hero;

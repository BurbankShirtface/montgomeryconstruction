import React from "react";
import { Link } from "react-scroll";

import NavLogo from "../assets/MontgomeryConstructionLogoSquare.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <img
        className="nav-logo"
        src={NavLogo}
        alt="Montgomery Construction logo"
      />
      <div className="nav-links-container">
        {/* <button className="nav-link gold">About Us</button>
        <button className="nav-link gold">Our Work</button>
        <button className="nav-link gold">Our Promise</button> */}
        <Link
          to="contact-container"
          spy={true}
          smooth={true}
          duration={900}
          className="nav-btn bold gold"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Nav;

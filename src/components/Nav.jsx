import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import NavLogo from "../assets/MontgomeryConstructionLogoSquare.png";
import Insta from "../assets/instagram1.png";

const Nav = () => {
  const [showStickyContact, setShowStickyContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.85; // 85vh - matching hero container height
      const scrollPosition = window.scrollY;
      setShowStickyContact(scrollPosition > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
          {/* <img src={Insta}/>*/}
          <a
            className="insta-link"
            href="https://www.instagram.com/montgomeryconstructionottawa/"
            target="_blank"
          >
            <img src={Insta} />
          </a>

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

      <Link
        to="contact-container"
        spy={true}
        smooth={true}
        duration={900}
        className={`sticky-contact bold gold ${
          showStickyContact ? "visible" : ""
        }`}
      >
        Contact Us
      </Link>
    </>
  );
};

export default Nav;

import React from "react";
import Logo from "../assets/MontgomeryConstructionLogo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <img
            src={Logo}
            alt="Montgomery Construction Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            Building trust through excellence in every project
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <p className="footer-text">(519) 441-0833</p>
          <p className="footer-text">ryan@montgomeryconstruction.ca</p>
          <p className="footer-text">Ottawa & Surrounding Area</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Services</h4>
          <p className="footer-text">Bathroom Renovations</p>
          <p className="footer-text">Kitchen Remodels</p>
          <p className="footer-text">Custom Built-ins</p>
          <p className="footer-text">Exterior Projects</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <a href="#about" className="footer-link">
            About Us
          </a>
          <a href="#projects" className="footer-link">
            Our Work
          </a>
          <a href="#contact" className="footer-link">
            Contact Us
          </a>
          <a
            href="https://www.instagram.com/montgomeryconstructionottawa/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>© Montgomery Construction 2024</p>
        </div>
        <div className="footer-credit">
          <p>
            Website by{" "}
            <a href="#" className="footer-credit-link">
              Pioneer Web Services
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

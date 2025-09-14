import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

import NavLogo from "../assets/MontgomeryConstructionLogoSquare.png";
import Insta from "../assets/instagram1.png";

const Nav = () => {
  const [showStickyContact, setShowStickyContact] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isOurWorkPage = location.pathname === "/our-work";

  const navigateToSection = (sectionId) => {
    if (isOurWorkPage) {
      // Navigate to main page first, then scroll to section
      window.location.href = `/#${sectionId}`;
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.85; // 85vh - matching hero container height
      const scrollPosition = window.scrollY;
      setShowStickyContact(scrollPosition > heroHeight);
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
        {isOurWorkPage ? (
          <RouterLink to="/" className="back-to-home-nav">
            ← Back to Home
          </RouterLink>
        ) : (
          <img
            className="nav-logo"
            src={NavLogo}
            alt="Montgomery Construction logo"
          />
        )}
        {/* Desktop Navigation */}
        <div className="nav-links-container desktop-nav">
          {isOurWorkPage ? (
            <>
              <button
                onClick={() => navigateToSection("about-container")}
                className="nav-link gold"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                About Us
              </button>
              <RouterLink to="/our-work" className="nav-link gold">
                Our Work
              </RouterLink>
              <a
                className="insta-link"
                href="https://www.instagram.com/montgomeryconstructionottawa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Insta} alt="Instagram" />
              </a>
              <button
                onClick={() => navigateToSection("contact-container")}
                className="nav-btn bold gold"
              >
                Contact Us
              </button>
            </>
          ) : (
            <>
              <Link
                to="about-container"
                spy={true}
                smooth={true}
                duration={900}
                className="nav-link gold"
              >
                About Us
              </Link>
              <RouterLink to="/our-work" className="nav-link gold">
                Our Work
              </RouterLink>
              <a
                className="insta-link"
                href="https://www.instagram.com/montgomeryconstructionottawa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Insta} alt="Instagram" />
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
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`hamburger-line ${isMobileMenuOpen ? "active" : ""}`}
          ></span>
          <span
            className={`hamburger-line ${isMobileMenuOpen ? "active" : ""}`}
          ></span>
          <span
            className={`hamburger-line ${isMobileMenuOpen ? "active" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {isOurWorkPage ? (
          <>
            <RouterLink
              to="/"
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ← Back to Home
            </RouterLink>
            <button
              onClick={() => navigateToSection("about-container")}
              className="mobile-nav-link"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#ffca3a",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: "600",
                padding: "15px 20px",
                textAlign: "left",
                width: "100%",
              }}
            >
              About Us
            </button>
            <RouterLink
              to="/our-work"
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Work
            </RouterLink>
            <a
              className="mobile-nav-link"
              href="https://www.instagram.com/montgomeryconstructionottawa/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Instagram
            </a>
            <button
              onClick={() => navigateToSection("contact-container")}
              className="mobile-nav-link"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#ffca3a",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: "600",
                padding: "15px 20px",
                textAlign: "left",
                width: "100%",
              }}
            >
              Contact Us
            </button>
          </>
        ) : (
          <>
            <Link
              to="about-container"
              spy={true}
              smooth={true}
              duration={900}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <RouterLink
              to="/our-work"
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Work
            </RouterLink>
            <a
              className="mobile-nav-link"
              href="https://www.instagram.com/montgomeryconstructionottawa/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Instagram
            </a>
            <Link
              to="contact-container"
              spy={true}
              smooth={true}
              duration={900}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </>
        )}
      </div>

      {isOurWorkPage ? (
        <button
          onClick={() => navigateToSection("contact-container")}
          className={`sticky-contact bold gold ${
            showStickyContact ? "visible" : ""
          }`}
        >
          Contact Us
        </button>
      ) : (
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
      )}
    </>
  );
};

export default Nav;

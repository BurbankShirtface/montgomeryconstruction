import React from "react";

import "./HeroInfo.css";

import HeroImage from "../assets/bathroom5.png";

const HeroInfo = () => {
  return (
    <div className="hero-info-container section">
      <div className="hero-info">
        <img
          className="hero-image"
          src={HeroImage}
          alt="Freshly renovated bathroom"
        />
        <p className="hero-info-text bold gold">
          Montgomery Construction uses a strategic, deliberate approach that
          prioritizes communication and transparency to help build trust and
          understanding as we work to enhance your space.
          <br />
          <br />
          Our process has been forged through years of experience in business
          and construction, and it's always evolving to provide a better
          experience to our customers. <br />
          <br />
          <span className="info-span">
            Give us a call today and let's get started.
          </span>
        </p>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default HeroInfo;

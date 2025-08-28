import React from "react";

import "./HeroInfo.css";

import HeroImage from "../assets/bathroom5.png";

const HeroInfo = () => {
  return (
    <div className="hero-info-container">
      <div className="hero-info-content">
        <div className="hero-info-text-section">
          <h2 className="hero-info-heading gold">
            Building Trust Through Excellence
          </h2>
          <p className="hero-info-text">
            Montgomery Construction uses a strategic, deliberate approach that
            prioritizes communication and transparency to help build trust and
            understanding as we work to enhance your space.
            <br />
            <br />
            Whether you're looking for a bathroom or kitchen remodel, a new
            deck, a finished basement, some painting or tiling, or just a
            trusted handyman to take care of seasonal home maintenance,
            Montgomery Construction can help you. We tackle all kinds of
            projects, big and small.
            <br />
            <br />
            <span className="info-span">
              Give us a call today and let's get started.
            </span>
          </p>
        </div>
        <div className="hero-info-image-section">
          <img
            className="hero-image"
            src={HeroImage}
            alt="Freshly renovated bathroom"
          />
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default HeroInfo;

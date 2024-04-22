import React from "react";

import "./HeroInfo.css";

const HeroInfo = () => {
  return (
    <div className="hero-info-container section">
      <div className="hero-info-list">
        <li className="hero-list-item bold gold">Renovations</li>
        <li className="hero-list-item bold gold">Additions</li>
        <li className="hero-list-item bold gold">Decks</li>
        <li className="hero-list-item bold gold">Sheds</li>
        <li className="hero-list-item bold gold">Kitchen</li>
        <li className="hero-list-item bold gold">Bath</li>
      </div>
    </div>
  );
};

export default HeroInfo;

import React from "react";
import "./PressFeature.css";

const PressFeature = () => {
  return (
    <section className="press-feature" aria-label="Featured in Rue Magazine">
      <div className="press-feature-content">
        <span className="press-feature-label">Featured In Rue Magazine</span>
        <p className="press-feature-text">
          A bathroom renovation completed by Montgomery Construction was
          featured in Rue Magazine in a story highlighting Studio Alter's
          design.
        </p>
        <div className="press-feature-credits">
          <span>Interior Design: Studio Alter</span>
          <span>Photography: Jordann Brown</span>
          <span>General Contractor: Ryan Montgomery Construction</span>
        </div>
        <a
          href="https://ruemag.com/home-tour-2/rooms-we-love/a-lobster-print-sparked-this-joyful-ottawa-bathroom-makeover"
          target="_blank"
          rel="noopener noreferrer"
          className="press-feature-link"
        >
          Read the Feature
        </a>
      </div>
    </section>
  );
};

export default PressFeature;

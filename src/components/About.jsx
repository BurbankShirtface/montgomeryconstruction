import React from "react";

import "./About.css";

import Nate from "../assets/NateHeadshot.jpg";
import Ryan from "../assets/headshotBrick2.jpg";

const About = () => {
  return (
    <div className="about-container section">
      <h1 className="about-title gold">Who We Are</h1>
      <h3 className="about-subtitle gold">
        Montgomery Construction is a team of brothers who have found their
        passion in building. We have over 25 years combined experience and are
        dedicated to building a strong, trustworthy, reputable company that can
        provide value to Ottawa and the surrounding area for years to come.
        <br />
        <br />
        Here is a bit about our experience and qualifications.
      </h3>
      <div className="about-img-container">
        <div className="about-img-card">
          <img className="about-img" src={Ryan} alt="Ryan's headshot" />
          <div className="about-img-text-container ryan-info">
            <h2 className="about-card-title gold">Ryan Montgomery</h2>
            <h4 className="about-card-subtitle gold">Owner/Operator</h4>
            <h3 className="about-card-text gold">
              - Bathroom/Kitchen renovation specialist <br />
              - Project manager <br />
              <br />
              Ryan has 5 years of experience in residential construction.
              Specifically bathrooms, kitchens, basements, additions, and even
              full home renovations and remodels.
            </h3>
          </div>
        </div>
        <div className="about-img-card">
          <img className="about-img" src={Nate} alt="Nate's headshot" />
          <div className="about-img-text-container">
            <h2 className="about-card-title gold">Nathan Montgomery</h2>
            <h4 className="about-card-subtitle gold">Designer/Consultant</h4>
            <h3 className="about-card-text gold">
              - Red seal carpenter <br />
              - Building Code Identification Number (BCIN) <br />
              - Architectural designer <br />
              <br />
              With over 20 years of construction experience, Nathan has worked
              in many types of construction including residential renovations,
              new builds, commercial, and industrial construction.
            </h3>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default About;

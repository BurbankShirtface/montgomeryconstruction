import React from "react";

import "./About.css";

import Nate from "../assets/NateHeadshot.jpg";
import Ryan from "../assets/headshotBrick2.jpg";

const About = () => {
  return (
    <div id="about-container" className="about-container">
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
              - Full-Scope Residential Renovation Expert <br />
              - Project Manager, Quality Control Lead & Client Support <br />
              <br />
              Ryan's extensive experience in residential and commercial
              construction has made him a highly skilled project manager and
              builder. He specializes in bathrooms, kitchens, basements,
              additions, and full home renovations, as well as exterior projects
              such as decks, porches, and sheds.
              {/* Ryan has 5 years of experience in residential construction.
              Specifically bathrooms, kitchens, basements, additions, and even
              full home renovations and remodels. */}
            </h3>
          </div>
        </div>
        <div className="about-img-card">
          <img className="about-img" src={Nate} alt="Nate's headshot" />
          <div className="about-img-text-container">
            <h2 className="about-card-title gold">Nathan Montgomery</h2>
            <h4 className="about-card-subtitle gold">Technical Advisor</h4>
            <h3 className="about-card-text gold">
              - Red seal carpenter <br />
              - Former Building Code Identification Number (BCIN) holder <br />
              - 20+ Years of Industry Experience <br />
              <br />
              With over 20 years of construction experience, Nathan has worked
              in many types of construction including residential renovations,
              new builds, commercial, and industrial construction. Although he
              is not directly involved in day-to-day operations, Nathan remains
              a trusted resource behind the scenes at Montgomery Construction.
            </h3>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="about-network-card">
        <h2 className="about-network-title gold">
          A Trusted Network of Skilled Professionals
        </h2>
        <p className="about-network-text gold">
          Montgomery Construction works with a well-established network of
          licensed trades, engineers, designers, and suppliers across the
          region. This collaborative model ensures that every project is matched
          with the right expertise—whether it's plumbing, electrical, custom
          finishes, or structural work. With reliable scheduling, clear
          communication, and a commitment to quality, clients can trust that
          their renovation is in capable hands from start to finish—no matter
          the scope or complexity.
        </p>
      </div>
    </div>
  );
};

export default About;

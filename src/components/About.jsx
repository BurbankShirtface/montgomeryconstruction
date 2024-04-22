import React from "react";

// import Kitchen from "../assets/Kitchen.png";

import "./About.css";

const About = () => {
  return (
    <div className="about-container section">
      {/* <img className="about-img" src={Kitchen} /> */}
      <div className="about-text-container">
        <h5 className="about-title bold brown">
          {/* WELCOME TO{"   "} */}
          <span className="about-title-span gold">
            {" "}
            MONTGOMERY CONSTRUCTION
          </span>
        </h5>
        {/* <p className="about-text bold gold">
          We pride ourselves on QUALITY, COMMUNICATION, and TRUST.
          <br />
          <br />
          Trust, transparency, and planning are vital to a successful project.
          We are fully insured, licensed, and eager to build positive
          relationships through collaboration, quality work, and efficiently
          executing well-thought out, deliberate plans.
        </p>
        <br />
        <h4 className="about-text-cta bold gold">
          CALL US TODAY, AND LETS TALK ABOUT YOUR PROJECT.
        </h4> */}
      </div>
    </div>
  );
};

export default About;

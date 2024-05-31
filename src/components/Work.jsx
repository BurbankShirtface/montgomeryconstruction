import React from "react";

import "./Work.css";

import Bath from "../assets/8CD237D1-2EF3-48EB-80A9-2A5BDEF6065B.jpg";
import Bath1 from "../assets/bathroom3.png";
import Bath2 from "../assets/bathroom4.png";
import Bath3 from "../assets/Scott.jpg";
import Bath4 from "../assets/bathroom6.png";
import Kitchen2 from "../assets/Maggie.jpg";
import BuiltIn from "../assets/builtin.jpg";
import Kitchen3 from "../assets/Rosebery.jpg";
import Kitchen4 from "../assets/Rosebery1.jpg";
import Kitchen5 from "../assets/kitchen.png";

const Work = () => {
  return (
    <div className="work-container section">
      <div className="work-img-container">
        <img
          className="work-img"
          src={Bath1}
          alt="Freshly renovated bathroom"
        />
        <img
          className="work-img"
          src={Bath2}
          alt="Freshly renovated bathroom"
        />
        <img
          className="work-img"
          src={Bath3}
          alt="Freshly renovated bathroom"
        />
        <img
          className="work-img"
          src={Bath4}
          alt="Freshly renovated bathroom"
        />
        <img className="work-img" src={Bath} alt="Freshly renovated bathroom" />
        <img
          className="work-img"
          src={Kitchen2}
          alt="Freshly renovated kitchen"
        />
        <img
          className="work-img"
          src={Kitchen3}
          alt="Freshly renovated kitchen"
        />
        <img
          className="work-img"
          src={Kitchen4}
          alt="Freshly renovated kitchen"
        />
        <img
          className="work-img"
          src={Kitchen5}
          alt="Freshly renovated kitchen"
        />
        <img
          className="work-img"
          src={BuiltIn}
          alt="Built-in cabinets around a fireplace"
        />
      </div>
    </div>
  );
};

export default Work;

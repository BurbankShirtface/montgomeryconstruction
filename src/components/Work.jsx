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
import Third from "../assets/ThirdBeforeAfter.png";
import Rad from "../assets/RadCover.png";
import Duff from "../assets/DuffBeforeAfter1.png";
import Shed from "../assets/NeilShed.png";
import Renfrew from "../assets/Renfrew.png";
import Tub from "../assets/NainaTub.png";
import Naina from "../assets/NainaBeforeAfter.png";
import Fairfax from "../assets/FairfaxBeforeAfter.png";
import Deck from "../assets/deck1.jpg";
import Deck1 from "../assets/deck2.jpg";
import BFreeman from "../assets/BFreeman.jpg";

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
          src={BuiltIn}
          alt="Built-in cabinets around a fireplace"
        />
        <img
          className="work-img"
          src={Third}
          alt="Built-in cabinets around a fireplace"
        />
        <img className="work-img" src={Rad} alt="Custom built rad cover" />
        <img
          className="work-img"
          src={Duff}
          alt="Custom kitchen before and after"
        />
        <img className="work-img" src={Shed} alt="A brand new shed" />
        <img className="work-img" src={Renfrew} alt="A brand new addition" />
        <img className="work-img" src={Tub} alt="A brand new bathtub" />
        <img className="work-img" src={Naina} alt="A brand new bathroom" />
        <img
          className="work-img"
          src={Fairfax}
          alt="A before and after of a freshly renovated kitchen"
        />
        <img className="work-img" src={Deck} alt="A new deck" />
        <img className="work-img" src={Deck1} alt="A new deck" />
        <img className="work-img" src={BFreeman} alt="A bathroom remodel" />
      </div>
    </div>
  );
};

export default Work;

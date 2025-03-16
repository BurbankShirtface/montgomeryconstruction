import React, { useState } from "react";

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
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: Bath1, alt: "Freshly renovated bathroom" },
    { src: Bath2, alt: "Freshly renovated bathroom" },
    { src: Bath3, alt: "Freshly renovated bathroom" },
    { src: Bath4, alt: "Freshly renovated bathroom" },
    { src: Bath, alt: "Freshly renovated bathroom" },
    { src: Kitchen2, alt: "Freshly renovated kitchen" },
    { src: Kitchen3, alt: "Freshly renovated kitchen" },
    { src: Kitchen4, alt: "Freshly renovated kitchen" },
    { src: BuiltIn, alt: "Built-in cabinets around a fireplace" },
    { src: Third, alt: "Built-in cabinets around a fireplace" },
    { src: Rad, alt: "Custom built rad cover" },
    { src: Duff, alt: "Custom kitchen before and after" },
    { src: Shed, alt: "A brand new shed" },
    { src: Renfrew, alt: "A brand new addition" },
    { src: Tub, alt: "A brand new bathtub" },
    { src: Naina, alt: "A brand new bathroom" },
    { src: Fairfax, alt: "A before and after of a freshly renovated kitchen" },
    { src: Deck, alt: "A new deck" },
    { src: Deck1, alt: "A new deck" },
    { src: BFreeman, alt: "A bathroom remodel" },
  ];

  return (
    <div className="work-container section">
      <h1 className="work-title">Our Work</h1>
      <div className="work-img-container">
        {images.map((image, index) => (
          <img
            key={index}
            className="work-img"
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img src={selectedImage.src} alt={selectedImage.alt} />
        </div>
      )}
    </div>
  );
};

export default Work;

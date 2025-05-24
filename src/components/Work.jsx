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
import Jess from "../assets/Jess.jpg";
import Jess2 from "../assets/Jess2.jpg";

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    { type: "image", src: Bath1, alt: "Freshly renovated bathroom" },
    { type: "image", src: Bath2, alt: "Freshly renovated bathroom" },
    { type: "image", src: Jess, alt: "Freshly renovated bathroom" },
    { type: "image", src: Jess2, alt: "Freshly renovated bathroom" },
    {
      type: "testimonial",
      author: "Monique",
      text: "Ryan's work ethic and skill level are excellent. The deck looks absolutely fantastic and Ryan improved on a number of areas. He cleaned up his work site every single night—even in the dark—and even raked our back lawn on his last day before leaving. I can recommend him without reservation!",
    },
    { type: "image", src: Bath3, alt: "Freshly renovated bathroom" },
    { type: "image", src: Bath4, alt: "Freshly renovated bathroom" },
    { type: "image", src: Bath, alt: "Freshly renovated bathroom" },
    { type: "image", src: Kitchen2, alt: "Freshly renovated kitchen" },
    {
      type: "testimonial",
      author: "S.",
      text: "Working with Ryan was a fantastic experience. Estimates were clear and detailed. The results in both rooms speak volumes about the quality of Ryan's work.",
    },
    { type: "image", src: Kitchen3, alt: "Freshly renovated kitchen" },
    { type: "image", src: Kitchen4, alt: "Freshly renovated kitchen" },
    {
      type: "image",
      src: BuiltIn,
      alt: "Built-in cabinets around a fireplace",
    },
    { type: "image", src: Third, alt: "Built-in cabinets around a fireplace" },
    {
      type: "testimonial",
      author: "J.",
      text: "Ryan is knowledgeable and attentive while remaining unafraid to ask questions and seek advice when needed. We are repeat customers and greatly appreciate Ryan's friendly professionalism, commitment to excellence, and fair pricing.",
    },
    { type: "image", src: Rad, alt: "Custom built rad cover" },
    { type: "image", src: Duff, alt: "Custom kitchen before and after" },
    { type: "image", src: Shed, alt: "A brand new shed" },
    { type: "image", src: Renfrew, alt: "A brand new addition" },
    {
      type: "testimonial",
      author: "Nathalie",
      text: "Ryan is extremely professional, and his work is impeccable. He always left the space clean and tidy, and he's also very friendly. We are absolutely thrilled with the results. Highly recommend!",
    },
    { type: "image", src: Tub, alt: "A brand new bathtub" },
    { type: "image", src: Naina, alt: "A brand new bathroom" },
    {
      type: "image",
      src: Fairfax,
      alt: "A before and after of a freshly renovated kitchen",
    },
    { type: "image", src: Deck, alt: "A new deck" },
    {
      type: "testimonial",
      author: "Lynn",
      text: "Ryan's attention to detail and creative strategies were masterful. He is punctual, polite, and truly skilled at many trades. Five out of five stars!",
    },
    { type: "image", src: Deck1, alt: "A new deck" },
    { type: "image", src: BFreeman, alt: "A bathroom remodel" },
    { type: "image", src: Kitchen2, alt: "Freshly renovated kitchen" },
    { type: "image", src: Kitchen3, alt: "Freshly renovated kitchen" },
    {
      type: "testimonial",
      author: "Todd",
      text: "His professionalism, caring and attention to detail have always stood out to us. He cares about his customers and is willing to go the extra mile to make sure the job is done right.",
    },
    { type: "image", src: Kitchen4, alt: "Freshly renovated kitchen" },
    {
      type: "image",
      src: BuiltIn,
      alt: "Built-in cabinets around a fireplace",
    },
    { type: "image", src: Third, alt: "Built-in cabinets around a fireplace" },
    { type: "image", src: Rad, alt: "Custom built rad cover" },
    {
      type: "testimonial",
      author: "Clare",
      text: "Ryan is a pleasure to work with. He's honest, tidy and always does a great job. I would happily recommend Montgomery Construction.",
    },
    { type: "image", src: Duff, alt: "Custom kitchen before and after" },
    { type: "image", src: Shed, alt: "A brand new shed" },
    { type: "image", src: Renfrew, alt: "A brand new addition" },
    { type: "image", src: Tub, alt: "A brand new bathtub" },
    {
      type: "testimonial",
      author: "Scott",
      text: "Great quality and a great team. Ryan cares about making things perfect, always taking extra care to ensure the outcome exceeds expectations. You won't be disappointed.",
    },
    { type: "image", src: Naina, alt: "A brand new bathroom" },
    {
      type: "image",
      src: Fairfax,
      alt: "A before and after of a freshly renovated kitchen",
    },
    { type: "image", src: Deck, alt: "A new deck" },
    { type: "image", src: Deck1, alt: "A new deck" },
    {
      type: "testimonial",
      author: "Christopher",
      text: "Ryan was a pleasure to work with. He's extremely knowledgeable, efficient, and an all around friendly guy. Highly recommended!",
    },
    { type: "image", src: BFreeman, alt: "A bathroom remodel" },
    { type: "image", src: Kitchen2, alt: "Freshly renovated kitchen" },
    { type: "image", src: Kitchen3, alt: "Freshly renovated kitchen" },
    { type: "image", src: Kitchen4, alt: "Freshly renovated kitchen" },
    {
      type: "testimonial",
      author: "Jonathan",
      text: "Ryan is great to deal with and reliable.",
    },
    {
      type: "image",
      src: BuiltIn,
      alt: "Built-in cabinets around a fireplace",
    },
    { type: "image", src: Third, alt: "Built-in cabinets around a fireplace" },
    { type: "image", src: Rad, alt: "Custom built rad cover" },
    { type: "image", src: Duff, alt: "Custom kitchen before and after" },
    {
      type: "testimonial",
      author: "Helene",
      text: "Ryan is a very competent, professional handyman with a lot of integrity and excellent interpersonal skills. I recommend him highly.",
    },
  ];

  return (
    <div className="work-container section">
      <h1 className="work-title">Our Work</h1>
      <div className="work-img-container">
        {items.map((item, index) =>
          item.type === "image" ? (
            <div className="work-img-wrapper" key={index}>
              <img
                className="work-img"
                src={item.src}
                alt={item.alt}
                onClick={() => setSelectedImage(item)}
              />
            </div>
          ) : (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">"{item.text}"</p>
              <span className="testimonial-author">– {item.author}</span>
            </div>
          )
        )}
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

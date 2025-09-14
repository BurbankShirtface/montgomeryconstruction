import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import "./OurWork.css";

// Import bathroom and kitchen images
import Bathroom1 from "../assets/bathroom3.png";
import Bathroom2 from "../assets/bathroom4.png";
import Bathroom3 from "../assets/bathroom5.png";
import Bathroom4 from "../assets/bathroom6.png";
import Bathroom5 from "../assets/8CD237D1-2EF3-48EB-80A9-2A5BDEF6065B.jpg";
import Bathroom6 from "../assets/BFreeman.jpg";
import Bathroom7 from "../assets/NainaTub.png";
import Bathroom8 from "../assets/NainaBeforeAfter.png";

import Kitchen1 from "../assets/Kitchen1.jpg";
import Kitchen2 from "../assets/kitchen2.png";
import Kitchen3 from "../assets/Maggie.jpg";
import Kitchen4 from "../assets/Rosebery.jpg";
import Kitchen5 from "../assets/Rosebery1.jpg";
import Kitchen6 from "../assets/ThirdBeforeAfter.png";
import Kitchen7 from "../assets/DuffBeforeAfter1.png";

// Import outdoor project images (after only)
import AfterShed from "../assets/2025/afterShed.jpg";
import AfterFence from "../assets/2025/afterFence.jpg";
import AfterMorgan from "../assets/2025/afterMorgan.jpg";
// import AfterRoodi from "../assets/2025/afterRoodi.jpg";
import AfterRoodi1 from "../assets/2025/afterRoodi1.jpg";
import AfterJess from "../assets/2025/afterJess.jpg";
import AfterEmma from "../assets/2025/afterEmma.jpg";

const OurWork = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // All projects mixed together
  const allProjects = [
    // Bathroom projects
    { src: Bathroom1, alt: "Bathroom Renovation 1" },
    { src: Bathroom2, alt: "Bathroom Renovation 2" },
    { src: Bathroom3, alt: "Bathroom Renovation 3" },
    { src: Bathroom4, alt: "Bathroom Renovation 4" },
    { src: Bathroom5, alt: "Bathroom Renovation 5" },
    { src: Bathroom6, alt: "Bathroom Renovation 6" },
    { src: Bathroom7, alt: "Bathroom Renovation 7" },
    { src: Bathroom8, alt: "Bathroom Renovation 8" },

    // Kitchen projects
    { src: Kitchen1, alt: "Kitchen Renovation 1" },
    { src: Kitchen2, alt: "Kitchen Renovation 2" },
    { src: Kitchen3, alt: "Kitchen Renovation 3" },
    { src: Kitchen4, alt: "Kitchen Renovation 4" },
    { src: Kitchen5, alt: "Kitchen Renovation 5" },
    { src: Kitchen6, alt: "Kitchen Renovation 6" },
    { src: Kitchen7, alt: "Kitchen Renovation 7" },
    { src: AfterRoodi1, alt: "Roodi Project 1" },
    { src: AfterJess, alt: "Jess Project" },
    { src: AfterEmma, alt: "Emma Project" },

    // Outdoor projects
    { src: AfterShed, alt: "Shed Renovation" },
    { src: AfterFence, alt: "Fence Project" },
    { src: AfterMorgan, alt: "Morgan Project" },
    // { src: AfterRoodi, alt: "Roodi Project" },
  ];

  return (
    <div className="our-work-page">
      <Nav />

      <div className="our-work-header">
        {/* <h1 className="our-work-title">Our Work</h1>
        <p className="our-work-subtitle">
          See the amazing transformations we've created for our clients
        </p> */}
      </div>

      {/* All Projects Section */}
      <div className="projects-section">
        <h2 className="section-title">Our Work</h2>
        <div className="projects-grid">
          {allProjects.map((project, index) => (
            <div key={index} className="project-image-container">
              <img
                src={project.src}
                alt={project.alt}
                className="project-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Link Section */}
      <div className="instagram-link-section">
        <a
          href="https://www.instagram.com/montgomeryconstructionottawa/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          Check out our Instagram for more
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default OurWork;

import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

// Import the specific sample images
import Bathroom4 from "../assets/bathroom4.png";
import Bathroom5 from "../assets/bathroom5.png";
import Rosebery from "../assets/Rosebery.jpg";
import AfterEmma from "../assets/2025/afterEmma.jpg";

const Projects = () => {
  const sampleImages = [
    { src: Bathroom4, alt: "Bathroom Renovation" },
    { src: Bathroom5, alt: "Bathroom Design" },
    { src: Rosebery, alt: "Kitchen Project" },
    { src: AfterEmma, alt: "Emma Project" },
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="projects-title gold">A Sample Of Our Work</h2>
      </div>

      <div className="sample-images-grid">
        {sampleImages.map((image, index) => (
          <div key={index} className="sample-image-container">
            <img src={image.src} alt={image.alt} className="sample-image" />
          </div>
        ))}
      </div>

      <div className="view-more-section">
        <Link to="/our-work" className="view-more-button">
          Project Gallery
        </Link>
      </div>
    </div>
  );
};

export default Projects;

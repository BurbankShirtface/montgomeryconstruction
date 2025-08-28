import React, { useState } from "react";
import "./Projects.css";

// Import all the project images
import Bath1 from "../assets/bathroom3.png";
import Bath2 from "../assets/bathroom4.png";
import Bath3 from "../assets/Scott.jpg";
import Bath4 from "../assets/bathroom6.png";
import Bath5 from "../assets/8CD237D1-2EF3-48EB-80A9-2A5BDEF6065B.jpg";
import Bath6 from "../assets/BFreeman.jpg";
import Bath7 from "../assets/NainaTub.png";
import Bath8 from "../assets/NainaBeforeAfter.png";

import Kitchen1 from "../assets/Maggie.jpg";
import Kitchen2 from "../assets/Rosebery.jpg";
import Kitchen3 from "../assets/Rosebery1.jpg";
import Kitchen4 from "../assets/ThirdBeforeAfter.png";
import Kitchen5 from "../assets/DuffBeforeAfter1.png";

import BuiltIn from "../assets/builtin.jpg";
import Rad from "../assets/RadCover.png";

import Deck1 from "../assets/deck1.jpg";
import Deck2 from "../assets/deck2.jpg";

import Shed from "../assets/NeilShed.png";
import Renfrew from "../assets/Renfrew.png";

// Import 2025 project images
import Project2025_1 from "../assets/2025/IMG_0235.jpg";
import Project2025_2 from "../assets/2025/IMG_0833.jpg";
import Project2025_3 from "../assets/2025/IMG_1116.jpg";
import Project2025_4 from "../assets/2025/IMG_1157.jpg";
import Project2025_5 from "../assets/2025/IMG_1224.jpg";
import Project2025_6 from "../assets/2025/IMG_1369.jpg";
import Project2025_7 from "../assets/2025/IMG_1378.jpg";
import Project2025_8 from "../assets/2025/IMG_1379.jpg";
import Project2025_9 from "../assets/2025/IMG_1653.jpg";
import Project2025_10 from "../assets/2025/IMG_1654.jpg";
import Project2025_11 from "../assets/2025/IMG_1852.jpg";
import Project2025_12 from "../assets/2025/IMG_1876.jpg";
import Project2025_13 from "../assets/2025/IMG_1949.jpg";
import Project2025_14 from "../assets/2025/IMG_1952.jpg";
import Project2025_15 from "../assets/2025/IMG_2948.jpg";
import Project2025_16 from "../assets/2025/IMG_2954.jpg";
import Project2025_17 from "../assets/2025/IMG_2955.jpg";
import Project2025_18 from "../assets/2025/IMG_2973.jpg";
import Project2025_19 from "../assets/2025/IMG_2976.jpg";
import Project2025_20 from "../assets/2025/IMG_3004.jpg";
import Project2025_21 from "../assets/2025/IMG_3050.jpg";
import Project2025_22 from "../assets/2025/IMG_3093.jpg";
import Project2025_23 from "../assets/2025/IMG_3103.jpg";
import Project2025_24 from "../assets/2025/IMG_3152.jpg";
import Project2025_25 from "../assets/2025/IMG_3165.jpg";
import Project2025_26 from "../assets/2025/IMG_3166.jpg";
import Project2025_27 from "../assets/2025/IMG_9542.jpg";
import Project2025_28 from "../assets/2025/IMG_9670.jpg";
import Project2025_29 from "../assets/2025/IMG_9781.jpg";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("featured");

  const projectCategories = {
    featured: {
      title: "Featured Project 2025",
      description: "Our latest masterpiece - a complete home transformation that showcases our attention to detail and craftsmanship.",
      images: [
        Project2025_1, Project2025_2, Project2025_3, Project2025_4,
        Project2025_5, Project2025_6, Project2025_7, Project2025_8,
        Project2025_9, Project2025_10, Project2025_11, Project2025_12,
        Project2025_13, Project2025_14, Project2025_15, Project2025_16,
        Project2025_17, Project2025_18, Project2025_19, Project2025_20,
        Project2025_21, Project2025_22, Project2025_23, Project2025_24,
        Project2025_25, Project2025_26, Project2025_27, Project2025_28,
        Project2025_29
      ]
    },
    bathrooms: {
      title: "Bathroom Renovations",
      description: "Transform your bathroom into a luxurious retreat with our expert renovation services.",
      images: [Bath1, Bath2, Bath3, Bath4, Bath5, Bath6, Bath7, Bath8]
    },
    kitchens: {
      title: "Kitchen Remodels",
      description: "Create the kitchen of your dreams with our comprehensive remodeling expertise.",
      images: [Kitchen1, Kitchen2, Kitchen3, Kitchen4, Kitchen5]
    },
    custom: {
      title: "Custom Built-ins & Features",
      description: "Unique custom solutions that add both function and beauty to your home.",
      images: [BuiltIn, Rad]
    },
    exterior: {
      title: "Exterior Projects",
      description: "Enhance your outdoor living space with decks, porches, and sheds.",
      images: [Deck1, Deck2, Shed, Renfrew]
    }
  };

  const categories = [
    { id: "featured", name: "Featured 2025", count: projectCategories.featured.images.length },
    { id: "bathrooms", name: "Bathrooms", count: projectCategories.bathrooms.images.length },
    { id: "kitchens", name: "Kitchens", count: projectCategories.kitchens.images.length },
    { id: "custom", name: "Custom Work", count: projectCategories.custom.images.length },
    { id: "exterior", name: "Exterior", count: projectCategories.exterior.images.length }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="projects-title gold">Our Projects</h2>
        <p className="projects-subtitle">
          Explore our portfolio of completed projects across different categories
        </p>
      </div>

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="category-name">{category.name}</span>
            <span className="category-count">({category.count})</span>
          </button>
        ))}
      </div>

      <div className="category-content">
        <div className="category-info">
          <h3 className="category-title">{projectCategories[activeCategory].title}</h3>
          <p className="category-description">{projectCategories[activeCategory].description}</p>
        </div>

        <div className="projects-grid">
          {projectCategories[activeCategory].images.map((image, index) => (
            <div className="project-item" key={index}>
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="project-image"
                onClick={() => setSelectedImage(image)}
              />
              <div className="project-overlay">
                <span className="view-project">Click to View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img src={selectedImage} alt="Project view" />
        </div>
      )}
    </div>
  );
};

export default Projects;

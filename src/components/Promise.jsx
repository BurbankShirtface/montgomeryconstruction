import React from "react";
import "./Promise.css";

const Promise = () => {
  const promises = [
    {
      icon: "🏗️",
      title: "Quality Craftsmanship",
      description: "Every project is built to the highest standards with attention to detail that exceeds expectations."
    },
    {
      icon: "🤝",
      title: "Trust & Transparency",
      description: "Clear communication, honest pricing, and regular updates throughout your entire project."
    },
    {
      icon: "⏰",
      title: "Reliable Scheduling",
      description: "We respect your time and complete projects on schedule, with minimal disruption to your daily life."
    },
    {
      icon: "🧹",
      title: "Clean & Professional",
      description: "Our work sites are kept clean and organized, and we leave your property better than we found it."
    },
    {
      icon: "💬",
      title: "Ongoing Support",
      description: "We stand behind our work with continued support and are always available for questions or concerns."
    },
    {
      icon: "💰",
      title: "Fair Pricing",
      description: "Competitive rates with no hidden costs, ensuring you get exceptional value for your investment."
    }
  ];

  return (
    <div className="promise-container section">
      <div className="promise-header">
        <h2 className="promise-title gold">Our Promise to You</h2>
        <p className="promise-subtitle">
          These aren't just words - they're the foundation of every project we undertake
        </p>
      </div>
      
      <div className="promises-grid">
        {promises.map((promise, index) => (
          <div className="promise-card" key={index}>
            <div className="promise-icon">{promise.icon}</div>
            <h3 className="promise-card-title">{promise.title}</h3>
            <p className="promise-card-description">{promise.description}</p>
          </div>
        ))}
      </div>
      
      <div className="promise-cta">
        <div className="cta-content">
          <h3 className="cta-title">Ready to Experience the Montgomery Difference?</h3>
          <p className="cta-description">
            Let's discuss your project and how we can bring your vision to life with our proven approach.
          </p>
          <a href="#contact" className="cta-button">Start Your Project</a>
        </div>
      </div>
    </div>
  );
};

export default Promise;

import React from "react";

import Form from "./Form";

import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-container" className="contact-container">
      <div className="contact-header">
        <h2 className="contact-title gold">Get In Touch</h2>
        {/* <p className="contact-subtitle">
          Ready to start your project? Let's discuss how we can bring your
          vision to life.
        </p> */}
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <div className="contact-info-card">
            <div className="contact-icon">📞</div>
            <h3 className="contact-info-title">Call Us</h3>
            <a href="tel:5194410833" className="contact-phone gold">
              (519) 441-0833
            </a>
            {/* <p className="contact-info-description">
              Available for consultations and emergency calls
            </p> */}
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">✉️</div>
            <h3 className="contact-info-title">Email Us</h3>
            <a
              className="contact-email gold"
              href="mailto:ryan@montgomeryconstruction.ca"
            >
              ryan@montgomeryconstruction.ca
            </a>
            {/* <p className="contact-info-description">
              Send us project details and photos
            </p> */}
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">📍</div>
            <h3 className="contact-info-title">Service Area</h3>
            <p className="contact-hq gold">
              Serving Ottawa and the surrounding area
            </p>
            <p className="contact-info-description">
              Free estimates within our service area
            </p>
          </div>
        </div>

        <div className="contact-form-section">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;

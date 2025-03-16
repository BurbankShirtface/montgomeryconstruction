import React from "react";

import Form from "./Form";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container section">
      <h1 className="contact-title bold gold">Get In Touch</h1>
      <div className="contact-info-container">
        <a href="tel:5194410833" className="contact-phone bold gold">
          (519) 441-0833
        </a>
        <a
          className="contact-email bold gold"
          href="mailto:ryan@montgomeryconstruction.ca"
        >
          <h3>ryan@montgomeryconstruction.ca</h3>
        </a>
        <p className="contact-hq bold gold">
          Serving Ottawa and the surrounding area
        </p>
      </div>
      {/* <div className="social-icon-container">
        <a
          className="social-icon"
          target="_blank"
          href="https://www.facebook.com/buildscancanada"
        >
          <img src={FB} />
        </a>
        <a
          className="social-icon"
          target="_blank"
          href="https://www.instagram.com/buildscancanada"
        >
          <img src={IG} />
        </a>
      </div> */}
      <Form />
    </div>
  );
};

export default Contact;

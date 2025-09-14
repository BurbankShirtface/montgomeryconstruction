import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const testimonials = [
    {
      author: "Monique",
      text: "Ryan's work ethic and skill level are excellent. The deck looks absolutely fantastic and Ryan improved on a number of areas. He cleaned up his work site every single night—even in the dark—and even raked our back lawn on his last day before leaving. I can recommend him without reservation!",
      rating: 5,
    },
    {
      author: "Nathalie",
      text: "Ryan is extremely professional, and his work is impeccable. He always left the space clean and tidy, and he's also very friendly. We are absolutely thrilled with the results. Highly recommend!",
      rating: 5,
    },
    {
      author: "J.",
      text: "Ryan is knowledgeable and attentive while remaining unafraid to ask questions and seek advice when needed. We are repeat customers and greatly appreciate Ryan's friendly professionalism, commitment to excellence, and fair pricing.",
      rating: 5,
    },
    {
      author: "Lynn",
      text: "Ryan's attention to detail and creative strategies were masterful. He is punctual, polite, and truly skilled at many trades. Five out of five stars!",
      rating: 5,
    },
    {
      author: "Scott",
      text: "Great quality and a great team. Ryan cares about making things perfect, always taking extra care to ensure the outcome exceeds expectations. You won't be disappointed.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) =>
        prevIndex >= testimonials.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 1
      );
    }
  };

  const prevTestimonial = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
      );
    }
  };

  const renderStars = (rating) => {
    return "★".repeat(rating);
  };

  // Calculate transform value correctly for mobile and desktop
  const transformValue = isMobile ? currentIndex * 20 : currentIndex * 20;

  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h2 className="testimonials-title gold">What Our Clients Say</h2>
        {/* <p className="testimonials-subtitle">
          Don't just take our word for it - hear from our satisfied customers
        </p> */}
      </div>

      <div className="testimonials-carousel">
        <button
          className="carousel-btn carousel-btn-left"
          onClick={prevTestimonial}
        >
          ‹
        </button>

        <div className="testimonials-viewport">
          <div
            className="testimonials-track"
            style={{
              transform: `translateX(-${transformValue}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-stars">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <span className="author-name">– {testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-btn carousel-btn-right"
          onClick={nextTestimonial}
        >
          ›
        </button>
      </div>

      <div className="testimonials-cta">
        <a
          href="https://share.google/M4Rt8gOwYirEoUrX3"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Check out our Google Profile for more reviews
        </a>
      </div>
    </div>
  );
};

export default Testimonials;

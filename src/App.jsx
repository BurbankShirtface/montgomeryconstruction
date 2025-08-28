import React from "react";

import Hero from "./components/Hero";
import HeroInfo from "./components/HeroInfo";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Promise from "./components/Promise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from "./components/ScrollReveal";

import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Hero />
      
      <ScrollReveal>
        <div id="hero-info" className="section">
          <HeroInfo />
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div id="about" className="section">
          <About />
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div id="testimonials" className="section">
          <Testimonials />
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div id="projects" className="section">
          <Projects />
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div id="promise" className="section">
          <Promise />
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div id="contact" className="section">
          <Contact />
        </div>
      </ScrollReveal>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

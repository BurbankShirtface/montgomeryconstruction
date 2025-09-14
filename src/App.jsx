import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import HeroInfo from "./components/HeroInfo";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Promise from "./components/Promise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import OurWork from "./components/OurWork";

import "./App.css";

function HomePage() {
  return (
    <div className="main-container">
      <Hero />

      <div id="hero-info" className="section">
        <HeroInfo />
      </div>

      <div id="about" className="section">
        <About />
      </div>

      <div id="projects" className="section">
        <Projects />
      </div>

      <div id="testimonials" className="section">
        <Testimonials />
      </div>

      {/* <div id="promise" className="section">
        <Promise />
      </div> */}

      <div id="contact" className="section">
        <Contact />
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
    </Router>
  );
}

export default App;

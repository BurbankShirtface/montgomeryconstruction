import React from "react";

import Hero from "./components/Hero";
import HeroInfo from "./components/HeroInfo";
import About from "./components/About";
import Work from "./components/Work";
import Promise from "./components/Promise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Hero />
      {/* <Coming /> */}
      <HeroInfo />
      <About />
      <Work />
      {/* <Promise /> */}
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

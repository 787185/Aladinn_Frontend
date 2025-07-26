
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <HeroSection />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
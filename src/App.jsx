import React from "react";
import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import BlogSection from "./components/BlogSection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <Carousel />
      {/* <HeroSection /> */}
      <Services />
      <Projects />
      <BlogSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;

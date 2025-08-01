import React from "react";
// import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Projects from "../components/Project";
import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";
import BlogSection from "../components/BlogSection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* <Header /> */}
      <HeroSection />
      <Carousel />
      
      <Services />
      <Projects />
      <BlogSection />
      <Testimonials />
      
    </div>
  );
};

export default Home;

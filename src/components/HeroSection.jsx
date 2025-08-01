// src/components/HeroSection.jsx
import React from 'react';
import africaImage from "../assets/africa_image.png";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover w-full bg-center pt-10 min-h-screen  text-white"
      style={{
        backgroundImage: `linear-gradient(to left, var(--tw-gradient-stops)), url(${africaImage})`,
        backgroundImage: `linear-gradient(to left, #005197, #AOD2E7, transparent 70%), url(${africaImage})`,
        backgroundImage: `linear-gradient(to left, #005197, #005197, rgba(0,0,0,0) 90%), url(${africaImage})`,
        
      }}
    >
      {/* Remove the separate overlay div as the main div will handle both backgrounds */}
      {/* <div className="absolute inset-0 bg-no-repeat bg-cover max-w-lg" style={{ backgroundImage: `url(${africaImage})` }}></div> */}

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl ml-auto mr-6 mt-20 md:mt-40 text-right">
        <h1 className="text-4xl xl:text-8xl md:text-5xl text-left text-white font-bold leading-tight">
          Building Africa's Future Through Digital Transformation
        </h1>
        <p className="mt-6 text-3xl xl:text-6xl max-w-120 ml-20 mb-7 text-left text-blue-100">
          Innovative tech solutions empowering brands and people
        </p>
        <p className="mt-3 text-3xl max-w-140 ml-20 text-left text-white">
          We help individuals and businesses build, automate and scale with
          tailored digital solutions – from idea to execution.
        </p>
        <div className="mt-6 space-x-4 flex p-7 justify-center-safe">
          <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-600 transition">
            GET STARTED
          </button>
          <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            VIEW OUR WORK
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
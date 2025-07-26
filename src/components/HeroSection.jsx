import React from "react";
import heroImg from "../assets/africa-image.png";

const HeroSection = () => {
  return (
    // className="bg-cover bg-center text-white py-20 px-4 lg:px-16" style={{ backgroundImage: `url(${heroImg})` }}
    <section>
      <div className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-black/40 rounded-xl p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Building Africa’s Future Through Digital Transformation
        </h1>
        <p className="mb-6 text-lg">Innovative tech solutions, empowering brands and people</p>
        <div className="space-x-4">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md">Get Started</button>
          <button className="border border-white px-6 py-3 rounded-md">View Our Work</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
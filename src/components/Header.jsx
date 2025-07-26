import React from "react";

import backImg from "/africa_image.png";

const Header = () => {
  return (
    <header
      className="bg-cover bg-center text-white py-20 px-4 lg:px-16 h-[100vh] relative "
      style={{
        backgroundImage: `url(${backImg})`, // Replace with your image path
      }}
    >
        {/* className="bg-black bg-opacity-60 h-full w-full" */}
      <div>
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/aladinn_logo.png" // Replace with your logo path
              alt="Aladinn Technologies"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-white font-semibold text-lg">
            <a href="#home" className="hover:text-yellow-400 transition">
              HOME
            </a>
            <a href="#services" className="hover:text-yellow-400 transition">
              ABOUT US
            </a>
            <a href="#solutions" className="hover:text-yellow-400 transition">
              SERVICES
            </a>
            <a href="#about" className="hover:text-yellow-400 transition">
              PROJECTS
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              BLOG
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

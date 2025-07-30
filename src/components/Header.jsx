import React, { useState } from "react";
import africaImage from "../assets/africa_image.png";
import logo from "../assets/aladinn_logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative bg-cover bg-center pt-10 min-h-screen text-white bg-gradient-to-l from-blue-900 via-blue-600 to-transparent to-[70%]"
    //   style={{ backgroundImage: `url(${africaImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-no-repeat bg-cover max-w-lg mt-{9}" style={{ backgroundImage: `url(${africaImage})` }}></div>

      {/* Navigation */}
      <div className="relative z-10 px-7 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Aladinn Technologies" className="h-10 w-auto" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-7 text-lg items-center">
          {["HOME", "ABOUT US", "SERVICE", "PROJECTS", "BLOG"].map((item) => (
            <a key={item} href="#" className="hover:text-blue-300 font-medium">
              {item}
            </a>
          ))}
          <button className="ml-3 bg-blue-800 text-white font-semibold px-5 py-2 rounded-xl hover:bg-blue-200 transition">
            BUILD WITH US
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0  24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 relative z-10">
          {["HOME", "ABOUT US", "SERVICE", "PROJECTS", "BLOG"].map((item) => (
            <a key={item} href="#" className="block text-white font-medium">
              {item}
            </a>
          ))}
          <button className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full w-full">
            BUILD WITH US
          </button>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl ml-auto mr-6 mt-20 md:mt-40 text-right">
        <h1 className="text-4xl md:text-5xl text-left text-white font-bold leading-tight">
          Building Africa's Future Through Digital Transformation
        </h1>
        <p className="mt-6 text-3xl max-w-120 ml-20 mb-7 text-left text-blue-100">
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
    </header>
  );
};

export default Header;

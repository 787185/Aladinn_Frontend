
import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Don't forget Link!
import logo from "../assets/aladinn_logo.png"; // Make sure path is correct from Navbar.jsx

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Define your link paths here. These should match the paths in your App.jsx <Routes>
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    // { name: "SERVICE", path: "/services" },
    { name: "PROJECTS", path: "/projects" },
    // { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="relative z-10 px-7 py-4 xl:p-7 flex items-center justify-between bg-[#005197] border-b-2 border-[#029cc3]">
      {/* Logo */}
      <img src={logo} alt="Aladinn Technologies" className="h-10 w-auto" />

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-7 text-lg xl:text-2xl items-center">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.path} className="hover:text-blue-300 font-medium text-white">
            {link.name}
          </Link>
        ))}
        {/* <button className="ml-3 bg-blue-500 text-white font-semibold px-5 py-2 rounded-xl hover:bg-blue-200 transition">
          BUILD WITH US
        </button> */}
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
            viewBox="0 0 24 24"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 relative z-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-white font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* <button className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 xl:text-5xl xl:p-7 rounded-full w-full">
            BUILD WITH US
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
// src/components/Header.jsx
import React from "react";
import africaImage from "../assets/africa_image.png"; // Keep this here for the overall header background

// Import the new components
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const Header = () => {
  return (
    <header
      className="relative bg-cover bg-center pt-10 min-h-screen text-white 
                 bg-gradient-to-l from-blue-900 via-blue-600 to-transparent to-[70%]" // <-- Gradient applied here
      style={{ backgroundImage: `url(${africaImage})` }} // <-- Background image applied here
    >
      {/* If the Africa image needs to be an *overlay* on top of the gradient,
          and positioned specifically, keep this div.
          If africaImage is just part of the overall background, remove this div
          and rely solely on the style={{ backgroundImage }} on the header tag.
          Based on your original code, it seems you wanted it as an overlay:
      */}
      <div className="absolute inset-0 bg-no-repeat bg-cover max-w-lg" style={{ backgroundImage: `url(${africaImage})` }}></div>
      {/* Note: `mt-{9}` is likely incorrect Tailwind syntax, it should be `mt-9` if you intended margin-top.
                 I've removed it for now as it doesn't look like a standard Tailwind class. */}


      {/* Render Navbar and HeroSection within the Header's structure */}
      <Navbar />
      <HeroSection />

    </header>
  );
};

export default Header;
















// import React, { useState } from "react";
// // Import Link from react-router-dom
// import { Link } from 'react-router-dom'; // <--- ADD Link here
// import africaImage from "../assets/africa_image.png";
// import logo from "../assets/aladinn_logo.png";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Define your link paths here. Make sure these match the paths in your App.jsx <Routes>
//   const navLinks = [
//     { name: "HOME", path: "/" },
//     { name: "ABOUT US", path: "/about" }, // Assuming an /about route
//     { name: "SERVICE", path: "/services" }, // Assuming a /services route
//     { name: "PROJECTS", path: "/projects" }, // Assuming a /projects route
//     { name: "BLOG", path: "/blog" }, // Assuming a /blog route
//     { name: "CONTACT", path: "/contact" }, // You already have /contact
//   ];

//   return (
//     <header
//       className="relative bg-cover bg-center pt-10 min-h-screen text-white bg-gradient-to-l from-blue-900 via-blue-600 to-transparent to-[70%]"
//       // style={{ backgroundImage: `url(${africaImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-no-repeat bg-cover max-w-lg mt-{9}" style={{ backgroundImage: `url(${africaImage})` }}></div>

//       {/* Navigation */}
//       <div className="relative z-10 px-7 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <img src={logo} alt="Aladinn Technologies" className="h-10 w-auto" />

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-7 text-lg items-center">
//           {navLinks.map((link) => ( // Map over the navLinks array
//             <Link key={link.name} to={link.path} className="hover:text-blue-300 font-medium"> {/* Use Link instead of a */}
//               {link.name}
//             </Link>
//           ))}
//           <button className="ml-3 bg-blue-800 text-white font-semibold px-5 py-2 rounded-xl hover:bg-blue-200 transition">
//             BUILD WITH US
//           </button>
//         </nav>

//         {/* Mobile menu button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {menuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 8h16M4 16h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden px-6 pb-6 space-y-4 relative z-10">
//           {/* Note: Mobile menu had "CONTACT" missing, I've added it back to match desktop if desired, or adjust navLinks array */}
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className="block text-white font-medium"
//               onClick={() => setMenuOpen(false)} // Optional: close menu on link click
//             >
//               {link.name}
//             </Link>
//           ))}
//           <button className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full w-full">
//             BUILD WITH US
//           </button>
//         </div>
//       )}

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-3xl ml-auto mr-6 mt-20 md:mt-40 text-right">
//         <h1 className="text-4xl md:text-5xl text-left text-white font-bold leading-tight">
//           Building Africa's Future Through Digital Transformation
//         </h1>
//         <p className="mt-6 text-3xl max-w-120 ml-20 mb-7 text-left text-blue-100">
//           Innovative tech solutions empowering brands and people
//         </p>
//         <p className="mt-3 text-3xl max-w-140 ml-20 text-left text-white">
//           We help individuals and businesses build, automate and scale with
//           tailored digital solutions – from idea to execution.
//         </p>
//         <div className="mt-6 space-x-4 flex p-7 justify-center-safe">
//           <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-600 transition">
//             GET STARTED
//           </button>
//           <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
//             VIEW OUR WORK
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from "react";
// Ensure these image paths are correct relative to THIS file's location
import food from "../assets/food.jpg";
import photo from "../assets/photo_shoot.jpg";
import fashion from "../assets/fashion.jpg";
import home from "../assets/modern_home.jpg";

const projects = [
  { image: food, title: "Branding and Product Design", client: "Prime Farms" },
  { image: photo, title: "Branding & Visual Identity", client: "Dex Autos" },
  {
    image: fashion,
    title: "UI/UX & Web Development",
    client: "Phenomenal Schools",
  },
  { image: home, title: "Event Branding & Coverage", client: "Prime Farms" },
];

const Projects = () => {
  return (
    <section className=" bg-white">
      <div className="max-w-50 mx-auto mb-10">
        <button className="bg-blue-200 text-blue-800 font-bold py-3 px-7 rounded-3xl shadow-md hover:bg-blue-300 xl:text-4xl xl:p-7 transition duration-200">
          EXPLORE SERVICES
        </button>
      </div>
      <h2 className="text-5xl xl:text-8xl text-blue-800 font-bold text-center mb-8">Recent Projects</h2>
      
      {/* Updated Grid: sm:grid-cols-2 (2 per row on small screens and up)
          lg:grid-cols-2 (STAYS 2 per row on large screens) */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-15 bg-[#005197] py-16 px-15">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            // Card container: relative for absolute children, fixed height, styling
            className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 h-150 xl:h-250 group"
            // style={{ height: "300px xl:900px" }} // Adjust card height as desired
          >
            {/* Image as Background: Occupies the entire card */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${proj.image})` }}
            ></div>
            
            {/* Overlay for Readability: Subtle gradient from bottom-left to top-right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent group-hover:from-black/60 transition duration-300"></div>
            
            {/* Content Container: Positioned at the bottom-left of the card */}
            <div className="absolute bottom-0 left-0 p-5 xl:p-10 text-white w-full">
              <h3 className="font-bold text-xl xl:text-5xl mb-1">{proj.title}</h3>
              <p className="text-md xl:text-3xl opacity-90">{proj.client}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
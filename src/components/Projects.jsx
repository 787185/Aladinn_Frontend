import React from "react";
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

// `url(${food})`

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-50 mx-auto mb-10">
        <button className="bg-blue-200 text-blue-800 font-bold py-3 px-7 rounded-2xl shadow-md hover:bg-blue-300 transition duration-200">
          EXPLORE SERVICES
        </button>
      </div>
      <h2 className="text-3xl text-blue-800 font-bold text-center mb-8">Recent Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{proj.title}</h3>
              <p className="text-sm text-gray-600">{proj.client}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

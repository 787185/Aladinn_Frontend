import React from "react";
import food from "/food.jpg";
import photo from "/photo_shoot.jpg";
import fashion from "/fashion.jpg";
import home from "/modern_home.jpg";

const projects = [
  { image: `url(${food})`, title: "Branding and Product Design", client: "Prime Farms" },
  { image: `url(${photo})`, title: "Branding & Visual Identity", client: "Dex Autos" },
  { image: `url(${fashion})`, title: "UI/UX & Web Development", client: "Phenomenal Schools" },
  { image: `url(${home})`, title: "Event Branding & Coverage", client: "Prime Farms" },
];

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Recent Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={proj.image} alt={proj.title} className="h-56 w-full object-cover" />
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
import React from "react";

const services = [
  {
    title: "Web & App Development",
    desc: "Custom websites, apps, and platforms built to scale.",
  },
  {
    title: "Brand & UI/UX Design",
    desc: "Human-centered digital design and identity systems.",
  },
  {
    title: "Automation & Integration",
    desc: "Operational efficiency through tools and automation.",
  },
  {
    title: "Tech Consulting & Strategy",
    desc: "Secure, scalable, and actionable tech insights.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 text-center bg-gray-50">
      <button class="bg-blue-200 text-blue-800 font-bold py-3 px-6 mb-7 text-lg rounded-xl shadow hover:bg-blue-300 transition">
        WHAT WE DO
      </button>
      <h2 className="text-4xl text-blue-800 font-bold mb-8 m-3">
        Digital Solutions, Tailored to Your Needs.
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

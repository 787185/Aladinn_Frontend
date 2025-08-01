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
    <section className="py-16 px-4 mb-5 text-center bg-gray-200">
      <button className="bg-blue-200 text-blue-800 font-bold py-3 px-6 mb-7 text-lg xl:text-3xl lg:p-7 rounded-xl shadow hover:bg-blue-300 transition">
        WHAT WE DO
      </button>
      <h2 className="text-5xl xl:text-8xl text-blue-800 font-bold mb-8 m-3">
        Digital Solutions, Tailored to Your Needs.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-15 lg:h-fit m-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 xl:p-15 rounded-3xl shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-xl xl:text-5xl mb-2">{service.title}</h3>
            <p className="text-sm xl:text-3xl text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
















// import React from "react";

// const services = [
//   {
//     // If you ever introduce unique IDs, add them here
//     // id: "web-dev",
//     title: "Web & App Development",
//     desc: "Custom websites, apps, and platforms built to scale.",
//   },
//   {
//     // id: "brand-design",
//     title: "Brand & UI/UX Design",
//     desc: "Human-centered digital design and identity systems.",
//   },
//   {
//     // id: "automation-integration",
//     title: "Automation & Integration",
//     desc: "Operational efficiency through tools and automation.",
//   },
//   {
//     // id: "tech-consulting",
//     title: "Tech Consulting & Strategy",
//     desc: "Secure, scalable, and actionable tech insights.",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="py-16 px-4 text-center bg-gray-50">
//       <button
//         type="button" // Added type="button"
//         className="bg-blue-200 text-blue-800 font-bold py-3 px-6 mb-7 text-lg rounded-xl shadow hover:bg-blue-300 transition" // Changed 'class' to 'className'
//       >
//         WHAT WE DO
//       </button>
//       <h2 className="text-4xl text-blue-800 font-bold mb-8 m-3">
//         Digital Solutions, Tailored to Your Needs.
//       </h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {services.map((service, idx) => (
//           <div
//             key={idx} // Consider using a unique ID if available and the list can change
//             className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
//           >
//             <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
//             <p className="text-sm text-gray-600">{service.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;
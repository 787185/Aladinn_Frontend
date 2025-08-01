import React from "react";

const testimonials = [
  {
    name: "Adaboli N.",
    company: "Product Manager, Zerion Tech",
    quote:
      "From day one, they understood exactly what we needed - and then delivered something even better. Our platform has never run smoother.",
  },
  {
    name: "Chris A.",
    company: "CEO, NovaRetail Africa",
    quote:
      "The UI/UX redesign they delivered completely changed our user experience. Our engagement rates went up by 43% in the first month.",
  },
  {
    name: "Sheila K.",
    company: "Phenomenal Studios",
    quote: "What I loved most was their clarity in communication and delivery.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 back-white text-center">
      <h2 className="text-5xl xl:text-9xl text-blue-800 font-bold mb-8">What Do Our Clients Say?</h2>
      <p className="max-w-7xl text-xl xl:text-3xl mx-auto pb-7">
        From idea to execution, our clients have experienced the power of
        tailored digital solutions that transform brands and deliver real
        results. Explore their journey, their wins and how our team helped bring
        their vision to life - with clarity, speed and impact.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-15 xl:h-fit m-10">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-300 p-4 rounded-3xl shadow">
            <div className="mt-4 font-bold text-2xl xl:text-5xl text-blue-800">{t.name}</div>
            <div className="text-sm xl:text-3xl font-semibold text-cyan-600 pb-4">{t.company}</div>
            <p className="italic text-gray-700 xl:text-4xl">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
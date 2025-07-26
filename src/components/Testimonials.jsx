import React from "react";

const testimonials = [
  { name: "Adaboli N.", company: "Zokoa Tech", quote: "From day one, they understood exactly what we needed — and delivered smoother." },
  { name: "Chris A.", company: "ProActivate Africa", quote: "The UI/UX redesign they delivered completely changed our user experience." },
  { name: "Sheila K.", company: "Phenomenal Studios", quote: "What I loved most was their clarity in communication and delivery." },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">What Do Our Clients Say?</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow">
            <p className="italic text-gray-700">“{t.quote}”</p>
            <div className="mt-4 font-bold">{t.name}</div>
            <div className="text-sm text-gray-600">{t.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
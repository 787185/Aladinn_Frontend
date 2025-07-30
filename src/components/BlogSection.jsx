const BlogSection = () => {
  const cards = [
    {
      title: "Client-centered Approach",
      content:
        "We don't start with assumptions - we start with you. From strategy to delivery, every decision we make is based on your brand's unique needs, goals and identity. We believe in collaboraton, not cookie-cutter solutions.",
    },
    {
      title: "Fast Turnaround Times",
      content:
        "Time is money and we respect both. Our streamlined process ensures that your projects move from idea to execution in record time - without sacrificing quality. Because speed means nothing without excellence.",
    },
    {
      title: "Industry-Tested Expertise",
      content:
        "Our team is built on a foundation of experience. We've worked across industries, platforms and project scope. We don't guess - we apply proven insight, innovative methods and digital best practices tailored to your market.",
    },
    {
      title: "Dedicated Post-Launch Support",
      content:
        "Our relationship doesn't end at launch - that's just the beginning. We provide hands-on support, performance monitoring and proactive updates to ensure your solution remains powerful, secure and scalable.",
    },
  ];

  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-blue-800">What Truly</span>{" "}
          <span className="text-blue-500">Sets Us Apart.</span>
        </h1>

        <p className=" text-lg text-gray-600 max-w-3xl mx-auto">
          At the heart of everything we do is a simple philosophy - to create
          digital solutions that don't just work, but matter. We're not just
          ticking boxes; we're crafting experiences, solving real problems and
          helping you grow. Here's why brands choose us - and stay with us.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-blue-100 p-5 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-700">{card.content}</p>
            </div>
            <button className="mt-6 self-start bg-blue-500 text-white font-medium py-1.5 px-4 rounded-xl hover:bg-blue-200 transition">
              WORK WITH US
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

function Features() {
  const features = [
    {
      title: "Fast Delivery",
      desc: "We deliver your product super fast with real-time tracking.",
    },
    {
      title: "Modern Design",
      desc: "Sleek and professional UI built with Tailwind CSS.",
    },
    {
      title: "Easy Integration",
      desc: "Easily integrate with your existing tools and workflow.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

const [activeCategory, setActiveCategory] = useState("Registrations");

function SolutionsSection() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      {/* Heading */}
        <div className="text-center max-w-6xl mx-auto mb-10">
        <h2
            className="text-[#1b3c60] font-bold text-[28px] md:text-[44px] leading-[clamp(23px,3vw,60px)] mb-[12px]"
            style={{ lineHeight: "clamp(23px, 3vw, 60px)" }}
        >
            Smart Solutions for Modern Businesses
        </h2>
        <p
            className="text-[#424242] font-[400] text-[clamp(13px,3vw,18px)] font-poppins text-center mb-[clamp(12px,2vw,52px)]"
            style={{ fontFamily: "Poppins, sans-serif" }}
        >
            All-in-one platform for online legal consultation, business incorporation, corporate compliance, and startup-friendly solutions—tailored for every industry.
        </p>
        </div>

{/* Category Tabs */}
<div className="flex flex-wrap justify-center gap-4 mb-10">
  {["Registrations", "Compliance", "IPR", "Taxation", "Consultation", "Environmental"].map((cat, idx) => (
    <button
      key={idx}
      onClick={() => setActiveCategory(cat)}
      className={`px-3 py-2 text-sm font-medium border-b-2 transition-all
        ${
          activeCategory === cat
            ? "text-[#f90] border-[#f90] font-bold"
            : "text-[#616161] border-transparent hover:text-[#f90] hover:border-[#f90]"
        }
      `}
    >
      {cat}
    </button>
  ))}
</div>

{/* Card Grid */}
<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] min-h-[900px] w-full px-6 mx-auto">
  {[1, 2, 3].map((i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-2xl font-semibold text-[#1b3c60] mb-3">
          Service Title {i}
        </h3>
        <p className="text-base text-gray-600 leading-relaxed">
          Brief description about the legal or business service that helps users understand the offering. Tailored for modern businesses and compliance needs.
        </p>
      </div>
      <button className="mt-6 text-orange-500 font-semibold hover:underline self-start">
        Learn More →
      </button>
    </div>
  ))}
</div>

    </section>
  );
}

export default SolutionsSection;

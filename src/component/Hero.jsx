function Hero() {
  return (
    <section className="relative z-10 text-white pt-[120px] flex flex-col items-center justify-start px-4 max-w-7xl mx-auto">
      {/* Hero Text */}
      <div className="text-center max-w-4xl z-20">
        <h1
          className="text-[2.1rem] md:text-[3.1rem] xl:text-[3.5rem] font-semibold leading-[1.2] mb-4 mx-auto w-full text-transparent bg-gradient-to-r from-white to-[#aec0ca] bg-clip-text font-[montserrat]"
        >
          Register Your Business in Just 7 Days
        </h1>

      <p className="text-[0.9rem] md:text-[1.3rem] text-[#d1d1d1] opacity-90 mb-8 w-[95%] mx-auto">
        Get fast, reliable, and customizable online business solutions & legal services with free expert consultation.
      </p>

      </div>

      {/* Ratings */}
          <div className="flex justify-center items-center gap-6 mb-10 z-20">
        {/* Google Rating Block */}
        <div className="flex flex-col items-start gap-2 px-5 py-2 rounded-lg">
          <div className="flex items-center gap-2 px-5">
            <img
              src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.1196b067.png&w=48&q=75"
              alt="Google"
              className="w-6 h-6"
            />
            <span className="text-white text-base font-semibold">4.6 out of 5</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.039023de.png&w=16&q=75" alt="★" className="w-4 h-4" />
            <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.039023de.png&w=16&q=75" alt="★" className="w-4 h-4" />
            <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.039023de.png&w=16&q=75" alt="★" className="w-4 h-4" />
            <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.039023de.png&w=16&q=75" alt="★" className="w-4 h-4" />
            <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhalfstar.dc92a2b7.png&w=32&q=75" alt="☆" className="w-4 h-4" />
            <span className="text-gray-300 text-[0.9rem] font-medium ml-1">(2,400)</span>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="h-10 w-px bg-gray-300 opacity-40"></div>

        {/* Trustpilot Rating Block */}
        <div className="flex flex-col items-start gap-2 px-5 py-2 rounded-lg">
          <div className="flex items-center gap-1 px-5">
            <span className="text-green-500 text-[1.3rem] text-base px-1 font-semibold">★</span>
            <span className="text-white text-base font-semibold">4.1 out of 5</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.039023de.png&w=16&q=75" alt="★" className="w-4 h-4" />
            <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.039023de.png&w=16&q=75" alt="★" className="w-4 h-4" />
            <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.039023de.png&w=16&q=75" alt="★" className="w-4 h-4" />
            <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.039023de.png&w=16&q=75" alt="★" className="w-4 h-4" />
            <img src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhalfstar.dc92a2b7.png&w=32&q=75" alt="☆" className="w-4 h-4" />
            <span className="text-gray-300 text-[0.9rem] font-medium ml-1">(1,886)</span>
          </div>
        </div>
      </div>



      {/* Lead Form */}
<div
  className="max-w-[900px] mx-auto p-1.5 rounded-[1.2rem] bg-[linear-gradient(135deg,hsla(0,0%,100%,.4),hsla(0,0%,100%,.2))] shadow-[0_0_20px_hsla(0,0%,100%,.5),inset_0_0_10px_hsla(0,0%,100%,.3)]"
>
  <form
    className="bg-white p-8 rounded-xl flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between"
  >
    {/* Name */}
    <input
      type="text"
      placeholder="Your Name"
      className="w-full md:w-[calc(30%-0.5rem)] p-3 rounded-md border border-[#d4d9dc] text-[#424242] bg-[#f5f5f5] text-[0.8rem] font-medium outline-none placeholder:text-[#000000c1]"
    />

    {/* Mobile Number */}
    <div className="flex w-full md:w-[calc(30%-0.5rem)]">
      <span className="bg-[#f5f5f5] px-3 flex items-center border border-r-0 rounded-l-md text-[#424242] text-[0.8rem] font-medium">
        +91
      </span>
      <input
        type="text"
        placeholder="Mobile Number"
        className="border border-l-0 px-3 py-3 rounded-r-md w-full text-[0.8rem] font-medium text-[#424242] bg-[#f5f5f5] outline-none placeholder:text-[#000000c1]"
      />
    </div>

    {/* Email */}
    <input
      type="email"
      placeholder="Your Email"
      className="w-full md:w-[calc(30%-0.5rem)] p-3 rounded-md border border-[#d4d9dc] text-[#424242] bg-[#f5f5f5] text-[0.8rem] font-medium outline-none placeholder:text-[#000000c1]"
    />

    {/* Select Service */}
    <select
      className="w-full md:w-[calc(70%-0.5rem)] p-3 rounded-md border border-[#d4d9dc] text-[#424242] bg-[#f5f5f5] text-[0.8rem] font-medium outline-none bg-[url('data:image/svg+xml;utf8,<svg fill=\'gray\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>')] bg-no-repeat bg-[right_0.8rem_center] bg-[length:1rem]"
    >
      <option>Select Service</option>
    </select>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full md:w-[calc(30%-0.5rem)]  bg-[radial-gradient(490.55%_149.02%_at_50.13%_20.42%,#fca229_0%,#d6731a_100%)] text-white px-8 py-3 rounded-md text-[0.68rem] font-semibold uppercase transition-all duration-300 ease-in-out"
    >
      CLAIM YOUR FREE CONSULTATION
    </button>
  </form>
</div>


      {/* Features Bar */}
  <div className="mt-13 mb-10 w-full flex flex-wrap justify-center gap-6 text-white bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-full shadow z-20">
        <span className="font-medium">✅ What Sets Us Apart</span>

  {/* Stat 1 */}
  <div className="bg-white px-4 py-2 rounded-full flex items-center gap-1 min-w-fit">
    <span className="text-[#f2994a] text-[0.85rem] font-medium">500+</span>
    <span className="text-[#666] text-[0.8rem] leading-[1.2]">MCA Certified Experts</span>
  </div>

  {/* Stat 2 */}
  <div className="bg-white px-4 py-2 rounded-full flex items-center gap-1 min-w-fit">
    <span className="text-[#f2994a] text-[0.85rem] font-medium">3500+</span>
    <span className="text-[#666] text-[0.8rem] leading-[1.2]">Trusted Reviews</span>
  </div>

  {/* Stat 3 */}
  <div className="bg-white px-4 py-2 rounded-full flex items-center gap-1 min-w-fit">
    <span className="text-[#f2994a] text-[0.85rem] font-medium">2500+</span>
    <span className="text-[#666] text-[0.8rem] leading-[1.2]">Monthly Clients Onboardings</span>
  </div>

  {/* Stat 4 */}
  <div className="bg-white px-4 py-2 rounded-full flex items-center gap-1 min-w-fit">
    <span className="text-[#666] text-[0.8rem] leading-[1.2]">Serving Businesses Across India</span>
  </div>
</div>

    </section>
  );
}

export default Hero;

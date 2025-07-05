import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`
          fixed top-2 left-1/2 transform -translate-x-1/2
          ${menuOpen ? "rounded-none w-full left-0 translate-x-0 top-0" : "rounded-full w-[90%]"}
          max-w-screen-xl px-6 py-4
          bg-white/10 text-white
          backdrop-blur-md border border-white/20
          shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
          flex items-center justify-between z-50
          transition-all duration-300
          [@media(min-width:1200px)]:w-[90%] 
          [@media(min-width:1200px)]:left-1/2 
          [@media(min-width:1200px)]:translate-x-[-50%]
          [@media(max-width:1199px)]:top-0 
          [@media(max-width:1199px)]:left-0 
          [@media(max-width:1199px)]:w-full 
          [@media(max-width:1199px)]:rounded-none 
          [@media(max-width:1199px)]:translate-x-0
        `}
      >
        {/* Logo + Brand */}
        <div className="flex items-center gap-2 text-xl font-bold">
           <img 
            src="https://gl-m.linker-cdn.net/logo/company/6d2/bbf/7ddd831566c5a626301fe506ebf874d9_crop1626260382.jpg"
            alt="RegisterKaro Logo"
            className="w-8 h-8  object-cover"
  />
          <span>RegisterKaro</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden [@media(min-width:1200px)]:flex gap-6 text-sm font-medium">
          <li><a href="#">Registrations</a></li>
          <li><a href="#">Compliance</a></li>
          <li><a href="#">IPR</a></li>
          <li><a href="#">Taxation</a></li>
          <li><a href="#">Consultation</a></li>
          <li><a href="#">More</a></li>
          <li><a href="#">Partner with Us</a></li>
        </ul>

        {/* Hamburger Icon (visible <1200px) */}
        {/* Right Side Icons */}
        <div className="flex items-center gap-3">
          {/* Search Icon (visible ONLY ≥1200px) */}
          <div className="hidden [@media(min-width:1200px)]:block cursor-pointer">
            <FiSearch size={20} />
          </div>

          {/* Talk Button (visible ONLY between 1026px and 1199px) */}
          <button
             className="
                hidden 
                [@media(min-width:1026px)]:flex
                items-center justify-center
                bg-[#fa3] text-white 
                font-[500] text-[14px] 
                font-[Poppins,sans-serif]
                h-[40px] min-w-[149px] 
                rounded-[10px] px-4 
                transition-all duration-300 
                cursor-pointer
              "
          >
             Talk to Experts
          </button>


          {/* Hamburger Icon (visible ONLY <1200px) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="hidden [@media(max-width:1199px)]:flex text-white p-2"
            aria-label="Toggle menu"
          >
            <HiMenuAlt3 size={24} />
          </button>
        </div>


      </nav>

      {/* Styled Sidebar */}
      <div
        className={`fixed top-0 h-screen w-full max-w-[400px] bg-white text-black p-4 flex flex-col gap-5 justify-start overflow-y-auto shadow-[ -4px_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 z-[2000]
        ${menuOpen ? "right-0" : "-right-full"}
        [@media(min-width:1200px)]:hidden`}
      >
        {/* Close Icon inside sidebar */}
      <div className="flex justify-between items-center px-2">
        {/* Search */}
        <div className="cursor-pointer">
          <FiSearch size={20} />
        </div>

        {/* Close */}
        <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <HiX size={24} />
        </button>
      </div>

      <ul className="flex flex-col gap-3 text-base font-medium mt-4">
        {[
          "Registrations",
          "Compliance",
          "IPR",
          "Taxation",
          "Consultation",
          "More",
          "Partner with Us",
        ].map((text, idx) => (
          <li key={idx} className="relative px-[5%] pb-2 border-b border-gray-300 flex items-center justify-between">
            <a href="#" className="text-black w-full">{text}</a>
            <span className="text-gray-500">{">"}</span>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}

export default Navbar;

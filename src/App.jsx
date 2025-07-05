import { Routes, Route } from "react-router-dom";
import { FaWhatsapp, FaRobot } from "react-icons/fa"; // top of the file

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import SolutionsSection from "./component/SolutionsSection";
import Hero from './component/Hero'
import Home from "./pages/Homes";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

function App() {
  return (
    <div
  className="min-h-screen bg-cover bg-center relative text-white"
      style={{
        backgroundImage: `url('https://www.registerkaro.in/_next/static/media/bannerBackgroundHassleFree.9f599610.png')`,
      }}
    >
      {/* Optional white overlay */}
      <div className="absolute inset-0 bg-white/20 z-0"></div>

      {/* Content that floats above background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SolutionsSection />
                {/* Floating WhatsApp Button */}

      </div>
              <a
          href="https://wa.me/919999999999" // Replace with your actual number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg z-50 hover:scale-105 transition"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Floating Chatbot Button */}
        <button
          onClick={() => alert("Open chatbot logic here")} // Replace with actual bot logic
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:scale-105 transition"
          aria-label="Open Chatbot"
        >
          <FaRobot size={24} />
        </button>
    </div>
  );
}

export default App;
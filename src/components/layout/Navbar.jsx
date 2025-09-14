import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-[#2D336B] text-white text-xs sm:text-sm px-4 py-2 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        <div className="text-lg">🕘 8:00 am - 8:00 pm</div>
        <div className="flex items-center space-x-3 text-lg">
          <span className="text-md hidden sm:inline">Follow Us:</span>
          <a href="#" className="hover:text-blue-500" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-red-600" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Middle Info Row */}
      <div className="bg-white px-4 py-3 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
          <div>
            <h1 className="text-xl font-bold text-[#2D336B]">ANNONET </h1>
            <p className="text-sm text-gray-600">WIFI NET PROVIDER</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-2">
          <div>
            <p className="text-md text-gray-500">📌 Visit Us</p>
            <p className="font-medium text-[#2D336B] text-sm break-words">
              E-20, Street No. 9, Shashi Garden
              <br />
              Mayur Vihar Phase-1, East Delhi, 110091
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-2">
          <div>
            <p className="text-md text-gray-500">📞 Call Now</p>
            <p className="font-medium text-[#2D336B] text-md">7053604920</p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#2D336B] text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Links (Desktop) */}
          <div className="hidden md:flex space-x-6 text-lg">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About Us
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#contact" className="hover:underline">
              Contact Us
            </a>
            <a href="#brands" className="hover:underline">
              Brands
            </a>
          </div>

          {/* Call Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:7053604920"
              className="bg-white text-[#2D336B] font-semibold px-4 py-2 rounded hover:bg-gray-100 transition inline-flex items-center space-x-2 text-md"
            >
              <span>Call Now</span>
              <span>📞</span>
            </a>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 bg-gray-200 p-4 rounded-lg">
            <a href="#home" className="block text-[#2D336B]">
              Home
            </a>
            <a href="#about" className="block text-[#2D336B]">
              About Us
            </a>
            <a href="#services" className="block text-[#2D336B]">
              Services
            </a>
            <a href="#contact" className="block text-[#2D336B]">
              Contact Us
            </a>
            <a href="#brands" className="block text-[#2D336B]">
              Brands
            </a>
            {/* <a
              href="tel:07453867573"
              className="block text-[#2D336B] font-semibold mt-2"
            >
              Call Now 📞
            </a> */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

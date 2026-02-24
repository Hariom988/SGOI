"use client";

import { useState } from "react";
import Logo from "@/public/LOGO.png";

const NavbarLight = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <span className="text-xl sm:text-2xl font-serif font-bold text-[#E6B534] tracking-wider leading-none">
            SPL
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <button className=" sm:block cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-blue-200 transition-all active:scale-95">
            <a href="tel:+918527169717">Get a Quote</a>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      ></div>
    </nav>
  );
};

export default NavbarLight;

"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/public/LOGO.png";

const NavbarLight = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <img
              src={Logo.src}
              alt="SGOI Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-black text-amber-600 tracking-tighter">
              SGOI
            </span>
          </div>

          <div className="flex flex-col border-l border-gray-200 pl-4">
            <span className="text-xl sm:text-2xl font-serif font-bold text-red-900 tracking-wider leading-none">
              SAHU
            </span>
            <span className="text-[8px] sm:text-[10px] font-bold text-gray-500 tracking-[0.25em] uppercase mt-0.5">
              Group of Industries
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/"
            className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-blue-200 transition-all active:scale-95"
          >
            Get a Quote
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
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

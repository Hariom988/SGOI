"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/public/LOGO.png";

const NavbarLight = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/" },
    { name: "Careers", href: "/" },
    { name: "Book Online", href: "/" },
  ];

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

        {/* Right Section: Desktop Nav + CTA */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Desktop Navigation Pill */}
          <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-white rounded-full transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button (Visible on all screens, size adjusted for mobile) */}
          <Link
            href="/quote"
            className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-blue-200 transition-all active:scale-95"
          >
            Get a Quote
          </Link>

          {/* Hamburger Button (Mobile Only) */}
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 text-base font-semibold text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/quote"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold shadow-md shadow-blue-100"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLight;

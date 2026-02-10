"use client";
import { useState, useEffect } from "react";
import carousel1 from "@/public/home/carousel1.webp";
import carousel2 from "@/public/home/carousel2.webp";
import carousel3 from "@/public/home/carousel3.webp";

const carouselData = [
  {
    image: carousel1.src,
    title: "Industrial Excellence",
    subtitle: "High-grade jumbo rolls for global markets",
  },
  {
    image: carousel2.src,
    title: "Precision Engineering",
    subtitle: "Customized thickness for diverse packaging",
  },
  {
    image: carousel3.src,
    title: "Sustainable Quality",
    subtitle: "Eco-friendly butter paper solutions",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row w-full h-112 bg-white border-b border-gray-100">
      <div className="w-full md:w-[60%] relative overflow-hidden h-full">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-1"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h3
                  className={`text-4xl md:text-5xl font-light text-white tracking-tight transition-transform duration-700 ${index === currentIndex ? "translate-y-0" : "translate-y-4"}`}
                >
                  <b>{item.title}</b>
                </h3>
                <div className="h-px w-16 bg-blue-500 my-4"></div>
                <p
                  className={`text-lg text-gray-200 font-light tracking-wide transition-transform duration-700 delay-100 ${index === currentIndex ? "translate-y-0" : "translate-y-4"}`}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full md:w-[40%] flex flex-col justify-center px-10 py-8">
        <header className="mb-6">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            Mom's <span className="text-blue-600">Kitchen</span>
          </h1>
          <div className="h-1 w-10 bg-blue-600 mt-1"></div>
        </header>

        <div className="space-y-4">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest leading-snug">
            Aluminium Foil & Butter Paper Manufacturer
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed text-justify">
            Welcome to{" "}
            <span className="font-semibold text-gray-800">
              SAHU GROUP OF INDUSTRIES
            </span>
            . We specialize in manufacturing premium Aluminium foils and Butter
            paper Rolls. As leading wholesalers of Jumbo Rolls, we provide
            high-quality, customized solutions across{" "}
            <span className="font-semibold italic">PAN India</span>.
          </p>

          <button className="mt-4 cursor-pointer px-6 py-2 border border-gray-900 text-gray-900 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300">
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

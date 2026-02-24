"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import carousel1 from "@/public/home/carousel1.jpg";
import carousel2 from "@/public/home/carousel2.jpg";
import carousel3 from "@/public/home/carousel3.jpg";

const slides = [
  {
    image: carousel1,
    stat: "30,000 MT/ANNUALLY",
    title: "SAHU GROUP",
    description:
      "Delivering high-grade aluminium solutions to global markets with precision and sustainability.",
    email: null,
  },
  {
    image: carousel2,
    stat: "PAN INDIA REACH",
    title: "SGOI PRIVATE LIMITED",
    description:
      "Customized thickness and superior heat retention for diverse industrial packaging needs.",
    email: "sgoicompany@gmail.com",
  },
  {
    image: carousel3,
    stat: "ISO 9001 CERTIFIED",
    title: "SGOI PRIVATE LIMITED",
    description:
      "Eco-friendly manufacturing processes ensuring 100% food-grade safety and reliability.",
    email: "sgoicompany@gmail.com",
  },
];

const textColors = ["text-[#D4AF37]", "text-[#8B4513]", "text-green-700"];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleExplore = () => {
    const section = document.getElementById("products-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[90dvh] overflow-hidden bg-slate-950">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`relative w-full h-full transition-transform duration-5000 ease-linear ${
              index === current ? "scale-110" : "scale-100"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover blur-[3px]"
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-900/40 to-transparent" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 lg:px-32">
            <div className="max-w-3xl">
              <div className="overflow-hidden mb-4">
                <span
                  className={`inline-block text-blue-500 font-bold tracking-[0.3em] text-[10px] md:text-sm uppercase transition-all duration-700 delay-300 ${
                    index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  {slide.stat}
                </span>
              </div>

              <h1
                className={`text-4xl ${textColors[index]} md:text-7xl font-bold leading-[1.1] mb-6 transition-all duration-700 delay-500 ${
                  index === current
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {slide.title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i === 2 ? `${textColors[index]}` : ""}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p
                className={`text-slate-200 text-sm md:text-xl max-w-xl mb-6 leading-relaxed font-light transition-all duration-700 delay-700 ${
                  index === current
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {slide.description}
              </p>

              <div
                className={`transition-all duration-700 delay-800 mb-8 ${
                  index === current
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {slide.email && (
                  <a
                    href={`mailto:${slide.email}`}
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-xs md:text-sm transition-colors group"
                  >
                    <Mail size={14} className="text-blue-400 shrink-0" />
                    <span className="font-medium text-slate-400 mr-1">
                      For Query:
                    </span>
                    <span className="underline underline-offset-2 decoration-slate-600 group-hover:decoration-blue-400 transition-all">
                      {slide.email}
                    </span>
                  </a>
                )}
              </div>

              <div
                className={`transition-all duration-700 delay-1000 ${
                  index === current
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <button
                  onClick={handleExplore}
                  className="group cursor-pointer flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all duration-300 shadow-lg shadow-blue-900/20"
                >
                  Explore Products
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <div
          key={current}
          className="h-full bg-blue-600 animate-progress-bar"
        />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-px h-16 bg-linear-to-b from-white/30 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500 animate-scroll-line" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-line {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
        @keyframes progress-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-scroll-line {
          animation: scroll-line 2s infinite linear;
        }
        .animate-progress-bar {
          animation: progress-bar 3500ms linear forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;

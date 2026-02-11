"use client";
import React from "react";

const MaterialSignature = () => {
  const products = [
    {
      label: "Series 01",
      name: "Ultra-Reflex Foil",
      trait: "Zero-Porosity Barrier",
      description:
        "Engineered with a molecular structure that blocks 100% of light and oxygen. Not just a wrap, but a vault for freshness.",
      color: "bg-slate-200",
    },
    {
      label: "Series 02",
      name: "Satin-Glide Paper",
      trait: "Organic Grease-Shield",
      description:
        "Non-stick surface technology derived from high-density pure pulp. Heat stable up to 220°C with zero chemical leaching.",
      color: "bg-blue-50",
    },
    {
      label: "Series 03",
      name: "Industrial Jumbos",
      trait: "High-Tensile Precision",
      description:
        "Master rolls designed for high-speed tension. Uniform thickness across 1000+ meters for seamless industrial converting.",
      color: "bg-gray-100",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Top Branding Bar */}
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 border-b border-gray-100 pb-8">
        <div>
          <h2 className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase mb-2">
            Material Signature
          </h2>
          <p className="text-4xl font-light text-slate-900 tracking-tight">
            The{" "}
            <span className="font-serif italic text-blue-500">Fine Art</span> of
            Preservation
          </p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
            Sahu Group / Industrial Standards <br />
            Division: Foil & Paper Excellence
          </p>
        </div>
      </div>

      {/* Creative Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[400px]">
        {products.map((item, index) => (
          <div
            key={index}
            className={`group relative flex-1 flex flex-col justify-between p-8 transition-all duration-700 ease-in-out hover:flex-[1.5] ${item.color} rounded-sm overflow-hidden`}
          >
            {/* Background Decorative Element (Metallic Gradient) */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/40 rounded-full blur-3xl group-hover:bg-blue-200/50 transition-colors duration-700" />

            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-widest text-blue-600/60 uppercase">
                {item.label}
              </span>
              <h3 className="text-2xl font-semibold text-slate-800 mt-2 mb-1 tracking-tight">
                {item.name}
              </h3>
              <p className="text-xs font-medium text-blue-500 uppercase tracking-tighter italic">
                {item.trait}
              </p>
            </div>

            <div className="relative z-10">
              <p className="text-sm text-slate-600 leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                {item.description}
              </p>

              <div className="mt-6 flex items-center gap-2">
                <div className="h-[1px] w-8 bg-slate-900 group-hover:w-16 transition-all duration-500"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  Spec Sheet
                </span>
              </div>
            </div>

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
          </div>
        ))}
      </div>

      {/* Floating Statement */}
      <div className="mt-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            We don't just manufacture rolls; we engineer the micro-environment
            that shields your product from the elements. Every micron is
            measured, every edge is precision-slit.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {[
            "Food Grade",
            "Heat Resistant",
            "100% Recyclable",
            "High Micron",
          ].map((tag) => (
            <span
              key={tag}
              className="px-5 py-2 rounded-full border border-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialSignature;

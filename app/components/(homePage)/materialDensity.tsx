"use client";
import React from "react";
import {
  ShieldCheck,
  Layers,
  ThermometerSun,
  Zap,
  Wind,
  Box,
} from "lucide-react";

const MaterialDensity = () => {
  return (
    <section className="relative bg-[#F8FAFC] py-16 px-4 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Decorative Texture - Fills "Emptiness" */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <span className="text-[20rem] font-black absolute -top-20 -left-20 tracking-tighter">
          FOIL
        </span>
        <span className="text-[20rem] font-black absolute -bottom-20 -right-20 tracking-tighter">
          PAPER
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        {/* TOP ROW: Brand Statement & Primary Material */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Chunk: The Manufacturing Core */}
          <div className="flex-[1.5] bg-white border border-slate-200 p-8 shadow-sm rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full transition-all group-hover:scale-110" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                  <Layers size={20} />
                </div>
                <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
                  Division: Premium Rolls
                </span>
              </div>

              <h2 className="text-4xl font-black text-slate-900 leading-[1.1] mb-6">
                Engineered for <br />
                <span className="text-blue-600">Absolute Integrity.</span>
              </h2>

              <p className="text-slate-500 max-w-lg leading-relaxed mb-8">
                Our manufacturing process involves high-precision cold-rolling
                of aluminium and organic pulp refining. We create a
                "Micro-Environment" within every wrap, ensuring that
                temperature, moisture, and oxidation are perfectly regulated.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["11-20 Micron", "Non-Porous", "Heat Stable", "Food Grade"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-slate-100 text-[10px] font-black text-slate-600 rounded-full uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Side Chunk: The Foil Spec Card */}
          <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl text-white shadow-xl shadow-blue-200 flex flex-col justify-between">
            <div className="space-y-4">
              <ShieldCheck size={40} className="text-blue-200" />
              <h3 className="text-2xl font-bold">The Silver Shield</h3>
              <p className="text-blue-100 text-sm leading-relaxed opacity-90">
                A high-reflexive surface that bounces back 95% of radiant heat.
                Our foil is tempered to resist tearing even at industrial
                high-speed packaging tensions.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-blue-300">
                    Application
                  </p>
                  <p className="text-lg font-semibold">
                    Industrial Jumbo Rolls
                  </p>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Zap size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Feature Grid (Built with Flex) */}
        <div className="flex flex-col md:flex-row flex-wrap gap-6">
          {/* Feature 1 */}
          <div className="flex-1 min-w-[300px] bg-slate-100/50 hover:bg-white border border-transparent hover:border-slate-200 p-8 rounded-3xl transition-all">
            <ThermometerSun className="text-orange-500 mb-4" />
            <h4 className="text-lg font-bold text-slate-800 mb-2">
              Thermal Resistance
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Maintains structural integrity from deep-freeze storage to
              high-heat commercial ovens without chemical migration.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex-1 min-w-[300px] bg-slate-100/50 hover:bg-white border border-transparent hover:border-slate-200 p-8 rounded-3xl transition-all">
            <Wind className="text-blue-500 mb-4" />
            <h4 className="text-lg font-bold text-slate-800 mb-2">
              Oxygen Barrier
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Molecularly dense structure that prevents aroma escape and
              inhibits aerobic bacteria growth for extended shelf life.
            </p>
          </div>

          {/* Feature 3: The Butter Paper Detail */}
          <div className="flex-[1.2] min-w-[300px] bg-white border border-slate-200 p-8 rounded-3xl flex items-center gap-6">
            <div className="hidden sm:flex w-24 h-24 bg-yellow-50 rounded-2xl flex-shrink-0 items-center justify-center">
              <Box size={40} className="text-yellow-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">
                Pure Pulp Butter Paper
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Siliconized on both sides for zero-stick performance.
                Chlorine-free and biodegradable material for the eco-conscious
                brand.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Industrial Footer Bar */}
        <div className="w-full h-12 bg-slate-900 rounded-2xl flex items-center justify-between px-8">
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">
              Sahu Manufacturing Plant Active
            </span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono tracking-tighter">
            SH-GR_IND-2024_BST
          </span>
        </div>
      </div>
    </section>
  );
};

export default MaterialDensity;

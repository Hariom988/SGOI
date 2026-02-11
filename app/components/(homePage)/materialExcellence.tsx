"use client";
import { ShieldCheck, Leaf, Factory, Zap } from "lucide-react"; // Optional: lucide-react for icons

const MaterialExcellence = () => {
  const features = [
    {
      title: "Thermal Integrity",
      description:
        "Our high-micron aluminium foil provides a total barrier to light, oxygen, and moisture, preserving the aromatic essence of food.",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      tag: "Protection",
    },
    {
      title: "Sustainable Purity",
      description:
        "Crafted from 100% food-grade, recyclable materials. Our butter paper is grease-proof and chlorine-free for conscious packaging.",
      icon: <Leaf className="w-6 h-6 text-emerald-500" />,
      tag: "Eco-Conscious",
    },
    {
      title: "Industrial Grade",
      description:
        "Jumbo rolls engineered for high-speed automated packing lines, ensuring zero-tear performance and consistent tensile strength.",
      icon: <Factory className="w-6 h-6 text-slate-700" />,
      tag: "Precision",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="flex flex-col items-center mb-20 text-center">
        <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4">
          The Sahu Standard
        </span>
        <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 max-w-3xl leading-tight">
          Crafting the{" "}
          <span className="font-semibold italic">Silvery Shield</span> that{" "}
          <br />
          defines modern food preservation.
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-transparent via-blue-400 to-transparent mt-8"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex-1 bg-slate-50 border border-slate-100 p-10 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-50 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 px-3 py-1 rounded-full">
                  {feature.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                {feature.title}
              </h3>

              <p className="text-slate-500 leading-relaxed font-light">
                {feature.description}
              </p>

              <div className="mt-auto pt-8">
                <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-12 bg-slate-900 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]"></div>

        <div className="relative z-10 mb-6 md:mb-0">
          <h4 className="text-white text-2xl font-medium">
            Ready for customized industrial solutions?
          </h4>
          <p className="text-slate-400 mt-2 font-light">
            Explore our bespoke foil thickness and roll dimensions.
          </p>
        </div>

        <button className="relative z-10 px-8 py-4 bg-white text-slate-900 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl">
          Consult an Expert
        </button>
      </div>
    </section>
  );
};

export default MaterialExcellence;

import React from "react";

interface Reason {
  id: number;
  title: string;
  description: string;
  image: string;
}

const reasons: Reason[] = [
  {
    id: 1,
    title: "Premium Micron Quality",
    description:
      "Available in 10.5 to 18 microns for heavy-duty industrial use.",
    image:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Food Grade Certified",
    description: "100% bacteria-free and non-toxic for safe food consumption.",
    image:
      "https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Superior Heat Retention",
    description:
      "Engineered to lock in heat and moisture for professional kitchens.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Eco-Friendly Choice",
    description:
      "100% recyclable aluminum focused on sustainable manufacturing.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase mb-2">
            Our Advantage
          </h2>
          <p className="text-2xl md:text-4xl font-light text-slate-900 leading-tight">
            Why we are the{" "}
            <span className="font-semibold">Preferred Choice</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center -m-2">
          {reasons.map((item) => (
            <div key={item.id} className="w-1/2 lg:w-1/4 p-2">
              <div className="group relative h-60 md:h-95 w-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl border border-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 "
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

                <div className="absolute bottom-5 left-0 right-0 px-4 text-center transform transition-all duration-500 group-hover:translate-y-4 group-hover:opacity-0">
                  <h3 className="text-white text-xs md:text-lg font-semibold tracking-wide">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 bg-white/60 backdrop-blur-xs">
                  <div className="w-6 h-1 bg-blue-600 mb-4 rounded-full" />

                  <h3 className="text-slate-900 font-bold text-sm md:text-lg mb-2 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-800 text-[10px] md:text-sm font-medium leading-relaxed px-1">
                    {item.description}
                  </p>

                  <div className="mt-4 text-[9px] font-bold text-blue-700 uppercase tracking-widest border-b border-blue-600/30 pb-1">
                    Certified Quality
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

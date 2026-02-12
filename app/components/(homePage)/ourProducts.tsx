import React from "react";
import Image, { StaticImageData } from "next/image";

import product1 from "@/public/home/product1.png";
import product2 from "@/public/home/product2.jpeg";
import product3 from "@/public/home/product3.jpg";
import product4 from "@/public/home/product4.jpeg";

interface Product {
  id: number;
  category: string;
  title: string;
  price: string;
  unit: string;
  image: StaticImageData;
  specs: string[];
}

const products: Product[] = [
  {
    id: 1,
    category: "Jumbo Rolls",
    title: "Silver Foil Jumbo",
    price: "265",
    unit: "Per Kg",
    image: product1,
    specs: ["Micron 18", "Food Grade", "ISO Certified", "Dispatch"],
  },
  {
    id: 2,
    category: "Aluminium Foil",
    title: "72 Mtr Kitchen Wrap",
    price: "250",
    unit: "Per Pcs",
    image: product2,
    specs: ["Micron 10.5", "Food Grade", "Domestic", "Approved"],
  },
  {
    id: 3,
    category: "Net / Gross",
    title: "1 Kg Commercial Foil",
    price: "295",
    unit: "Per Pcs",
    image: product3,
    specs: ["Micron 18", "Heavy Duty", "Wholesale", "Good Quality"],
  },
  {
    id: 4,
    category: "Food Wrap",
    title: "25 Mtr Standard",
    price: "87",
    unit: "Per Pcs",
    image: product4,
    specs: ["Micron 10.5", "Eco Friendly", "Standard", "Pan India"],
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <div className="flex flex-col bg-white rounded-2xl md:rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group h-full">
    <div className="relative h-32 md:h-64 bg-[#F8FAFC] flex items-center justify-center p-3 md:p-6 overflow-hidden">
      <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10">
        <span className="px-2 py-0.5 md:px-3 md:py-1 bg-white/90 backdrop-blur-md border border-slate-200 text-[7px] md:text-[10px] font-bold uppercase tracking-widest text-blue-600 rounded-full">
          {product.category}
        </span>
      </div>
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="object-contain p-4 md:p-8 transition-transform duration-700 "
        placeholder="blur"
      />
    </div>

    <div className="p-3 md:p-8 flex flex-col grow">
      <h3 className="text-xs md:text-xl font-bold text-slate-900 mb-1 md:mb-2 leading-tight line-clamp-1">
        {product.title}
      </h3>

      <div className="flex items-baseline gap-1 mb-3 md:mb-6">
        <span className="text-[10px] md:text-sm font-medium text-slate-500">
          Rs.
        </span>
        <span className="text-base md:text-2xl font-bold text-blue-600">
          {product.price}
        </span>
        <span className="text-[8px] md:text-xs text-slate-400 font-medium">
          /{product.unit}
        </span>
      </div>

      <div className="flex flex-wrap md:grid md:grid-cols-2 gap-1 md:gap-y-3 md:gap-x-2 mb-4 md:mb-8 border-t border-slate-50 pt-3 md:pt-6">
        {product.specs.map((spec, index) => (
          <div
            key={index}
            className="flex items-center gap-1.5 bg-slate-50 md:bg-transparent px-1.5 py-0.5 md:p-0 rounded"
          >
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-[8px] md:text-xs font-medium text-slate-600 whitespace-nowrap">
              {spec}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-auto hover:cursor-pointer w-full py-2 md:py-4 bg-slate-900 text-white text-[9px] md:text-xs font-bold uppercase tracking-widest rounded-lg md:rounded-xl hover:bg-blue-600 transition-colors duration-300">
        Quick Quote
      </button>
    </div>
  </div>
);

const Products = () => {
  return (
    <section className="py-12 md:py-24 bg-[#FBFCFE]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-8 md:mb-16">
          <h1 className="text-2xl md:text-5xl font-light text-slate-900 leading-tight mb-2 md:mb-4">
            Our{" "}
            <span className="font-bold underline decoration-blue-200 underline-offset-4 md:underline-offset-8">
              High Quality
            </span>{" "}
            Products
          </h1>
        </div>

        <div className="flex flex-wrap -m-1.5 md:-m-4">
          {products.map((product) => (
            <div key={product.id} className="w-1/2 lg:w-1/4 p-1.5 md:p-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

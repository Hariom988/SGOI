"use server";
import { createClient } from "@/lib/supabase/server";

interface Product {
  id: string;
  category: string;
  title: string;
  price: string;
  unit: string;
  image_url: string;
  specs: string[];
}

const ProductCard = ({ product }: { product: Product }) => (
  <div className="flex flex-col bg-white rounded-2xl md:rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group h-full">
    <div className="relative h-32 md:h-64 bg-[#F8FAFC] flex items-center justify-center p-3 md:p-6 overflow-hidden">
      <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10">
        <span className="px-2 py-0.5 md:px-3 md:py-1 bg-white/90 backdrop-blur-md border border-slate-200 text-[7px] md:text-[10px] font-bold uppercase tracking-widest text-blue-600 rounded-full">
          {product.category}
        </span>
      </div>
      <img
        src={product.image_url}
        alt={product.title}
        className="object-contain w-full h-full p-4 md:p-8"
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
      <a href="tel:+918527169717">
        <button className="mt-auto hover:cursor-pointer w-full py-2 md:py-4 bg-slate-900 text-white text-[9px] md:text-xs font-bold uppercase tracking-widest rounded-lg md:rounded-xl hover:bg-blue-600 transition-colors duration-300">
          Quick Quote
        </button>
      </a>
    </div>
  </div>
);

const Products = async () => {
  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select("*")
    .order("display_order", { ascending: true });

  const products: Product[] = data ?? [];

  return (
    <section id="products-section" className="py-12 md:py-24 bg-[#FBFCFE]">
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

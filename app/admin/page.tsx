"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Plus, Pencil, Trash2, LogOut, GripVertical } from "lucide-react";
import ProductModal from "@/app/components/(admin)/productModel";

interface Product {
  id: string;
  category: string;
  title: string;
  price: string;
  unit: string;
  image_url: string;
  specs: string[];
  display_order: number;
}

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setEditProduct(product);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setEditProduct(null);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setEditProduct(null);
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">
            SGOI <span className="text-blue-500">Admin</span>
          </h1>
          <p className="text-slate-500 text-xs mt-0.5">Product Management</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex cursor-pointer items-center gap-2 text-slate-400 hover:text-white text-xs font-medium transition-colors"
        >
          <LogOut size={16} />
          Logout
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Products</h2>
            <p className="text-slate-400 text-sm mt-1">
              {products.length} product{products.length !== 1 ? "s" : ""} total
            </p>
          </div>
          <button
            onClick={handleAdd}
            className="flex cursor-pointer items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
          >
            <Plus size={16} />
            Add Product
          </button>
        </div>

        {loading ? (
          <div className="text-slate-500 text-sm">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-slate-600 transition-all duration-300"
              >
                <div className="relative h-48 bg-slate-800">
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-full h-full object-contain p-4"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-slate-900/90 border border-slate-700 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {product.category}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-white text-sm mb-1 line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-blue-400 font-bold text-lg">
                    Rs. {product.price}
                    <span className="text-slate-500 text-xs font-normal ml-1">
                      / {product.unit}
                    </span>
                  </p>

                  <div className="flex flex-wrap gap-1 mt-3 mb-4">
                    {product.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="bg-slate-800 text-slate-400 text-[10px] px-2 py-0.5 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 border-t border-slate-800 pt-3">
                    <button
                      onClick={() => handleEdit(product)}
                      className="cursor-pointer flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition-colors"
                    >
                      <Pencil size={12} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="cursor-pointer flex-1 flex items-center justify-center gap-1.5 py-2 bg-red-950/50 hover:bg-red-900/50 text-red-400 text-xs font-medium rounded-lg transition-colors"
                    >
                      <Trash2 size={12} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={handleAdd}
              className="cursor-pointer border-2 border-dashed border-slate-800 hover:border-blue-600 rounded-2xl h-64 flex flex-col items-center justify-center gap-3 text-slate-600 hover:text-blue-500 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus size={20} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">
                Add Product
              </span>
            </button>
          </div>
        )}
      </main>

      {modalOpen && (
        <ProductModal product={editProduct} onClose={handleModalClose} />
      )}
    </div>
  );
}

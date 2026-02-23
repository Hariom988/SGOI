"use client";

import { useState } from "react";
import { X, Upload } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface Product {
  id?: string;
  category: string;
  title: string;
  price: string;
  unit: string;
  image_url: string;
  specs: string[];
  display_order: number;
}

interface Props {
  product: Product | null;
  onClose: () => void;
}

const emptyProduct: Product = {
  category: "",
  title: "",
  price: "",
  unit: "Per Pcs",
  image_url: "",
  specs: ["", "", "", ""],
  display_order: 0,
};

export default function ProductModal({ product, onClose }: Props) {
  const [form, setForm] = useState<Product>(product ?? emptyProduct);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const supabase = createClient();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const ext = file.name.split(".").pop();
    const filename = `${Date.now()}.${ext}`;

    const { data, error } = await supabase.storage
      .from("product-images")
      .upload(filename, file, { upsert: true });

    if (error) {
      setError("Image upload failed.");
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("product-images")
      .getPublicUrl(data.path);

    setForm((prev) => ({ ...prev, image_url: urlData.publicUrl }));
    setUploading(false);
  };

  const handleSpecChange = (index: number, value: string) => {
    const newSpecs = [...form.specs];
    newSpecs[index] = value;
    setForm((prev) => ({ ...prev, specs: newSpecs }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      specs: form.specs.filter((s) => s.trim() !== ""),
    };

    const isEdit = !!product?.id;
    const url = isEdit ? `/api/products/${product!.id}` : "/api/products";
    const method = isEdit ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      setError("Failed to save product.");
      setSaving(false);
      return;
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-lg font-bold text-white">
            {product?.id ? "Edit Product" : "Add New Product"}
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer text-slate-500 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
              Product Image
            </label>
            {form.image_url && (
              <div className="w-full h-40 bg-slate-800 rounded-xl mb-3 overflow-hidden">
                <img
                  src={form.image_url}
                  alt="preview"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            )}
            <label className="flex items-center gap-3 w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 text-sm cursor-pointer transition-colors">
              <Upload size={16} />
              {uploading ? "Uploading..." : "Upload Image"}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
                disabled={uploading}
              />
            </label>
            <p className="text-slate-600 text-xs mt-1">Or paste a URL below:</p>
            <input
              type="text"
              placeholder="https://..."
              value={form.image_url}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, image_url: e.target.value }))
              }
              className="mt-1 w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
              Category
            </label>
            <input
              type="text"
              placeholder="e.g. Aluminium Foil"
              value={form.category}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, category: e.target.value }))
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
              Product Title
            </label>
            <input
              type="text"
              placeholder="e.g. 72 Mtr Kitchen Wrap"
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                Price (Rs.)
              </label>
              <input
                type="text"
                placeholder="295"
                value={form.price}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, price: e.target.value }))
                }
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                Unit
              </label>
              <select
                value={form.unit}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, unit: e.target.value }))
                }
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option>Per Pcs</option>
                <option>Per Kg</option>
                <option>Per Roll</option>
                <option>Per Box</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
              Display Order
            </label>
            <input
              type="number"
              placeholder="0"
              value={form.display_order}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  display_order: Number(e.target.value),
                }))
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <p className="text-slate-600 text-xs mt-1">
              Lower number = shown first on homepage
            </p>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
              Specs (up to 4)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={
                    ["Micron 18", "Food Grade", "ISO Certified", "Dispatch"][i]
                  }
                  value={form.specs[i] ?? ""}
                  onChange={(e) => handleSpecChange(i, e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              ))}
            </div>
          </div>

          {error && <p className="text-red-400 text-xs">{error}</p>}
        </div>

        <div className="flex gap-3 p-6 border-t border-slate-800">
          <button
            onClick={onClose}
            className="cursor-pointer flex-1 py-3 bg-slate-800 text-slate-300 text-sm font-medium rounded-xl hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving || uploading}
            className="cursor-pointer flex-1 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving
              ? "Saving..."
              : product?.id
                ? "Update Product"
                : "Add Product"}
          </button>
        </div>
      </div>
    </div>
  );
}

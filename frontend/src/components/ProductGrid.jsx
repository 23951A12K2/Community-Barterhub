import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items }) {
  if (!items || items.length === 0) {
    return <p className="text-center text-gray-500">No items found in this category.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((it) => <ProductCard key={it.id} item={it} />)}
    </div>
  );
}

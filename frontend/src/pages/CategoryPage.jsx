import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { fetchProductsByCategory } from "../api/api";

export default function CategoryPage() {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!category) return;
    fetchProductsByCategory(category)
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error("fetchProductsByCategory error:", err);
        setItems([]);
      });
  }, [category]);

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-brand mb-6 capitalize">{category}</h2>
      </div>
      <ProductGrid items={items} />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import CategoryButtons from "../components/CategoryButtons";
import ProductGrid from "../components/ProductGrid";
import { fetchAllProducts } from "../api/api";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchAllProducts()
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error("fetchAllProducts error:", err);
        setItems([]);
      });
  }, []);

  return (
    <>
      <Hero />
      <CategoryButtons />
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand mb-6">Available Products</h2>
        </div>
        <ProductGrid items={items} />
      </section>
    </>
  );
}

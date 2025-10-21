import React from "react";
import { Link } from "react-router-dom";

export default function CategoryButtons() {
  const categories = ["electronics", "books", "clothes"];
  return (
    <div id="categories" className="max-w-7xl mx-auto px-6 flex justify-center gap-6 my-10">
      {categories.map((cat) => (
        <Link key={cat} to={`/category/${cat}`}>
          <div className="px-6 py-3 rounded-full bg-highlight text-brand font-semibold shadow hover:scale-[1.02] transition">
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </div>
        </Link>
      ))}
    </div>
  );
}

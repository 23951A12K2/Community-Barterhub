import React from "react";

export default function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-64">
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <img
          src={item.imageUrl || "/assets/placeholder.jpg"}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mt-3 text-brand">{item.name}</h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-3">{item.description}</p>
      <p className="mt-3 text-sm"><span className="font-medium">Condition:</span> {item.condition}</p>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-brand">BarterHub</Link>

        <div className="hidden md:flex items-center space-x-8 text-gray-700">
          <Link to="/" className="hover:text-brand">Home</Link>
          <Link to="/category/electronics" className="hover:text-brand">Categories</Link>
          <Link to="/category/books" className="hover:text-brand">About</Link>
        </div>

        <div className="ml-4">
          <Link to="/add" className="bg-brand text-white px-4 py-2 rounded-lg shadow hover:opacity-95">Add Item</Link>
        </div>
      </div>
    </nav>
  );
}

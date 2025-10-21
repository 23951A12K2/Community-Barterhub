import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-brand leading-tight">
            Trade Without Money,<br/>Build Community
          </h1>
          <p className="mt-6 text-gray-700 max-w-xl">
            Connect with neighbors and discover great items to trade. From books to tools and electronics to handmade crafts — find what you need while sharing what you have.
          </p>
          <a href="#categories" className="inline-block mt-8">
            <button className="px-6 py-3 rounded-lg bg-brand text-white font-semibold shadow">Start Browsing</button>
          </a>
        </div>

        <div className="lg:w-1/2">
          <div className="rounded-2xl p-4 bg-white shadow-lg">
            <img
              src="/assets/community-hero.jpg"
              alt="community"
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

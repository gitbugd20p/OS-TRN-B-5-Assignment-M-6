import React from "react";

const HeroSection = () => {
  return (
    <section className="flex min-h-[600px] flex-col justify-center bg-[url(assets/hero.png)] bg-center">
      <div className="mx-auto max-w-4xl text-center text-white">
        <h2 className="text-4xl font-bold text-yellow-300 capitalize">
          The Book Lover's Dreamland Awaits!
        </h2>
        <p>
          Welcome to the ultimate book lover's paradise! Join our community and
          contribute to the ever-evolving library of stories, where every book
          has a chance to inspire someone new.
        </p>
        <div className="relative mx-auto w-1/3 rounded-md border border-yellow-300/30 px-5 py-3 text-left">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
          <button className="absolute top-1 right-1 rounded-md bg-yellow-500/30 px-5 py-2 text-white">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

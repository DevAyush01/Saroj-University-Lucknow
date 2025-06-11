import React from "react";
import HeroBanner from "../assets/siu-hero-banner.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[100vh] pt-28"
      style={{ backgroundImage: `url(${HeroBanner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-10 text-white max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Welcome to Saroj International University
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl leading-relaxed">
          Saroj University integrates innovative research and inclusive
          education to shape professionals driven by impact and excellence.
        </p>
        <a
          href="https://siu.in8.nopaperforms.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 px-6 py-2 text-white rounded font-semibold"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

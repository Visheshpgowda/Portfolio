import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="py-20 w-full bg-gradient-to-b from-black to-gray-900">
      {/* Centered Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-bold">
          My <span className="text-purple-500">work experience</span>
        </h1>

        {/* Grid of Cards */}
        <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center items-start">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
              // Removed flex-1 to avoid unwanted stretching
              className="text-black dark:text-white border border-neutral-200 
                         dark:border-slate-800 rounded-xl overflow-hidden w-full"
            >
              <div className="flex flex-col lg:flex-row lg:items-center p-5 lg:p-10 gap-4">
                {/* Thumbnail (can use Image from 'next/image' if preferred) */}
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="lg:w-32 md:w-20 w-16"
                />

                {/* Text Content */}
                <div className="lg:ml-5">
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-white/80 font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

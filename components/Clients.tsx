"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-18">
      <h1 className="heading mb-10">
        <span className="text-purple">Techstack</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 py-5">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white shadow-md rounded-full"
            >
              <img
                src={company.img}
                alt={company.name}
                className="w-12 sm:w-16 md:w-20 lg:w-24 object-contain"
              />
            </div>
          ))}
        </div>

        <h1 className="heading py-10">
          <span className="text-purple">Activities & Certificates</span>
        </h1>

        <div className="h-[20vh] md:h-[15rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900 shadow-lg p-4">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;

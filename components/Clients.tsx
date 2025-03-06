"use client";

import React, { useState } from "react";
import { companies, testimonials } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Clients = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(undefined);
  const [activeTab, setActiveTab] = useState("techstack");

  // Only featured certificates (first 6 items)
  const featuredCertificates = testimonials.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-b from-gray-900 to-gray-950 text-white"
    >
      {/* Section Header with Tabs */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-8 relative inline-block">
          Our <span className="text-purple-400">Expertise</span>
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
          />
        </h2>
        
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("techstack")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "techstack"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Technology Stack
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "certifications"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Certifications
          </button>
        </div>
      </div>

      {/* Techstack Section */}
      {activeTab === "techstack" && (
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center justify-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 transition-all duration-300 overflow-hidden group"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 25px rgba(128,90,213,0.3)",
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(undefined)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <Image
                  src={company.img}
                  alt={company.name}
                  width={80}
                  height={80}
                  className="object-contain z-10 transition-all duration-300 group-hover:scale-110"
                  style={{
                    filter: hoveredIndex === index ? "brightness(1.2)" : "brightness(0.8)",
                  }}
                />
                
                <motion.div
                  className={`absolute bottom-3 left-0 right-0 mx-auto text-center transition-all duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Badge
                    variant="outline"
                    className="bg-purple-600/80 backdrop-blur-sm text-white border-purple-500 px-3 py-1"
                  >
                    {company.name}
                  </Badge>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Featured Certificates Carousel */}
      {activeTab === "certifications" && (
        <motion.div 
          className="p-8 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-md rounded-2xl shadow-xl border border-purple-800/30"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-semibold mb-10 text-center relative inline-block">
            Professional Certifications
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent" />
          </h3>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {featuredCertificates.map((cert, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="h-full"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.03, 
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <Card className="h-full border-t-4 border-purple-500 bg-gray-800/70 backdrop-blur-sm text-white hover:shadow-2xl hover:shadow-purple-600/20 transition-all duration-300">
                      <CardHeader className="pb-2">
                        <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden group">
                          <Image
                            src={cert.img}
                            alt={cert.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                        </div>
                        <CardTitle className="text-xl">{cert.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-300 flex items-center">
                          <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                          {cert.issuer || "Certified"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-gray-400 line-clamp-3">
                          {cert.text}
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center border-t border-gray-700/50 pt-4 mt-2">
                        <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                          {cert.date || "2023"}
                        </span>
                        <motion.div
                          className="text-xs text-purple-400 font-medium flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="text-xs">{cert.quote}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-purple-600 hover:bg-purple-700 border-none shadow-lg shadow-purple-600/20" />
            <CarouselNext className="right-0 bg-purple-600 hover:bg-purple-700 border-none shadow-lg shadow-purple-600/20" />
          </Carousel>
        </motion.div>
      )}
    </section>
  );
};

export default Clients;
"use client";

import React, { useState, useEffect } from "react";
import { companies, testimonials } from "@/data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

// Custom hook for responsive design
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Initial check
      setMatches(media.matches);
      
      // Add listener for changes
      const listener = () => setMatches(media.matches);
      media.addEventListener('change', listener);
      
      // Clean up
      return () => media.removeEventListener('change', listener);
    }
    return undefined;
  }, [query]);
  
  return matches;
};

// Define certificate type
interface Certificate {
  img: string;
  name: string;
  issuer?: string;
  text: string;
  date?: string;
  quote: string;
  title?: string;
}

// Certification card component
const CertificationCard: React.FC<{ cert: Certificate }> = ({ cert }) => (
  <Card className="h-full border-t-4 border-purple-500 bg-gray-800/70 backdrop-blur-sm text-white hover:shadow-2xl hover:shadow-purple-600/20 transition-all duration-300">
    <CardHeader className="pb-2">
      <div className="relative w-full h-36 md:h-48 mb-3 md:mb-4 rounded-md overflow-hidden group">
        <Image
          src={cert.img}
          alt={cert.title || cert.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      <CardTitle className="text-lg md:text-xl">{cert.name}</CardTitle>
      <CardDescription className="text-xs md:text-sm text-gray-300 flex items-center">
        <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
        {cert.issuer || "Certified"}
      </CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <p className="text-xs md:text-sm text-gray-400 line-clamp-3">
        {cert.text}
      </p>
    </CardContent>
    <CardFooter className="flex justify-between items-center border-t border-gray-700/50 pt-3 md:pt-4 mt-2">
      <span className="text-xs bg-gray-700/50 px-2 py-1 rounded-full">
        {cert.date || "2023"}
      </span>
      <motion.div
        className="text-xs text-purple-400 font-medium flex items-center gap-1"
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span>{cert.quote}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.div>
    </CardFooter>
  </Card>
);

const Clients: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"techstack" | "certifications">("techstack");
  const [animateCards, setAnimateCards] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const handleTabSwitch = (tab: "techstack" | "certifications") => {
  if (tab === activeTab) return; // Do nothing if already active
  setActiveTab(tab);
  setAnimateCards(false);
  setTimeout(() => {
    setAnimateCards(true);
  }, 50);
};

  // Only featured certificates
  const featuredCertificates = testimonials.slice(0, 6);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimateCards(true);
    
    // Reset animation when tab changes
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const tabContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section
      id="testimonials"
      className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden"
    >
      {/* Section Header with Tabs */}
      <div className="mb-8 md:mb-12 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-purple-400">Expertise</span>
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button
  onClick={() => handleTabSwitch("techstack")}
  className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
    activeTab === "techstack"
      ? "bg-pink-800 text-white shadow-lg shadow-purple-500/30"
      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
  }`}
>
  Technology Stack
</button>

<button
  onClick={() => handleTabSwitch("certifications")}
  className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
    activeTab === "certifications"
      ? "bg-pink-800 text-white shadow-lg shadow-purple-500/30"
      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
  }`}
>
  Certifications
</button>


        </motion.div>
      </div>

      {/* Content Container with AnimatePresence for smooth tab transitions */}
      <AnimatePresence mode="wait">
        {/* Techstack Section */}
        {activeTab === "techstack" && (
          <motion.div 
            key="techstack"
            className="mb-8 md:mb-16"
            variants={tabContainerVariants}
            initial="hidden"
            animate={animateCards ? "visible" : "hidden"}
            exit="exit"
          >
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8"
              variants={containerVariants}
            >
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center justify-center p-3 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 transition-all duration-300 overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 25px rgba(128,90,213,0.3)",
                  }}
                  onHoverStart={() => !isMobile && setHoveredIndex(index)}
                  onHoverEnd={() => !isMobile && setHoveredIndex(null)}
                  onTouchStart={() => isMobile && setHoveredIndex(index === hoveredIndex ? null : index)}
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Animated border */}
                  <motion.div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.4), transparent)",
                      backgroundSize: "200% 100%"
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "200% 0%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Logo image */}
                  <Image
                    src={company.img}
                    alt={company.name}
                    width={isMobile ? 50 : 80}
                    height={isMobile ? 50 : 80}
                    className="object-contain z-10 transition-all duration-300 group-hover:scale-110"
                    style={{
                      filter: hoveredIndex === index ? "brightness(1.2)" : "brightness(0.8)",
                    }}
                  />
                  
                  {/* Tooltip with company name */}
                  <motion.div
                    className={`absolute bottom-2 left-0 right-0 mx-auto text-center transition-all duration-300 ${
                      hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                  >
                    <Badge
                      variant="outline"
                      className="bg-purple-600/80 backdrop-blur-sm text-white border-purple-500 px-2 py-0.5 text-xs md:px-3 md:py-1 md:text-sm"
                    >
                      {company.name}
                    </Badge>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Featured Certificates Carousel */}
        {activeTab === "certifications" && (
          <motion.div 
            key="certifications"
            className="p-4 md:p-8 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-md rounded-2xl shadow-xl border border-purple-800/30"
            variants={tabContainerVariants}
            initial="hidden"
            animate={animateCards ? "visible" : "hidden"}
            exit="exit"
          >
            <motion.h3 
              className="text-xl md:text-2xl font-semibold mb-6 md:mb-10 text-center relative inline-block"
              variants={itemVariants}
            >
              Professional Certifications
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent" />
            </motion.h3>
            
            {/* Mobile view: Card stack with swipe */}
            {isMobile ? (
              <Carousel className="w-full mx-auto">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {featuredCertificates.map((cert, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                      <motion.div
                        className="h-full"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <CertificationCard cert={cert} />
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-2">
                  <CarouselPrevious className="static transform-none bg-purple-600 hover:bg-purple-700 border-none shadow-lg shadow-purple-600/20 h-8 w-8" />
                  <CarouselNext className="static transform-none bg-purple-600 hover:bg-purple-700 border-none shadow-lg shadow-purple-600/20 h-8 w-8" />
                </div>
              </Carousel>
            ) : (
              /* Desktop view: 3-column carousel */
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
                        <CertificationCard cert={cert} />
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 -translate-x-1/2 bg-purple-600 hover:bg-purple-700 border-none shadow-lg shadow-purple-600/20" />
                <CarouselNext className="right-0 translate-x-1/2 bg-purple-600 hover:bg-purple-700 border-none shadow-lg shadow-purple-600/20" />
              </Carousel>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Clients;
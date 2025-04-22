import React, { useState } from "react";
import { workExperience } from "@/data";
import { motion } from "framer-motion";

// Define the type based on your existing data structure
type WorkExperienceItem = {
  id: number;
  title: string;
  company: string;
  period: string;
  desc: string;
  skills: string[];
  className: string;
  thumbnail: string;
  color: string;
  bgColor: string;
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const glowVariants = {
    hover: {
      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.3 },
    },
    initial: {
      boxShadow: "0 0 0px rgba(59, 130, 246, 0)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section Heading with animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">Work Experience</h2>
          <p className="text-gray-300 max-w-xl mx-auto">A journey through my professional career and the skills I've developed along the way.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-300 mx-auto mt-4"></div>
        </motion.div>

        {/* Navigation and Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left side - timeline navigation */}
          <div className="lg:w-1/3">
            <motion.div 
              className="sticky top-20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative ml-4 before:absolute before:left-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:to-indigo-300 before:-ml-4">
                {workExperience.map((item: WorkExperienceItem, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    className="mb-10 relative"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <motion.div 
                      className={`absolute -left-6 w-8 h-8 rounded-full 
                        ${activeIndex === index ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-slate-700'} 
                        flex items-center justify-center cursor-pointer
                        transition-all duration-300 z-10`}
                      whileHover={{ scale: 1.2 }}
                    >
                      <span className={`text-white text-sm ${activeIndex === index ? 'font-bold' : ''}`}>{index + 1}</span>
                    </motion.div>
                    
                    <motion.div 
                      className={`pl-8 py-3 transition-all duration-300 rounded-lg cursor-pointer
                        ${activeIndex === index ? 'bg-slate-800/70 shadow-lg border-l-2 border-blue-500' : 'hover:bg-slate-800/30'}`}
                      whileHover={{ x: 5 }}
                      onClick={() => setActiveIndex(index)}
                    >
                      <h3 className={`font-bold text-lg ${activeIndex === index ? 'text-blue-300' : 'text-white'}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300">{item.company}</p>
                      <p className="text-xs text-gray-400 mt-1">{item.period}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - detailed experience */}
          <div className="lg:w-2/3">
            <motion.div
  key={activeIndex}
  initial={{ opacity: 0, x: 20 }}
  animate={{
    opacity: 1,
    x: 0,
    boxShadow: isHovering ? "0 0 20px rgba(59, 130, 246, 0.3)" : "0 0 0px rgba(59, 130, 246, 0)"
  }}
  exit={{ opacity: 0, x: -20 }}
  transition={{ duration: 0.5 }}
  className="bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden"
>

              {/* Header with company info */}
              <div className={`bg-gradient-to-r ${workExperience[activeIndex].color} bg-opacity-20 p-6`}>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative mr-4 overflow-hidden rounded-xl bg-slate-900/60 p-2 flex items-center justify-center border border-slate-700">
                    <motion.img 
                      src={workExperience[activeIndex].thumbnail} 
                      alt={`${workExperience[activeIndex].company} thumbnail`}
                      className="w-full object-contain"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1.05 }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                      {workExperience[activeIndex].title}
                    </h3>
                    <p className="text-blue-200">{workExperience[activeIndex].company}</p>
                    <p className="text-sm text-gray-300">{workExperience[activeIndex].period}</p>
                  </div>
                </div>
              </div>

              {/* Description and skills */}
              <div className="p-6">
                <div className="mb-8">
                  <h4 className="text-sm uppercase text-gray-300 mb-2 tracking-wider font-semibold">Description</h4>
                  <p className="text-gray-200 leading-relaxed">{workExperience[activeIndex].desc}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase text-gray-300 mb-3 tracking-wider font-semibold">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {workExperience[activeIndex].skills.map((skill: string, idx: number) => (
                      <motion.span 
                        key={idx} 
                        className={`px-3 py-1 bg-gradient-to-r ${workExperience[activeIndex].color} bg-opacity-20 text-white rounded-full text-xs font-medium`}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Computer animation */}
                <div className="mt-10 flex justify-center">
                  <motion.div 
                    className="relative w-64 h-48"
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-full h-40 bg-slate-900 rounded-md border border-slate-700 shadow-lg relative overflow-hidden">
                      <div className="h-6 w-full bg-slate-800 flex items-center px-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="p-3 text-xs font-mono">
                        <motion.div
                          animate={{ opacity: [0, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                          className="text-green-400"
                        >
                          &gt; Loading {workExperience[activeIndex].title} experience...
                        </motion.div>
                        <motion.div
                          animate={{ opacity: [0, 1] }}
                          transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                          className="text-cyan-400"
                        >
                          &gt; Company: {workExperience[activeIndex].company}
                        </motion.div>
                        <motion.div
                          animate={{ opacity: [0, 1] }}
                          transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                          className="text-purple-300"
                        >
                          &gt; Skills: [{workExperience[activeIndex].skills.join(', ')}]
                        </motion.div>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-b-xl"></div>
                    <div className="w-20 h-1 bg-slate-700 mx-auto"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaRegClock } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  // Get unique categories from projects
 const categories = Array.from(new Set(projects.map(project => project.category)));


  const [activeTab, setActiveTab] = useState(categories[0] || "development");

  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      
      {/* Category Tabs */}
      <div className="flex justify-center mt-10">
        <Tabs 
          defaultValue={categories[0]} 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full max-w-7xl px-4"
        >
          <TabsList className="grid mb-12" style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}>
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="text-base capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          <TabsContent value={activeTab} className="mt-0">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((item) => (
                <div
                  className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center"
                  key={item.id}
                >
                  {/* ... within the map over filteredProjects ... */}
<PinContainer href={item.link}>
  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
    <div
      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
      style={{ backgroundColor: "#13162D" }}
    >
      <img src="/bg.png" alt="bgimg" />
    </div>
    <img
      src={item.img}
      alt="cover"
      className="z-10 absolute bottom-0"
    />
  </div>

  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
    {item.title}
  </h1>

  <p
    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
    style={{
      color: "#BEC1DD",
      margin: "1vh 0",
    }}
  >
    {item.des}
  </p>

  {/* Timeline Element */}
  <div className="mt-2">
  <span className="flex items-center space-x-1 px-3 py-1 bg-purple/10 text-purple text-xs font-medium rounded-full">
    <FaRegClock className="text-purple" />
    <span>Built in {item.timeline}</span>
  </span>
</div>

  <div className="flex items-center justify-between mt-7 mb-3">
    <div className="flex items-center">
      {item.iconLists.map((icon, index) => (
        <div
          key={index}
          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
          style={{
            transform: `translateX(-${5 * index + 2}px)`,
          }}
        >
          <img src={icon} alt="icon" className="p-2" />
        </div>
      ))}
      <div className="flex justify-center items-center">
        <a href={item.link} className="flex lg:text-xl md:text-xs text-sm text-purple">
          CodeBase for the Project
        </a>
        <FaLocationArrow className="ms-3" color="#CBACF9" />
      </div>
    </div>
  </div>
</PinContainer>

                </div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RecentProjects;
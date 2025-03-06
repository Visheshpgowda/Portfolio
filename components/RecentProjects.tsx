"use client";

import { useState } from "react";
import { FaLocationArrow, FaRegClock,FaArrowPointer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

// Define a Project interface matching your project objects
interface Project {
  id: number;
  category: string;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  timeline: string;
  link: string;
}

// Define props for the ProjectPopover component
interface ProjectPopoverProps {
  project: Project;
  onClose: () => void;
}

const ProjectPopover: React.FC<ProjectPopoverProps> = ({ project, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-black rounded-lg p-6 w-11/12 max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-900 hover:text-gray-800"
        >
          X
        </button>
        <h2 className="text-xl text-red-300 font-bold mb-4">{project.title}</h2>
        <p className="mb-4">{project.des}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-center text-red-600 hover:text-white"
          >
           <FaArrowPointer/> View on GitHub
          </a>
        )}
      </motion.div>
    </div>
  );
};

const RecentProjects = () => {
  // Get unique categories from projects
  const categories = Array.from(new Set(projects.map((project: Project) => project.category)));

  const [activeTab, setActiveTab] = useState(categories[0] || "development");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Filter projects based on active tab
  const filteredProjects = projects.filter(
    (project: Project) => project.category === activeTab
  );

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
          <TabsList
            className="grid mb-12"
            style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}
          >
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
              {filteredProjects.map((item: Project) => (
                <div
                  className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center cursor-pointer"
                  key={item.id}
                  onClick={() => setActiveProject(item)}
                >
                  <PinContainer>
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
                          <span className="flex lg:text-xl md:text-xs text-sm text-purple">
                            CodeBase for the Project
                          </span>
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
      {activeProject && (
        <ProjectPopover
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
};

export default RecentProjects;

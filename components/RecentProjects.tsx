

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaTools } from "react-icons/fa";
import { projects } from "@/data";
// Example data for projects


// MobileCategorySelector component
const MobileCategorySelector = ({
  categories,
  activeCategory,
  onChange,
}: {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}) => {
  return (
    <div className="relative mb-6">
      <select
        value={activeCategory}
        onChange={(e) => {
          const selected = e.target.value;
          if (selected !== activeCategory) onChange(selected);
        }}
        className="block w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

// Project Modal component
const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <AnimatePresence>
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 border border-gray-800 rounded-lg w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl"
        >
          <div className="relative">
            <div className="h-48 md:h-64 bg-gradient-to-r from-purple-900 to-blue-900 rounded-t-lg overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-900 text-purple-200">
                {project.category}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300">
                <FaCalendarAlt className="text-gray-400" size={12} />
                {project.timeline}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">{project.des}</p>

            <div className="mb-6">
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <FaTools />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.iconLists.map((icon: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                    <img src={icon} alt={`tech-${index}`} className="w-4 h-4" />
                    <span className="text-sm text-gray-300">Tech {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {project.link && (
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-lg transition-colors"
                >
                  <FaGithub />
                  View Repository
                </a>
                {/* <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a> */}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Project Card component
const ProjectCard = ({
  project,
  onClick,
}: {
  project: any;
  onClick: (project: any) => void;
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col cursor-pointer group"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-3 left-3 z-20">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-900 text-purple-200">
              {project.category}
            </span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-200 flex items-center">
              <FaCalendarAlt className="mr-1 text-purple-400" size={12} />
              {project.timeline}
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-bold text-xl text-white mb-2 line-clamp-1">{project.title}</h3>

        <p className="text-gray-400 mb-4 line-clamp-2">{project.des}</p>

        <div className="my-3 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-1 bg-gradient-to-r from-purple-500 to-purple-800 rounded-full"
            style={{ width: "70%" }} // This could be dynamic based on project completion or timeline
          />
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between mt-4">
            <div className="flex -space-x-2">
              {project.iconLists.slice(0, 3).map((icon: string, index: number) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center overflow-hidden"
                >
                  <img src={icon} alt={`tech-icon-${index}`} className="w-5 h-5" />
                </div>
              ))}
              {project.iconLists.length > 3 && (
                <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-xs text-gray-300">
                  +{project.iconLists.length - 3}
                </div>
              )}
            </div>

            <div className="flex items-center">
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                View Details →
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects component
const Projects = () => {
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  

const filteredProjects =
  activeCategory === "All"
    ? projects
    : projects.filter(
        (project) =>
          project.category.trim().toLowerCase() === activeCategory.trim().toLowerCase()
      );

  

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section className="py-16 md:py-20 px-4 bg-gray-950" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400">A collection of my recent works</p>
        </div>

        {/* Category Selector */}
        {isMobile ? (
          <MobileCategorySelector categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
        ) : (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-medium rounded-full ${
                  activeCategory === category ? "bg-purple-500 text-white" : "bg-gray-800 text-gray-300"
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
     // Log here safely
    return (
      <ProjectCard
        key={project.id}
        project={project}
        onClick={handleProjectClick}
      />
    );
  })}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Projects;

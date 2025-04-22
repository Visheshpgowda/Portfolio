"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaTools } from "react-icons/fa";
import { projects } from "@/data";

// Project interface
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

// Component props interfaces
interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

// Modal component for project details
const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
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
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Project card component with integrated timeline
const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
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
            {/* Timeline badge */}
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
        
        {/* Timeline indicator */}
        <div className="my-3 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-1 bg-gradient-to-r from-purple-500 to-purple-800 rounded-full"
            style={{ width: "70%" }}  // This could be dynamic based on project completion or timeline
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

// Mobile dropdown category selector
const MobileCategorySelector: React.FC<{
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}> = ({ categories, activeCategory, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <div className="relative w-full mb-6">
      <button 
        className="flex items-center justify-between w-full p-3 text-white bg-gray-800 border border-gray-700 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{activeCategory || "Select Category"}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
          {categories.map((category: string) => (
            <button
              key={category}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                activeCategory === category ? 'text-purple-400 font-medium' : 'text-gray-300'
              }`}
              onClick={() => {
                onChange(category);
                setIsOpen(false);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const PortfolioProjects: React.FC = () => {
  // Get unique categories from projects
  const categories = ["All", ...Array.from(new Set(projects.map((project: Project) => project.category)))];
  
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if on mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter((project: Project) => project.category === activeCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section className="py-16 md:py-20 px-4 bg-gray-950" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-purple-500">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my skills and experience through carefully crafted projects that demonstrate my technical expertise and problem-solving abilities.
          </p>
        </div>

        {/* Category Filters - Desktop */}
        <div className="hidden md:block mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex justify-center">
            <div className="inline-flex bg-gray-900 rounded-full p-1">
              {categories.map((category: string) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    activeCategory === category
                      ? "bg-purple-700 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Selector - Mobile */}
        <div className="md:hidden mb-8">
          <MobileCategorySelector 
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Timeline Header - Shows when projects exist */}
        {filteredProjects.length > 0 && (
          <div className="mb-8 bg-gray-900 rounded-lg p-4 border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-white mb-1">Development Timeline</h3>
            <p className="text-gray-400 text-sm">
              Projects are displayed with their development timelines to showcase my journey and growth as a developer.
            </p>
          </div>
        )}

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
              >
                <ProjectCard project={project} onClick={handleProjectClick} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-gray-900 rounded-lg border border-gray-800">
            <svg className="mx-auto h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-400">No projects in this category yet</h3>
            <p className="mt-2 text-sm text-gray-500">Try selecting a different category from the menu above.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};

export default PortfolioProjects;
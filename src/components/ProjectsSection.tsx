// src/components/ProjectsSection.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiClock,
  FiStar,
  FiBookOpen,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import type { Project } from "../types/Project";

// Extended type for local use that includes optional popularity and lastUpdated
interface ExtendedProject extends Project {
  popularity?: number;
  lastUpdated?: string;
  image?: string;
}

type ProjectsSectionProps = {
  openModal: (project: Project) => void;
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ openModal }) => {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("default");

  // Project data with extended fields
  const projectsData: ExtendedProject[] = [
    {
      id: 1,
      name: "To-Do List App",
      complexity: "Beginner",
      time: "1-2 days",
      features: ["CRUD operations", "Task categorization"],
      skills: ["Models", "Forms", "ORM", "Views", "Templates"],
      learning: "Mastery of basic application structure and data persistence.",
      tags: ["CRUD", "Productivity"],
      imageUrl: "/images/todo-app.jpg",
    },
    {
      id: 2,
      name: "Login/Registration System",
      complexity: "Beginner",
      time: "1 week",
      features: ["User authentication", "Secure login", "Password management"],
      skills: ["Django Auth System", "Forms", "Security fundamentals"],
      learning: "Understanding of secure user management and session handling.",
      tags: ["Authentication", "Security"],
      githubUrl: "https://github.com/example/auth-system",
    },
    {
      id: 3,
      name: "Blog Application",
      complexity: "Intermediate",
      time: "3-4 weeks",
      features: ["User login", "CRUD for posts", "Comments", "Tags"],
      skills: ["User authentication", "ORM", "many-to-many relationships"],
      learning:
        "Building content management systems and handling user interaction.",
      imageUrl: "/images/blog-app.jpg",
      liveDemoUrl: "https://example-blog.com",
    },
    {
      id: 4,
      name: "Real-Time Chat App",
      complexity: "Advanced",
      time: "4-6 weeks",
      features: ["Instant messaging", "Room management", "Online status"],
      skills: ["WebSockets", "Async", "Channels"],
      learning: "Real-time systems with concurrent users.",
      tags: ["Real-time", "WebSockets"],
      popularity: 4,
      lastUpdated: "2023-12-05",
      image: "/images/chat-app.jpg",
    },
    {
      id: 5,
      name: "E-commerce Platform",
      complexity: "Advanced",
      time: "6-8 weeks",
      features: ["Product catalog", "Shopping cart", "Payment processing"],
      skills: ["Complex ORM", "Payment APIs", "Security"],
      learning:
        "Full-stack application development with financial transactions.",
      imageUrl: "/images/ecommerce.jpg",
      githubUrl: "https://github.com/example/ecommerce",
      prerequisites: ["Intermediate Django", "JavaScript basics"],
    },
    {
      id: 6,
      name: "Weather Dashboard",
      complexity: "Intermediate",
      time: "2-3 weeks",
      features: ["Location-based", "Real-time data", "Forecasts"],
      skills: ["API Integration", "Data visualization"],
      learning: "Working with external APIs and data presentation.",
      tags: ["API", "Visualization"],
      popularity: 3,
      lastUpdated: "2023-11-28",
      image: "/images/weather-app.jpg",
    },
  ];

  const filters = ["All", "Beginner", "Intermediate", "Advanced"];
  const sortOptions = [
    { value: "default", label: "Recommended" },
    { value: "popularity", label: "Most Popular" },
    { value: "recent", label: "Recently Updated" },
    { value: "time", label: "Time Required" },
  ];

  // Filter and sort logic
  const filteredProjects = projectsData
    .filter((project) => filter === "All" || project.complexity === filter)
    .filter(
      (project) =>
        searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (Array.isArray(project.tags) &&
          project.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ))
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "popularity":
          return (b.popularity || 0) - (a.popularity || 0);
        case "recent":
          return (
            new Date(b.lastUpdated || 0).getTime() -
            new Date(a.lastUpdated || 0).getTime()
          );
        case "time":
          const getTimeValue = (timeStr: string) => {
            if (timeStr.includes("day")) return parseInt(timeStr);
            if (timeStr.includes("week")) return parseInt(timeStr) * 7;
            return parseInt(timeStr) * 30; // months
          };
          return getTimeValue(a.time) - getTimeValue(b.time);
        default:
          return 0;
      }
    });

  // Helper to get the image URL (falling back to imageUrl or a placeholder)
  const getImageUrl = (project: ExtendedProject) => {
    return (
      project.image || project.imageUrl || "/images/project-placeholder.jpg"
    );
  };

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Project Explorer
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Filter through our curated collection of Django projects
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiBookOpen className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
          </div>

          {/* Filter & Sort */}
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <select
              className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="flex gap-2">
              {filters.map((level) => (
                <button
                  key={level}
                  onClick={() => setFilter(level)}
                  className={`px-3 py-2 text-sm rounded-full font-medium transition-all ${
                    filter === level
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <div
                    className="h-full flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
                    onClick={() => openModal(project)}
                  >
                    {/* Project Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={getImageUrl(project)}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {project.name}
                        </h3>
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                            project.complexity === "Beginner"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : project.complexity === "Intermediate"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          }`}
                        >
                          {project.complexity}
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                        <div className="flex items-center gap-1">
                          <FiClock className="h-4 w-4" />
                          <span>{project.time}</span>
                        </div>
                        {project.popularity && (
                          <div className="flex items-center gap-1">
                            <FiStar className="h-4 w-4" />
                            <span>{project.popularity}/5</span>
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Features:
                        </h4>
                        <ul className="space-y-1">
                          {project.features
                            .slice(0, 3)
                            .map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span className="text-sm text-slate-600 dark:text-slate-300">
                                  {feature}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      {project.tags && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-600 flex justify-between items-center">
                      <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                        View Details
                      </button>
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiGithub className="h-5 w-5" />
                          </a>
                        )}
                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="mx-auto w-24 h-24 text-slate-300 dark:text-slate-600 mb-4">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">
              No projects found
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiClock,
  FiStar,
  FiBookOpen,
  FiGithub,
  FiExternalLink,
  FiSearch,
  FiFilter,
  FiAlertCircle,
} from "react-icons/fi";
import type { Project } from "../types/Project";

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

  const projectsData: ExtendedProject[] = [
    {
      id: 1,
      name: "To-Do List Application",
      complexity: "Beginner",
      time: "1-2 days",
      features: [
        "CRUD operations",
        "Task categorization",
        "User-friendly interface",
      ],
      skills: ["Models", "Forms", "ORM", "Views", "Templates"],
      learning:
        "Demonstrates basic application structure and data persistence.",
      tags: ["CRUD", "Productivity"],
      imageUrl: "/images/todo-app.jpg",
      lastUpdated: "2023-10-15",
    },
    {
      id: 2,
      name: "Authentication System",
      complexity: "Beginner",
      time: "1 week",
      features: ["User registration", "Secure login", "Password reset"],
      skills: ["Django Auth", "Form validation", "Security"],
      learning: "Implementation of secure user management systems.",
      tags: ["Authentication", "Security"],
      imageUrl: "/images/auth-system.jpg",
      githubUrl: "https://github.com/example/auth-system",
      popularity: 3,
      lastUpdated: "2023-11-20",
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

  const filteredProjects = projectsData
    .filter((project) => filter === "All" || project.complexity === filter)
    .filter(
      (project) =>
        searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.tags &&
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
            return parseInt(timeStr) * 30;
          };
          return getTimeValue(a.time) - getTimeValue(b.time);
        default:
          return 0;
      }
    });

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
              Django Project Explorer
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Browse through various Django projects categorized by complexity and
            features
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects by name or tags..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <div className="relative">
              <FiFilter className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <select
                className="pl-10 pr-8 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((level) => (
                <button
                  key={level}
                  onClick={() => setFilter(level)}
                  className={`px-3 py-2 text-sm rounded-full font-medium transition-all ${
                    filter === level
                      ? "bg-blue-600 text-white shadow-md"
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
                    className="h-full flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 border border-slate-200 dark:border-slate-700 group"
                    onClick={() => openModal(project)}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={getImageUrl(project)}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

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

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Key Features:
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

                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700/50 border-t border-slate-200 dark:border-slate-600 flex justify-between items-center">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        View Details
                      </span>
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
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
                            className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
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
              <FiAlertCircle className="w-full h-full" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">
              No matching projects found
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Try adjusting your search criteria or filter settings
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

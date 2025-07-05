import React, { useEffect } from "react";
import {
  X,
  Github,
  ExternalLink,
  Clock,
  Code,
  BookOpen,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../types/Project";

interface ModalProps {
  project: Project;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, closeModal }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop with blur effect */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <motion.div
          className="relative bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-700"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {project.name}
              <span
                className={`ml-3 px-3 py-1 text-xs font-semibold rounded-full ${
                  project.complexity === "Beginner"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : project.complexity === "Intermediate"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}
              >
                {project.complexity}
              </span>
            </h3>
            <motion.button
              onClick={closeModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
              aria-label="Close Modal"
            >
              <X size={24} />
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Project image if available */}
            {project.imageUrl && (
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github size={18} />
                  View Code
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>

            {/* Details sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                    <Code size={20} />
                  </div>
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                    Key Features
                  </h4>
                </div>
                {Array.isArray(project.features) ? (
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-slate-700 dark:text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-700 dark:text-slate-300">
                    {project.features}
                  </p>
                )}
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                    <Shield size={20} />
                  </div>
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                    Core Skills
                  </h4>
                </div>
                {Array.isArray(project.skills) ? (
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-white dark:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-700 dark:text-slate-300">
                    {project.skills}
                  </p>
                )}
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
                    <BookOpen size={20} />
                  </div>
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                    Learning Outcomes
                  </h4>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  {project.learning}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg">
                    <Clock size={20} />
                  </div>
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                    Time Commitment
                  </h4>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  {project.time}
                </p>
              </div>
            </div>

            {/* Tags if available */}
            {project.tags && project.tags.length > 0 && (
              <div className="mt-6">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;

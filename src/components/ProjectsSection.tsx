// src/components/ProjectsSection.tsx
import React from "react";
import type { Project } from "../types/Project";

type ProjectsSectionProps = {
  openModal: (project: Project) => void;
};

const projectsData: Project[] = [
  {
    name: "To-Do List App",
    complexity: "Beginner",
    time: "1-2 days",
    features: "CRUD operations, task categorization",
    skills: "Models, Forms, ORM, Views, Templates",
    learning: "Mastery of basic application structure and data persistence.",
  },
  {
    name: "Login/Registration System",
    complexity: "Beginner",
    time: "1 week",
    features: "User authentication, secure login, password management",
    skills: "Django Auth System, Forms, Security fundamentals",
    learning: "Understanding of secure user management and session handling.",
  },
  {
    name: "Blog Application",
    complexity: "Intermediate",
    time: "3-4 weeks",
    features: "User login, CRUD for posts, comments, tags",
    skills: "User authentication, ORM, many-to-many relationships",
    learning: "Content management and user-generated content.",
  },
  {
    name: "Real-Time Chat App",
    complexity: "Advanced",
    time: "4-6 weeks",
    features: "Instant messaging, room management",
    skills: "Django Channels, WebSockets, async programming",
    learning: "Real-time systems with concurrent users.",
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ openModal }) => {
  const [filter, setFilter] = React.useState<string>("All");

  const filters = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.complexity === filter);

  return (
    <section id="projects" className="mb-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
          Project Pathfinder
        </h3>
        <p className="mt-2 max-w-2xl mx-auto text-md text-slate-600 dark:text-slate-300">
          Select projects by level to sharpen your skills. Click a card for full
          details.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {filters.map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level)}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              filter === level
                ? "bg-slate-800 text-white"
                : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl"
            onClick={() => openModal(project)}
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.name}
                </h4>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
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
              <p className="text-slate-500 dark:text-slate-300 mt-2">
                Est. time: {project.time}
              </p>
              <p className="mt-4 text-slate-600 dark:text-slate-300 h-12">
                {project.features}
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700 p-4 border-t border-slate-200 dark:border-slate-600 text-center">
              <button className="font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

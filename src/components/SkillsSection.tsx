import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiShield,
  FiLayers,
  FiCpu,
  FiCloud,
} from "react-icons/fi";

const skillsData = [
  {
    title: "Core Django Concepts",
    content:
      "Models & ORM, Views & URL Routing, Templates, Forms, and the Admin Interface. This is the foundation of any Django application.",
    icon: <FiCode className="w-6 h-6" />,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "Database Management",
    content:
      "Expertise in relational databases (PostgreSQL, MySQL), efficient schema design, and writing optimized ORM queries.",
    icon: <FiDatabase className="w-6 h-6" />,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    title: "API Development (DRF)",
    content:
      "Building RESTful APIs with Django REST Framework, including Serializers, ViewSets, authentication, and permissions.",
    icon: <FiLayers className="w-6 h-6" />,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    title: "Authentication & Security",
    content:
      "Implementing secure user management and protecting against common threats like SQL injection, CSRF, and XSS.",
    icon: <FiShield className="w-6 h-6" />,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    title: "Frontend Integration",
    content:
      "Seamlessly integrating with HTML, CSS, and JavaScript to build complete, functional, and user-friendly web applications.",
    icon: <FiCpu className="w-6 h-6" />,
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-100 dark:bg-rose-900/30",
  },
  {
    title: "Deployment & DevOps",
    content:
      "Deploying applications to cloud platforms (AWS, Heroku), using containerization (Docker), and setting up CI/CD pipelines.",
    icon: <FiCloud className="w-6 h-6" />,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
  },
];

const SkillsSection = () => {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Essential Skills
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A truly effective portfolio demonstrates a blend of core concepts
            and advanced, real-world expertise. Explore the key skills
            recruiters look for.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 transition-all cursor-pointer ${
                  expandedSkill === index ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() =>
                  setExpandedSkill(expandedSkill === index ? null : index)
                }
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center ${skill.bgColor} ${skill.color} rounded-lg mb-4`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <AnimatePresence>
                  <motion.p
                    initial={{ height: "auto" }}
                    animate={{
                      height: expandedSkill === index ? "auto" : "4.5rem",
                    }}
                    className="text-slate-600 dark:text-slate-300 overflow-hidden"
                  >
                    {skill.content}
                  </motion.p>
                </AnimatePresence>
                <div className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {expandedSkill === index ? "Show less" : "Read more"}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

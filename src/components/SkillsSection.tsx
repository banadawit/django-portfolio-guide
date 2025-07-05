import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiShield,
  FiLayers,
  FiCpu,
  FiCloud,
  FiChevronDown,
  FiExternalLink,
  FiZap,
  FiClock,
  FiServer,
  FiBarChart2,
  FiLock,
  FiCpu as FiPerformance,
  FiGlobe,
} from "react-icons/fi";

const skillsData = [
  {
    title: "Core Django",
    icon: <FiCode className="w-5 h-5" />,
    summary: "Models, Views, Templates, Forms, Admin",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    expandedContent: (
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <FiZap className="flex-shrink-0 mt-0.5 text-blue-500" />
          <span>
            Built <strong>12+ production apps</strong> using Django's MVT
            architecture
          </span>
        </div>
        <div className="flex items-start gap-2">
          <FiClock className="flex-shrink-0 mt-0.5 text-blue-500" />
          <span>
            Reduced page load times by <strong>40%</strong> through queryset
            optimization
          </span>
        </div>
        <a
          href="#projects"
          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2"
          onClick={(e) => e.stopPropagation()}
        >
          See project examples <FiExternalLink className="ml-1 w-3 h-3" />
        </a>
      </div>
    ),
  },
  {
    title: "Database Design",
    icon: <FiDatabase className="w-5 h-5" />,
    summary: "PostgreSQL, MySQL, ORM optimization",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    expandedContent: (
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <FiServer className="flex-shrink-0 mt-0.5 text-emerald-500" />
          <span>
            Designed schemas for <strong>high-traffic</strong> apps (10k+ daily
            users)
          </span>
        </div>
        <div className="flex items-start gap-2">
          <FiPerformance className="flex-shrink-0 mt-0.5 text-emerald-500" />
          <span>
            Improved query performance by <strong>300%</strong> using
            select_related/prefetch_related
          </span>
        </div>
        <div className="flex items-start gap-2">
          <FiBarChart2 className="flex-shrink-0 mt-0.5 text-emerald-500" />
          <span>
            Implemented <strong>analytics dashboards</strong> with complex
            aggregations
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "API Development",
    icon: <FiLayers className="w-5 h-5" />,
    summary: "DRF, RESTful design, Authentication",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    expandedContent: (
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <FiZap className="flex-shrink-0 mt-0.5 text-purple-500" />
          <span>
            Built <strong>8+ production APIs</strong> with Django REST Framework
          </span>
        </div>
        <div className="flex items-start gap-2">
          <FiLock className="flex-shrink-0 mt-0.5 text-purple-500" />
          <span>
            Implemented <strong>JWT authentication</strong> with refresh tokens
          </span>
        </div>
        <div className="flex items-start gap-2">
          <FiGlobe className="flex-shrink-0 mt-0.5 text-purple-500" />
          <span>
            Integrated <strong>3rd-party APIs</strong> (Stripe, SendGrid, Google
            Maps)
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Security",
    icon: <FiShield className="w-5 h-5" />,
    summary: "Auth, CSRF, XSS, SQL injection",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    expandedContent: (
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <FiLock className="flex-shrink-0 mt-0.5 text-amber-500" />
          <span>
            Implemented <strong>role-based access control</strong> for
            enterprise apps
          </span>
        </div>
        <div className="flex items-start gap-2">
          <FiShield className="flex-shrink-0 mt-0.5 text-amber-500" />
          <span>
            Secured apps against <strong>OWASP Top 10</strong> vulnerabilities
          </span>
        </div>
        <div className="flex items-start gap-2">
          <FiDatabase className="flex-shrink-0 mt-0.5 text-amber-500" />
          <span>
            Prevented <strong>SQL injection</strong> with parameterized queries
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Frontend Integration",
    icon: <FiCpu className="w-5 h-5" />,
    summary: "Templates, JavaScript, CSS",
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-100 dark:bg-rose-900/30",
    expandedContent: (
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <FiCode className="flex-shrink-0 mt-0.5 text-rose-500" />
          <span>
            Built <strong>15+ responsive interfaces</strong> with Django
            templates
          </span>
        </div>
        <div className="flex items-start gap-2">
          <FiCpu className="flex-shrink-0 mt-0.5 text-rose-500" />
          <span>
            Integrated <strong>React/Vue</strong> with Django for SPA
            experiences
          </span>
        </div>
        <div className="flex items-start gap-2">
          <FiZap className="flex-shrink-0 mt-0.5 text-rose-500" />
          <span>
            Improved UX with <strong>HTMX</strong> for dynamic content
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Deployment",
    icon: <FiCloud className="w-5 h-5" />,
    summary: "AWS, Docker, CI/CD",
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    expandedContent: (
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <FiServer className="flex-shrink-0 mt-0.5 text-indigo-500" />
          <span>
            Deployed <strong>6+ apps</strong> to AWS EC2 with Nginx/Gunicorn
          </span>
        </div>
        <div className="flex items-start gap-2">
          <FiCloud className="flex-shrink-0 mt-0.5 text-indigo-500" />
          <span>
            Containerized apps with <strong>Docker</strong> for reproducibility
          </span>
        </div>
        <div className="flex items-start gap-2">
          <FiZap className="flex-shrink-0 mt-0.5 text-indigo-500" />
          <span>
            Set up <strong>CI/CD pipelines</strong> with GitHub Actions
          </span>
        </div>
      </div>
    ),
  },
];

const SkillsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Essential Django Skills
            </span>
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Core competencies for building production-ready Django applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -3 }}
                className={`cursor-pointer p-5 rounded-xl border transition-all ${
                  expandedIndex === index
                    ? "border-blue-500 shadow-lg bg-slate-50 dark:bg-slate-800"
                    : "border-slate-200 dark:border-slate-700 hover:shadow-md bg-white dark:bg-slate-800/80"
                }`}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-2 rounded-lg ${skill.bgColor} ${skill.color}`}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {skill.summary}
                    </p>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700"
                    >
                      {skill.expandedContent}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {expandedIndex === index
                      ? "Click to collapse"
                      : "Click for details"}
                  </span>
                  <FiChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
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

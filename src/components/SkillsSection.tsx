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
} from "react-icons/fi";

const skillsData = [
  {
    title: "Core Django Concepts",
    content:
      "Models & ORM, Views & URL Routing, Templates, Forms, and the Admin Interface. This is the foundation of any Django application.",
    expandedContent: [
      "Deep understanding of Django's MVT architecture",
      "Custom model managers and querysets",
      "Class-based views vs function-based views",
      "Template inheritance and custom tags/filters",
      "Admin customization with ModelAdmin",
    ],
    resources: [
      { name: "Django Documentation", url: "https://docs.djangoproject.com" },
      { name: "Django for Beginners", url: "https://djangoforbeginners.com" },
    ],
    icon: <FiCode className="w-6 h-6" />,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "Database Management",
    content:
      "Expertise in relational databases (PostgreSQL, MySQL), efficient schema design, and writing optimized ORM queries.",
    expandedContent: [
      "Indexing strategies for performance",
      "Transaction management",
      "Database migrations best practices",
      "Using select_related and prefetch_related",
      "Working with raw SQL when needed",
    ],
    resources: [
      { name: "PostgreSQL Docs", url: "https://www.postgresql.org/docs" },
      {
        name: "Django ORM Tips",
        url: "https://django-orm-optimization.readthedocs.io",
      },
    ],
    icon: <FiDatabase className="w-6 h-6" />,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    title: "API Development (DRF)",
    content:
      "Building RESTful APIs with Django REST Framework, including Serializers, ViewSets, authentication, and permissions.",
    expandedContent: [
      "Custom serializer fields and methods",
      "Nested serializers",
      "Pagination strategies",
      "Throttling and rate limiting",
      "Documentation with Swagger/OpenAPI",
    ],
    resources: [
      {
        name: "DRF Documentation",
        url: "https://www.django-rest-framework.org",
      },
      {
        name: "DRF Tutorial",
        url: "https://testdriven.io/blog/drf-serializers",
      },
    ],
    icon: <FiLayers className="w-6 h-6" />,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    title: "Authentication & Security",
    content:
      "Implementing secure user management and protecting against common threats like SQL injection, CSRF, and XSS.",
    expandedContent: [
      "JWT authentication implementation",
      "OAuth2 and social auth",
      "Password hashing best practices",
      "Security headers (CSP, HSTS)",
      "Regular dependency updates",
    ],
    resources: [
      { name: "OWASP Cheat Sheet", url: "https://cheatsheetseries.owasp.org" },
      {
        name: "Django Security",
        url: "https://docs.djangoproject.com/en/dev/topics/security",
      },
    ],
    icon: <FiShield className="w-6 h-6" />,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    title: "Frontend Integration",
    content:
      "Seamlessly integrating with HTML, CSS, and JavaScript to build complete, functional, and user-friendly web applications.",
    expandedContent: [
      "Django template language",
      "HTMX for modern interactivity",
      "Webpack/Django integration",
      "Django with React/Vue",
      "Accessibility considerations",
    ],
    resources: [
      {
        name: "Django Templates",
        url: "https://docs.djangoproject.com/en/dev/ref/templates",
      },
      {
        name: "HTMX with Django",
        url: "https://htmx.org/essays/django-htmx-patterns",
      },
    ],
    icon: <FiCpu className="w-6 h-6" />,
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-100 dark:bg-rose-900/30",
  },
  {
    title: "Deployment & DevOps",
    content:
      "Deploying applications to cloud platforms (AWS, Heroku), using containerization (Docker), and setting up CI/CD pipelines.",
    expandedContent: [
      "WSGI/ASGI server configuration",
      "Environment management",
      "Dockerizing Django apps",
      "CI/CD with GitHub Actions",
      "Monitoring and logging",
    ],
    resources: [
      {
        name: "Django Deployment",
        url: "https://docs.djangoproject.com/en/dev/howto/deployment",
      },
      { name: "Awesome Django", url: "https://awesome-django.com" },
    ],
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
              Essential Django Skills
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive portfolio demonstrates both fundamental knowledge
            and advanced, production-ready expertise. Click each skill to
            explore key concepts and resources.
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
                className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 transition-all cursor-pointer h-full flex flex-col ${
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

                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {skill.content}
                </p>

                <AnimatePresence>
                  {expandedSkill === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 mt-4">
                        <div>
                          <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">
                            Key Concepts:
                          </h4>
                          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                            {skill.expandedContent.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="inline-block mr-2 mt-1 text-blue-500">
                                  •
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">
                            Learning Resources:
                          </h4>
                          <ul className="space-y-2">
                            {skill.resources.map((resource, i) => (
                              <li key={i}>
                                <a
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {resource.name}
                                  <FiExternalLink className="ml-1 w-3 h-3" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {expandedSkill === index ? "Show less" : "Learn more"}
                  </span>
                  <FiChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedSkill === index ? "rotate-180" : ""
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

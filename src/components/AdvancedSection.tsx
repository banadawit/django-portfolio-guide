import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Code,
  Database,
  Shield,
  Zap,
} from "lucide-react";

const advancedTechniques = [
  {
    title: "Complex ORM Queries (F/Q Objects)",
    icon: <Database className="w-5 h-5 text-blue-500" />,
    content:
      "Master Django's F() and Q() objects to create advanced queries that reference database fields and combine conditions with logical operators.",
    relevance:
      "Essential for building dynamic filtering systems, analytics dashboards, and performance-critical applications.",
    example: "Building a real estate platform with complex property filters",
    difficulty: "Intermediate",
  },
  {
    title: "Customizing the Django Admin",
    icon: <Code className="w-5 h-5 text-purple-500" />,
    content:
      "Extend the Django Admin with custom actions, list filters, inlines, and templates to create powerful internal tools.",
    relevance:
      "Ideal for content management systems, internal dashboards, and data administration.",
    example: "Creating a publishing workflow for a newsroom CMS",
    difficulty: "Beginner",
  },
  {
    title: "Integrating Third-Party Libraries",
    icon: <Zap className="w-5 h-5 text-yellow-500" />,
    content:
      "Leverage Django REST Framework for APIs, Celery for background tasks, and Channels for WebSocket functionality.",
    relevance:
      "Critical for modern applications requiring real-time updates, async processing, or external integrations.",
    example: "Building a live chat feature with notifications",
    difficulty: "Advanced",
  },
  {
    title: "Implementing Robust Testing",
    icon: <Shield className="w-5 h-5 text-green-500" />,
    content:
      "Write comprehensive tests using Django's TestCase, Factory Boy for test data, and pytest for more flexible testing.",
    relevance:
      "Non-negotiable for production applications, especially in finance or e-commerce.",
    example: "Testing payment processing flows",
    difficulty: "Intermediate",
  },
  {
    title: "Data Visualization",
    icon: (
      <svg
        className="w-5 h-5 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    content:
      "Integrate Chart.js, Plotly, or Django-chartit to create dynamic visualizations from your Django models.",
    relevance:
      "Powerful for analytics dashboards, reporting tools, and data-heavy applications.",
    example: "Creating sales performance dashboards",
    difficulty: "Intermediate",
  },
];

const AdvancedSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="advanced"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Advanced Django Techniques
            </span>
          </h3>
          <p className="mt-2 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Elevate your portfolio with production-grade Django skills that
            impress employers and solve complex problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {advancedTechniques.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left p-6 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white text-lg">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          item.difficulty === "Beginner"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : item.difficulty === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        }`}
                      >
                        {item.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700">
                      <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                          {item.content}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h5 className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2">
                              <ArrowRight className="w-4 h-4 text-blue-500" />
                              Project Context
                            </h5>
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                              {item.relevance}
                            </p>
                          </div>

                          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                            <h5 className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2">
                              <ArrowRight className="w-4 h-4 text-purple-500" />
                              Example Implementation
                            </h5>
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                              {item.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Pro Tip: Implement 2-3 of these in your portfolio projects to
            demonstrate production readiness
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedSection;

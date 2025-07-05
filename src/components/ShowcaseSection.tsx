import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiTrendingUp,
  FiGlobe,
  FiBookOpen,
  FiBarChart2,
  FiUsers,
} from "react-icons/fi";

const showcaseTips = [
  {
    icon: <FiGithub className="w-6 h-6" />,
    title: "Leverage GitHub",
    description:
      "Create clean repositories with detailed READMEs. Pin your best projects to your profile. Well-commented, professional code demonstrates your attention to detail.",
    color: "text-gray-800 dark:text-gray-100",
    bgColor: "bg-gray-100 dark:bg-gray-800",
    borderColor: "border-gray-200 dark:border-gray-700",
    examples: [
      "README with screenshots and setup instructions",
      "Meaningful commit messages",
      "GitHub Actions for CI/CD",
    ],
    cta: "View GitHub Best Practices →",
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: "Highlight Impact",
    description:
      "Don't just list features—explain the problem you solved. Quantify your impact. Show you think about business value, not just code.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/30",
    borderColor: "border-blue-200 dark:border-blue-800",
    examples: [
      "Reduced API response time by 40%",
      "Increased user engagement by 25%",
      "Saved 10 hours/week with automation",
    ],
    cta: "Learn Metrics That Matter →",
  },
  {
    icon: <FiGlobe className="w-6 h-6" />,
    title: "Provide Live Demos",
    description:
      "Deploy your projects and link to them. A live demo is the most powerful proof of your skills and your ability to deliver a finished product.",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/30",
    borderColor: "border-purple-200 dark:border-purple-800",
    examples: [
      "Heroku/Vercel for quick deployment",
      "Docker containers for reproducibility",
      "Staging vs production environments",
    ],
    cta: "Explore Deployment Options →",
  },
];

const ShowcaseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="showcase"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50"
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
              Professional Showcase Tactics
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Building great projects is only half the battle - presenting them
            effectively is what gets you hired.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className={`h-full p-8 rounded-xl shadow-sm border-2 ${tip.borderColor} ${tip.bgColor} transition-all overflow-hidden relative z-10`}
              >
                <div className="flex flex-col h-full">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-lg ${
                      tip.color
                    } mb-6 ${tip.bgColor.replace("bg-", "bg-opacity-20 ")}`}
                  >
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                    {tip.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {tip.examples.map((example, i) => (
                      <div key={i} className="flex items-start">
                        <span
                          className={`flex-shrink-0 mt-1 mr-2 ${tip.color}`}
                        >
                          •
                        </span>
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          {example}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#"
                    className={`text-sm font-medium ${tip.color} hover:underline inline-flex items-center`}
                    onClick={(e) => e.preventDefault()}
                  >
                    {tip.cta}
                  </a>
                </div>
              </motion.div>

              {/* Animated background effect */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 rounded-xl ${tip.bgColor.replace(
                      "bg-",
                      "bg-"
                    )} z-0`}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-0.5 shadow-lg"
        >
          <div className="bg-white dark:bg-slate-900 rounded-[11px] p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 grid place-items-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                <FiBookOpen className="w-6 h-6" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Storytelling Framework
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Use the <strong>CAR</strong> method for each project: <br />
                  <span className="text-blue-600 dark:text-blue-400">
                    Challenge
                  </span>{" "}
                  →
                  <span className="text-purple-600 dark:text-purple-400">
                    {" "}
                    Action
                  </span>{" "}
                  →
                  <span className="text-green-600 dark:text-green-400">
                    {" "}
                    Result
                  </span>
                </p>
              </div>
              <div className="flex md:ml-auto gap-3 mt-4 md:mt-0">
                <div className="text-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <FiUsers className="mx-auto w-5 h-5 text-blue-600 dark:text-blue-400 mb-1" />
                  <span className="text-xs text-slate-600 dark:text-slate-300">
                    User Impact
                  </span>
                </div>
                <div className="text-center px-4 py-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <FiBarChart2 className="mx-auto w-5 h-5 text-purple-600 dark:text-purple-400 mb-1" />
                  <span className="text-xs text-slate-600 dark:text-slate-300">
                    Metrics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

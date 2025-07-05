import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiZap,
  FiFilter,
  FiTrendingUp,
} from "react-icons/fi";

const AboutProject = () => {
  const features = [
    {
      icon: <FiZap className="w-5 h-5 text-blue-500" />,
      title: "Interactive Learning",
      description: "Explore projects with live filters and visualizations",
    },
    {
      icon: <FiFilter className="w-5 h-5 text-purple-500" />,
      title: "Curated Pathways",
      description: "Projects organized by complexity and skills required",
    },
    {
      icon: <FiTrendingUp className="w-5 h-5 text-green-500" />,
      title: "Progress Tracking",
      description: "Visual timeline to plan your portfolio growth",
    },
  ];

  return (
    <section
      id="about-project"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30"
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
              About This Guide
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A strategic toolkit for building a job-ready Django portfolio with
            real-world projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-600 dark:text-slate-300">
              This interactive guide helps Django developers of all levels build
              impactful portfolios through:
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1 p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              How To Use This Guide
            </h3>
            <ol className="space-y-4 text-slate-600 dark:text-slate-300">
              <li className="flex gap-3">
                <span className="flex-shrink-0 font-bold text-blue-600 dark:text-blue-400">
                  1.
                </span>
                <span>Filter projects by your current skill level</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 font-bold text-blue-600 dark:text-blue-400">
                  2.
                </span>
                <span>Review required skills and estimated timelines</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 font-bold text-blue-600 dark:text-blue-400">
                  3.
                </span>
                <span>Track your progress through the visual roadmap</span>
              </li>
            </ol>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/banadawit/django-portfolio-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
          >
            <FiGithub className="w-5 h-5" />
            View on GitHub
            <FiExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProject;

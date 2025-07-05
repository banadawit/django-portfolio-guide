import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiTrendingUp, FiGlobe } from "react-icons/fi";

const showcaseTips = [
  {
    icon: <FiGithub className="w-8 h-8" />,
    title: "Leverage GitHub",
    description:
      "Create clean repositories with detailed READMEs. Pin your best projects to your profile. Well-commented, professional code demonstrates your attention to detail.",
    color: "text-gray-800 dark:text-gray-100",
    bgColor: "bg-gray-100 dark:bg-gray-800",
    borderColor: "border-gray-200 dark:border-gray-700",
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: "Highlight Impact",
    description:
      "Don't just list features—explain the problem you solved. Quantify your impact. Show you think about business value, not just code.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/30",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: "Provide Live Demos",
    description:
      "Deploy your projects and link to them. A live demo is the most powerful proof of your skills and your ability to deliver a finished product.",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/30",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
];

const ShowcaseSection = () => {
  return (
    <section
      id="showcase"
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
              Showcase Your Work
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Building great projects is half the battle; presenting them
            effectively is what gets you noticed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`h-full p-6 rounded-xl shadow-md border-2 ${tip.borderColor} ${tip.bgColor} transition-all`}
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full ${tip.color} mb-6 mx-auto`}
                >
                  {tip.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 text-center">
                  {tip.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-center">
                  {tip.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Pro Tip: Tell a Story
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Frame each project as a narrative - the challenge you faced, the
              solution you built, and the results you achieved. This approach
              makes your work memorable and demonstrates your problem-solving
              process.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

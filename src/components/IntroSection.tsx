import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiDatabase,
  FiShield,
  FiPocket,
} from "react-icons/fi";
import { DjangoLogo, PythonLogo, ReactLogo } from "./TechLogos"; // You'll need to create these components

const IntroSection = () => {
  const features = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Showcase Projects",
      description: "Demonstrate your ability to build real-world applications",
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Highlight Skills",
      description: "Prove your expertise with Django's full stack capabilities",
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Solve Problems",
      description: "Show how you tackle complex development challenges",
    },
    {
      icon: <FiPocket className="w-6 h-6" />,
      title: "Stand Out",
      description: "Differentiate yourself in a competitive job market",
    },
  ];

  return (
    <section
      id="intro"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-10 right-1/3 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl animate-float-delay" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Build an{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Impactful
            </span>{" "}
            Django Portfolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10"
          >
            The demand for skilled Django developers is rising, but so is the
            competition. A strong portfolio is no longer optional — it's your
            primary tool to showcase your expertise, solve real-world problems,
            and secure your next role.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Explore Projects <FiArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#skills"
              className="flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:border-blue-500 dark:hover:border-purple-400 transition-all"
            >
              View Skills
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Tech stack animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center items-center gap-8 mb-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <PythonLogo className="w-16 h-16 md:w-20 md:h-20" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            <DjangoLogo className="w-16 h-16 md:w-20 md:h-20" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <ReactLogo className="w-16 h-16 md:w-20 md:h-20" />
          </motion.div>
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;

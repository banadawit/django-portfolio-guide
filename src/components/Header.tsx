import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Sparkles,
  Github,
  Linkedin,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
}

const Header: React.FC<HeaderProps> = ({
  darkMode,
  toggleDarkMode,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    { href: "#about-project", label: "About", icon: <Info className="w-4 h-4" /> },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#advanced", label: "Techniques" },
    { href: "#showcase", label: "Showcase" },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/banadawit",
    //   label: "GitHub",
    //   username: "banadawit",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/bana-dawit-121810312/",
    //   label: "LinkedIn",
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 shadow-sm"
          : "bg-white/90 dark:bg-slate-900/90"
      } backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 transition-all`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Sparkles className="text-yellow-500 w-6 h-6" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Django Portfolio Guide
            </h1>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={link.href}
                  className={`relative px-1 py-2 font-medium transition-colors flex items-center gap-1 ${
                    activeSection === link.href.substring(1)
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-100"
                  }`}
                >
                  {link.icon && <span className="opacity-70">{link.icon}</span>}
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 dark:bg-purple-500"
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.5,
                      }}
                    />
                  )}
                </a>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="flex items-center ml-4 space-x-3 border-l border-slate-200 dark:border-slate-700 pl-4">
              {socialLinks.map((link) => (
                <motion.div
                //   key={link.label}
                  className="relative group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white transition-colors flex items-center"
                    // aria-label={link.label}
                  >
                    {link.icon}
                    <span className="absolute left-full ml-2 px-2 py-1 text-xs whitespace-nowrap bg-slate-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* {link.username || link.label} */}
                    </span>
                  </a>
                </motion.div>
              ))}

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition"
                title={`Switch to ${darkMode ? "light" : "dark"} mode`}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-slate-800 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg transition ${
                      activeSection === link.href.substring(1)
                        ? "bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-white"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                    }`}
                  >
                    {link.icon && <span className="opacity-70">{link.icon}</span>}
                    {link.label}
                  </motion.a>
                ))}

                <div className="flex flex-col space-y-4 px-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      Connect with me:
                    </span>
                    <div className="flex space-x-3">
                      {socialLinks.map((link) => (
                        <motion.a
                        //   key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                        //   aria-label={link.label}
                        >
                          {link.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    onClick={toggleDarkMode}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition rounded-lg"
                  >
                    {darkMode ? (
                      <Sun className="w-5 h-5" />
                    ) : (
                      <Moon className="w-5 h-5" />
                    )}
                    <span className="text-sm">
                      Switch to {darkMode ? "Light" : "Dark"} Mode
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
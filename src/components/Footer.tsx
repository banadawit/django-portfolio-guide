import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      url: "https://github.com/banadawit",
      label: "GitHub"
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/bana-dawit-121810312/",
      label: "LinkedIn"
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      url: "mailto:banadawithunde@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
            An Interactive Guide to Building Your Django Portfolio
          </p>

          <div className="text-xs text-slate-400 dark:text-slate-500">
            <p>© {new Date().getFullYear()} Django Portfolio Guide. All rights reserved.</p>
            <p className="mt-1">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
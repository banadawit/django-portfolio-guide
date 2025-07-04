import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
//   sectionRefs: Record<string, React.RefObject<HTMLElement>>;
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
}

const Header: React.FC<HeaderProps> = ({
  darkMode,
  toggleDarkMode,
  activeSection,
  sectionRefs, // not used here but you can keep it if needed
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Optional: If you want to handle scrollspy inside Header using sectionRefs,
  // you could add scroll handler here, but since App already does it and passes activeSection, no need.

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#advanced", label: "Techniques" },
    { href: "#showcase", label: "Showcase" },
  ];

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🧩</span>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">
              Django Portfolio Guide
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link font-medium border-b-2 transition-all ${
                  activeSection === link.href
                    ? "text-slate-900 dark:text-white border-slate-900 dark:border-white"
                    : "text-slate-500 dark:text-slate-300 border-transparent hover:border-slate-700 dark:hover:border-slate-200"
                }`}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition"
              title="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-800 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-2 space-y-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded transition ${
                  activeSection === link.href
                    ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2 px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition rounded"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import TimelineChart from "./components/TimelineChart";
import AdvancedSection from "./components/AdvancedSection";
import ShowcaseSection from "./components/ShowcaseSection";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "./types/Project";

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || false;
  });

  // Modal state
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Scrollspy state to track active section
  const [activeSection, setActiveSection] = useState("intro");

  // References to sections for scrollspy

const sections: Record<string, React.RefObject<HTMLElement | null>> = {
  intro: useRef<HTMLElement | null>(null),
  skills: useRef<HTMLElement | null>(null),
  projects: useRef<HTMLElement | null>(null),
  timeline: useRef<HTMLElement | null>(null),
  advanced: useRef<HTMLElement | null>(null),
  showcase: useRef<HTMLElement | null>(null),
};
  // Handle dark mode toggle and persist preference
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", (!prev).toString());
      return !prev;
    });
  };

  // Scrollspy handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let current = "intro";
      for (const [key, ref] of Object.entries(sections)) {
        if (ref.current) {
          if (ref.current.offsetTop <= scrollPos) {
            current = key;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Open modal function

const openModal = (project: Project) => {
  setModalProject(project);
  document.body.style.overflow = "hidden";
};

  // Close modal function
  const closeModal = () => {
    setModalProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className={
        darkMode
          ? "dark bg-slate-900 text-slate-100"
          : "bg-slate-50 text-slate-900"
      }
    >
      {/* Header with props for dark mode & scrollspy */}
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        sectionRefs={sections}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <section ref={sections.intro} id="intro">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl font-bold mb-4">
              Build an Impactful Django Portfolio
            </h2>
            <p className="max-w-3xl mx-auto text-lg">
              The demand for skilled Django developers is rising, but so is the
              competition. A strong portfolio is no longer optional—it’s your
              primary tool to showcase your expertise, solve real-world
              problems, and secure your next role. This interactive guide
              translates strategic advice into an explorable tool to help you
              build your best portfolio.
            </p>
          </motion.div>
        </section>

        <section ref={sections.skills} id="skills">
          <SkillsSection />
        </section>

        <section ref={sections.projects} id="projects">
          <ProjectsSection openModal={openModal} />
        </section>

        <section ref={sections.timeline} id="timeline">
          <TimelineChart />
        </section>

        <section ref={sections.advanced} id="advanced">
          <AdvancedSection />
        </section>

        <section ref={sections.showcase} id="showcase">
          <ShowcaseSection />
        </section>
      </main>

      <Footer />

      {/* Modal for project details with animation */}
      <AnimatePresence>
        {modalProject && (
          <Modal project={modalProject} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

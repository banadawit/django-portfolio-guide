import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import TimelineChart from "./components/TimelineChart";
import AdvancedSection from "./components/AdvancedSection";
import ShowcaseSection from "./components/ShowcaseSection";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";
import type { Project } from "./types/Project";
import IntroSection from "./components/IntroSection";
import AboutProject from "./components/AboutProject";

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
  const sectionRefs = {
    intro: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    timeline: useRef<HTMLElement>(null),
    advanced: useRef<HTMLElement>(null),
    showcase: useRef<HTMLElement>(null),
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
      for (const [key, ref] of Object.entries(sectionRefs)) {
        if (ref.current && ref.current.offsetTop <= scrollPos) {
          current = key;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className={darkMode ? "dark bg-slate-900" : "bg-slate-50"}>
      {/* Header with props for dark mode & scrollspy */}
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        sectionRefs={sectionRefs}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <section ref={sectionRefs.intro} id="intro">
          <IntroSection />
        </section>

        <section ref={sectionRefs.about} id="about-project">
          <AboutProject />
        </section>

        <section ref={sectionRefs.skills} id="skills">
          <SkillsSection />
        </section>

        <section ref={sectionRefs.projects} id="projects">
          <ProjectsSection openModal={openModal} />
        </section>

        <section ref={sectionRefs.timeline} id="timeline">
          <TimelineChart />
        </section>

        <section ref={sectionRefs.advanced} id="advanced">
          <AdvancedSection />
        </section>

        <section ref={sectionRefs.showcase} id="showcase">
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

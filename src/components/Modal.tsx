// src/components/Modal.tsx
import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../types/Project";

interface ModalProps {
  project: Project;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, closeModal }) => {
  // Escape key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {project.name}
          </h3>
          <button
            onClick={closeModal}
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900"
            aria-label="Close Modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-slate-700 dark:text-slate-300">
          <div>
            <h4 className="font-semibold">Key Features:</h4>
            <p>{project.features}</p>
          </div>

          <div>
            <h4 className="font-semibold">Core Skills Demonstrated:</h4>
            <p>{project.skills}</p>
          </div>

          <div>
            <h4 className="font-semibold">Primary Learning Outcomes:</h4>
            <p>{project.learning}</p>
          </div>

          <div>
            <h4 className="font-semibold">Estimated Time Commitment:</h4>
            <p>{project.time}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;

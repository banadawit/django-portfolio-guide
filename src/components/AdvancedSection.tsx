import { useState } from "react";
import { ChevronDown } from "lucide-react"; // install lucide-react if not already

const advancedTechniques = [
  {
    title: "Complex ORM Queries (F/Q Objects)",
    content:
      "Use powerful ORM expressions to write advanced filters, combine conditions, and optimize queries.",
    relevance:
      "Great for dynamic filtering, dashboards, and performance tuning.",
  },
  {
    title: "Customizing the Django Admin",
    content:
      "Enhance productivity by extending Django Admin with custom actions, filters, and inline views.",
    relevance: "Ideal for internal tools like a blog CMS or sales dashboard.",
  },
  {
    title: "Integrating Third-Party Libraries",
    content:
      "Use Django REST Framework for APIs, Celery for background tasks, or Channels for real-time features.",
    relevance:
      "Critical for chat apps, notifications, and external service integrations.",
  },
  {
    title: "Implementing Robust Testing",
    content:
      "Use Django TestCase or Pytest to ensure app reliability and avoid regressions.",
    relevance: "Crucial for production-ready apps like e-commerce or APIs.",
  },
  {
    title: "Data Visualization",
    content:
      "Present analytics using Chart.js or Plotly integrated with your Django views.",
    relevance: "Useful for dashboards, reports, or admin analytics tools.",
  },
];

const AdvancedSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="advanced" className="mb-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
          Deep Dive: Advanced Techniques
        </h3>
        <p className="mt-2 max-w-2xl mx-auto text-md text-slate-600 dark:text-slate-300">
          Stand out by incorporating advanced Django capabilities. Click below
          to explore techniques that show you're ready for real-world production
          systems.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {advancedTechniques.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left p-4 font-semibold text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="p-4 border-t border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                <p>{item.content}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  <strong>Project Context:</strong> {item.relevance}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvancedSection;

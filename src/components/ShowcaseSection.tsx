import React from "react";

const showcaseTips = [
  {
    icon: "🚀",
    title: "Leverage GitHub",
    description:
      "Create clean repositories with detailed READMEs. Pin your best projects to your profile. Well-commented, professional code demonstrates your attention to detail.",
  },
  {
    icon: "📊",
    title: "Highlight Impact",
    description:
      "Don’t just list features—explain the problem you solved. Quantify your impact. Show you think about business value, not just code.",
  },
  {
    icon: "🌐",
    title: "Provide Live Demos",
    description:
      "Deploy your projects and link to them. A live demo is the most powerful proof of your skills and your ability to deliver a finished product.",
  },
];

const ShowcaseSection = () => {
  return (
    <section
      id="showcase"
      className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 lg:p-12 mb-24 mx-4 sm:mx-6 lg:mx-8"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
          Showcasing Your Work Effectively
        </h3>
        <p className="mt-2 max-w-2xl mx-auto text-md text-slate-600 dark:text-slate-300">
          Building great projects is half the battle; presenting them
          effectively is what gets you noticed. Follow these best practices to
          ensure your hard work makes the maximum impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {showcaseTips.map((tip, index) => (
          <div
            key={index}
            className="p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{tip.icon}</div>
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
              {tip.title}
            </h4>
            <p className="text-slate-600 dark:text-slate-300">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;

const skillsData = [
  {
    title: "Core Django Concepts",
    content:
      "Models & ORM, Views & URL Routing, Templates, Forms, and the Admin Interface. This is the foundation of any Django application.",
  },
  {
    title: "Database Management",
    content:
      "Expertise in relational databases (PostgreSQL, MySQL), efficient schema design, and writing optimized ORM queries.",
  },
  {
    title: "API Development (DRF)",
    content:
      "Building RESTful APIs with Django REST Framework, including Serializers, ViewSets, authentication, and permissions.",
  },
  {
    title: "Authentication & Security",
    content:
      "Implementing secure user management and protecting against common threats like SQL injection, CSRF, and XSS.",
  },
  {
    title: "Frontend Integration",
    content:
      "Seamlessly integrating with HTML, CSS, and JavaScript to build complete, functional, and user-friendly web applications.",
  },
  {
    title: "Deployment & DevOps",
    content:
      "Deploying applications to cloud platforms (AWS, Heroku), using containerization (Docker), and setting up CI/CD pipelines.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="mb-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
          Essential Skills Explorer
        </h3>
        <p className="mt-2 max-w-2xl mx-auto text-md text-slate-600 dark:text-slate-300">
          A truly effective portfolio demonstrates a blend of core concepts and
          advanced, real-world expertise. Explore the key skills recruiters look
          for by clicking on the categories below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              {skill.title}
            </h4>
            <p className="text-slate-600 dark:text-slate-300">
              {skill.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

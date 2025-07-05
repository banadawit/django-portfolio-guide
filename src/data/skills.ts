// src/data/skills.ts
import type { Skill } from "../types/Skill";

const skills: Skill[] = [
  {
    id: 1,
    title: "Core Django Concepts",
    content:
      "Models & ORM, Views & URL Routing, Templates, Forms, and the Admin Interface. This is the foundation of any Django application.",
    level: "Intermediate",
    icon: "django",
    category: "Backend",
    projects: [1, 2, 4], // Related to Todo, Auth, and Blog projects
    resources: {
      documentation: "https://docs.djangoproject.com/",
      tutorials: [
        "https://docs.djangoproject.com/en/stable/intro/tutorial01/",
        "https://learndjango.com/tutorials/",
      ],
    },
  },
  {
    id: 2,
    title: "Database Management",
    content:
      "Expertise in relational databases (PostgreSQL, MySQL), efficient schema design, and writing optimized ORM queries.",
    level: "Advanced",
    icon: "database",
    category: "Database",
    projects: [5, 7, 9], // Job Portal, Chat, ERP
    resources: {
      documentation: "https://docs.djangoproject.com/en/stable/topics/db/",
      cheatsheets: "https://django-cheatsheet.readthedocs.io/",
    },
  },
  {
    id: 3,
    title: "API Development (DRF)",
    content:
      "Building RESTful APIs with Django REST Framework, including Serializers, ViewSets, authentication, and permissions.",
    level: "Intermediate",
    icon: "api",
    category: "Backend",
    projects: [3, 6], // Weather, E-commerce
    resources: {
      documentation: "https://www.django-rest-framework.org/",
    },
  },
  {
    id: 4,
    title: "Authentication & Security",
    content:
      "Implementing secure user management and protecting against common threats like SQL injection, CSRF, and XSS.",
    level: "Advanced",
    icon: "shield",
    category: "Security",
    projects: [2, 6, 9], // Auth, E-commerce, ERP
    resources: {
      documentation:
        "https://docs.djangoproject.com/en/stable/topics/security/",
    },
  },
  {
    id: 5,
    title: "Frontend Integration",
    content:
      "Seamlessly integrating with HTML, CSS, and JavaScript to build complete, functional, and user-friendly web applications.",
    level: "Intermediate",
    icon: "layout",
    category: "Frontend",
    projects: [1, 3, 7], // Todo, Weather, Chat
    resources: {
      tutorials: [
        "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django",
        "https://www.django-unicorn.com/",
      ],
    },
  },
  {
    id: 6,
    title: "Deployment & DevOps",
    content:
      "Deploying applications to cloud platforms (AWS, Heroku), using containerization (Docker), and setting up CI/CD pipelines.",
    level: "Advanced",
    icon: "cloud",
    category: "DevOps",
    projects: [6, 8, 9], // E-commerce, Social, ERP
    resources: {
      documentation: "https://whitenoise.readthedocs.io/",
      tutorials: [
        "https://testdriven.io/blog/django-docker/",
        "https://www.digitalocean.com/community/tutorials/how-to-deploy-django-to-production",
      ],
    },
  },
];

export default skills;

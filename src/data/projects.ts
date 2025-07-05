// src/data/projects.ts
import type { Project } from "../types/Project";

const projects: Project[] = [
  {
    id: 1,
    name: "To-Do List App",
    complexity: "Beginner",
    time: "1-2 days",
    features: [
      "Create, read, update, delete tasks",
      "Task categorization with tags",
      "Due date reminders",
    ],
    skills: [
      "Django Models",
      "Form Handling",
      "Django ORM",
      "Class-Based Views",
      "Template Rendering",
    ],
    learning: "Mastery of basic application structure and data persistence.",
    imageUrl: "/images/todo-app.jpg",
    githubUrl: "#",
    tags: ["CRUD", "Productivity"],
    prerequisites: ["Basic Python knowledge", "Understanding of HTTP methods"],
  },
  {
    id: 2,
    name: "Login/Registration System",
    complexity: "Beginner",
    time: "1 week",
    features: [
      "User authentication",
      "Secure password storage",
      "Email verification",
      "Password reset functionality",
    ],
    skills: [
      "Django Auth System",
      "Form Validation",
      "Session Management",
      "Security Fundamentals",
    ],
    learning: "Understanding of secure user management and session handling.",
    imageUrl: "/images/auth-system.jpg",
    githubUrl: "#",
    tags: ["Authentication", "Security"],
    prerequisites: ["Basic Django models knowledge"],
  },
  {
    id: 3,
    name: "Weather Prediction App",
    complexity: "Intermediate",
    time: "2 weeks",
    features: [
      "Location-based search",
      "Real-time weather updates",
      "5-day forecasts",
      "Severe weather alerts",
    ],
    skills: [
      "API Integration",
      "Real-time Data Fetching",
      "Data Presentation",
      "Geolocation Services",
    ],
    learning:
      "Experience with external service consumption and displaying dynamic content.",
    imageUrl: "/images/weather-app.jpg",
    githubUrl: "#",
    liveDemoUrl: "#",
    tags: ["API", "Real-time"],
    prerequisites: [
      "Understanding of REST APIs",
      "Basic JavaScript for frontend",
    ],
  },
  // Continue with other projects in the same format...
  {
    id: 9,
    name: "College ERP System",
    complexity: "Advanced",
    time: "6+ weeks",
    features: [
      "Multi-user roles (Admin, Faculty, Student)",
      "Course registration system",
      "Examination management",
      "Student performance tracking",
      "Fee payment integration",
    ],
    skills: [
      "Multi-tenant Architecture",
      "Database Normalization",
      "Role-Based Access Control",
      "Complex Reporting",
      "System Integration",
    ],
    learning:
      "Grasping enterprise system architecture, data integrity, and security policies.",
    imageUrl: "/images/erp-system.jpg",
    githubUrl: "#",
    tags: ["Enterprise", "Multi-user"],
    prerequisites: [
      "Advanced Django knowledge",
      "Understanding of database design",
    ],
  },
];

export default projects;

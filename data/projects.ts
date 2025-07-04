// src/data/projects.ts

import type { Project } from "../types/Project"; // make sure this path is correct

const projects: Project[] = [
  {
    name: "To-Do List App",
    complexity: "Beginner",
    time: "1-2 days",
    features: "CRUD operations, task categorization",
    skills: "Models, Forms, ORM, Views, Templates",
    learning: "Mastery of basic application structure and data persistence.",
  },
  {
    name: "Login/Registration System",
    complexity: "Beginner",
    time: "1 week",
    features: "User authentication, secure login, password management",
    skills: "Django Auth System, Forms, Security fundamentals",
    learning: "Understanding of secure user management and session handling.",
  },
  {
    name: "Weather Prediction App",
    complexity: "Intermediate",
    time: "2 weeks",
    features: "Location-based search, real-time updates, forecasts, alerts",
    skills: "API integration, real-time data fetching, data presentation",
    learning:
      "Experience with external service consumption and displaying dynamic content.",
  },
  {
    name: "Blog Application",
    complexity: "Intermediate",
    time: "3-4 weeks",
    features: "User login, profile management, CRUD for posts, comments, tags",
    skills: "User authentication, ORM, many-to-many relationships",
    learning:
      "Building content management systems and handling user interaction.",
  },
  {
    name: "Online Job Portal",
    complexity: "Intermediate",
    time: "4 weeks",
    features:
      "Job search, application, resume upload, employer posting, applicant management",
    skills:
      "Multi-user roles, complex search, file uploads, database relationships",
    learning:
      "Advanced data modeling and implementing role-based access control.",
  },
  {
    name: "E-commerce Platform",
    complexity: "Advanced",
    time: "4-6 weeks",
    features:
      "User auth, product catalog, shopping cart, payment gateway, order handling",
    skills: "Complex ORM, secure transactions, third-party API integration",
    learning:
      "Full-stack application development and handling financial transactions securely.",
  },
  {
    name: "Real-Time Chat App",
    complexity: "Advanced",
    time: "4-6 weeks",
    features: "Instant messaging, user/chat room management, dynamic UI",
    skills: "Django Channels, WebSockets, asynchronous programming",
    learning:
      "Building scalable, real-time, concurrent user communication systems.",
  },
  {
    name: "Social Media Application",
    complexity: "Advanced",
    time: "6+ weeks",
    features: "User profiles, friends/followers, newsfeed, content sharing",
    skills: "Complex database design, user-generated content, media management",
    learning:
      "Experience with large-scale data handling and community features.",
  },
  {
    name: "College ERP System",
    complexity: "Advanced",
    time: "6+ weeks",
    features:
      "Multi-user roles, course registration, examination, student data management",
    skills:
      "Multi-user systems, database normalization, role-based access control",
    learning:
      "Grasping enterprise system architecture, data integrity, and security policies.",
  },
];

export default projects;

# 🧩 Django Portfolio Guide

An interactive roadmap to help aspiring Django developers strategically plan, build, and showcase real-world projects.


---

## 🚀 Live Demo

Check out the live version:  
👉 [django-lab](https://django-lab.netlify.app/)

---

## 📌 Overview

This project is a visual and interactive guide designed to help Django learners build a **strong, skill-based portfolio** through well-structured project suggestions. It includes project complexity levels, estimated timeframes, required skills, and learning outcomes — all visualized through charts and filters.

The idea began as a personal guide to structure my own Django learning journey. After researching various platforms, resources, and community insights, I realized that many learners — especially those learning independently — struggle to find a clear path from beginner to advanced Django projects. So, I built this tool not only for myself, but also to **support others who are learning Django on their own**.

---

## 🎯 Features

- 🧠 Categorized Projects (Beginner → Intermediate → Advanced)
- ⏱ Estimated timelines for each project
- 🛠 Skills you'll develop
- 📊 Interactive Bubble Chart (Project Complexity vs Time)
- 🔍 Filter by complexity
- 🔐 Modal popups with detailed project info
- 🌙 Dark mode toggle

---

## 📚 Built With

- **React + TypeScript**
- **Tailwind CSS**
- **Chart.js**
- **Vite** (Build tool)
- **Lucide Icons**
- Custom data modeling and filtering

### Deployment:
- Netlify

### Version Control:
- Git & GitHub
---

## 📂 Project Structure
```text
django-portfolio-guide/
├── public/
│   ├── images/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AboutProject.tsx
│   │   ├── AdvancedSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── IntroSection.tsx
│   │   ├── Modal.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ShowcaseSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── TechLogos.tsx
│   │   └── TimelineChart.tsx
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── techniques.ts
│   │
│   ├── types/
│   │   ├── Project.ts
│   │   ├── Skill.ts
│   │   └── Technique.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/banadawit/django-portfolio-guide.git
    ```
2. Navigate to the project directory:
    ```bash
    cd django-portfolio-guide
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open your browser and visit:
    ```bash
    http://localhost:5173
    ```

---

## 🌈 Contributing

I initially built this for personal use, but I’m happy to share it with anyone like me — someone who wants to learn Django independently and needs structure, motivation, and clarity.

If you find this useful or want to contribute (add more projects, improve design, etc.), feel free to open a PR or submit an issue!

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/YourFeatureName
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add some feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature/YourFeatureName
    ```
5. Open a pull request.

---


## 📬 Contact Me

Have a question or want to collaborate? Feel free to reach out!

👉 Email: banadawithunde@gmail.com

👉 LinkedIn: [Bana Dawit LinkedIn](https://www.linkedin.com/in/bana-dawit-121810312/)

👉 GitHub: [Bana Dawit GitHub](https://github.com/banadawit/)

---

Thank you for visiting! 🎨✨

# ⭐ Star this repo if you found it helpful!

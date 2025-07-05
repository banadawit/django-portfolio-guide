import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { motion } from "framer-motion";
import { FiInfo } from "react-icons/fi";

Chart.register(...registerables);

const timeMapping: Record<string, number> = {
  "1-2 days": 0.5,
  "1 week": 1,
  "2 weeks": 2,
  "2-3 weeks": 2.5,
  "3-4 weeks": 3.5,
  "4 weeks": 4,
  "4-6 weeks": 5,
  "6+ weeks": 6.5,
};

const complexityMap: Record<string, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

const projects = [
  { name: "To-Do List App", complexity: "Beginner", time: "1-2 days" },
  { name: "Login System", complexity: "Beginner", time: "1 week" },
  { name: "Weather App", complexity: "Intermediate", time: "2-3 weeks" },
  { name: "Blog App", complexity: "Intermediate", time: "3-4 weeks" },
  { name: "E-commerce Platform", complexity: "Advanced", time: "4-6 weeks" },
  { name: "Real-Time Chat App", complexity: "Advanced", time: "4-6 weeks" },
  { name: "ERP System", complexity: "Advanced", time: "6+ weeks" },
];

const TimelineChart = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"bubble"> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const isDarkMode = document.documentElement.classList.contains("dark");
    const textColor = isDarkMode ? "#e2e8f0" : "#334155";
    const gridColor = isDarkMode ? "#334155" : "#e2e8f0";
    const bgColor = isDarkMode ? "#1e293b" : "#ffffff";

    const bubbleData = projects.map((p) => ({
      x: timeMapping[p.time] || 1,
      y: complexityMap[p.complexity] || 1,
      r:
        p.complexity === "Beginner"
          ? 10
          : p.complexity === "Intermediate"
          ? 14
          : 18,
      label: p.name,
      time: p.time,
    }));

    chartInstance.current = new Chart(ctx, {
      type: "bubble",
      data: {
        datasets: [
          {
            label: "Beginner",
            data: bubbleData.filter((d) => d.y === complexityMap.Beginner),
            backgroundColor: "rgba(74, 222, 128, 0.7)",
            borderColor: "rgba(22, 163, 74, 1)",
            borderWidth: 1,
          },
          {
            label: "Intermediate",
            data: bubbleData.filter((d) => d.y === complexityMap.Intermediate),
            backgroundColor: "rgba(251, 191, 36, 0.7)",
            borderColor: "rgba(217, 119, 6, 1)",
            borderWidth: 1,
          },
          {
            label: "Advanced",
            data: bubbleData.filter((d) => d.y === complexityMap.Advanced),
            backgroundColor: "rgba(248, 113, 113, 0.7)",
            borderColor: "rgba(220, 38, 38, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: textColor,
              font: {
                weight: 500,
              },
              padding: 20,
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
          title: {
            display: true,
            text: "Project Timeline Visualization",
            color: textColor,
            font: {
              size: 16,
              weight: 600,
            },
            padding: {
              bottom: 20,
            },
          },
          tooltip: {
            backgroundColor: bgColor,
            titleColor: textColor,
            bodyColor: textColor,
            borderColor: gridColor,
            borderWidth: 1,
            padding: 12,
            usePointStyle: true,
            callbacks: {
              label: function (context: any) {
                const data = context.raw;
                return [
                  data.label,
                  `Complexity: ${context.dataset.label}`,
                  `Time: ${data.time}`,
                ];
              },
            },
          },
        },
        scales: {
          x: {
            min: 0,
            max: 7,
            title: {
              display: true,
              text: "Estimated Time (Weeks)",
              color: textColor,
              font: {
                weight: 500,
              },
            },
            ticks: {
              color: textColor,
              stepSize: 1,
              callback: function (value) {
                if (value === 0) return "0";
                if (value === 7) return "7+";
                return value;
              },
            },
            grid: {
              color: gridColor,
              drawTicks: false,
            },
            border: {
              color: gridColor,
            },
          },
          y: {
            min: 0,
            max: 4,
            ticks: {
              callback: function (value) {
                const labels = ["", "Beginner", "Intermediate", "Advanced", ""];
                return labels[value as number] || "";
              },
              color: textColor,
              font: {
                weight: 500,
              },
            },
            title: {
              display: true,
              text: "Complexity Level",
              color: textColor,
              font: {
                weight: 500,
              },
            },
            grid: {
              color: gridColor,
              drawTicks: false,
            },
            border: {
              color: gridColor,
            },
          },
        },
      },
    });

    return () => {
      chartInstance.current?.destroy();
    };
  }, []);

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Project Timeline
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Visualize the relationship between project complexity and estimated
            completion time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="relative h-[500px]">
            <canvas ref={canvasRef}></canvas>
          </div>

          <div className="mt-6 flex items-center text-sm text-slate-500 dark:text-slate-400">
            <FiInfo className="mr-2 flex-shrink-0" />
            <p>
              Bubble size indicates project complexity level - larger bubbles
              represent more advanced projects
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              Beginner Projects
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Focus on core concepts. Typically take 1 day to 2 weeks to
              complete. Great for mastering fundamentals.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-3">
              Intermediate Projects
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Incorporate multiple concepts. Usually take 2-4 weeks. Build
              confidence with real-world applications.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3">
              Advanced Projects
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Complex, full-featured applications. Typically 4+ weeks.
              Demonstrate professional-level skills.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineChart;

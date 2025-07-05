import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { motion, AnimatePresence } from "framer-motion";
import { FiInfo, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaChartLine, FaClock, FaLayerGroup } from "react-icons/fa";

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
  { name: "Blog Platform", complexity: "Intermediate", time: "3-4 weeks" },
  { name: "E-commerce Site", complexity: "Advanced", time: "4-6 weeks" },
  { name: "Real-Time Chat", complexity: "Advanced", time: "4-6 weeks" },
  { name: "ERP System", complexity: "Advanced", time: "6+ weeks" },
];

const TimelineChart = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"bubble"> | null>(null);
  const [showDetails, setShowDetails] = useState(false);

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
          ? 12
          : p.complexity === "Intermediate"
          ? 16
          : 20,
      label: p.name,
      time: p.time,
      complexity: p.complexity,
    }));

    chartInstance.current = new Chart(ctx, {
      type: "bubble",
      data: {
        datasets: [
          {
            label: "Beginner",
            data: bubbleData.filter((d) => d.y === complexityMap.Beginner),
            backgroundColor: "rgba(74, 222, 128, 0.8)",
            borderColor: "rgba(22, 163, 74, 1)",
            borderWidth: 2,
          },
          {
            label: "Intermediate",
            data: bubbleData.filter((d) => d.y === complexityMap.Intermediate),
            backgroundColor: "rgba(251, 191, 36, 0.8)",
            borderColor: "rgba(217, 119, 6, 1)",
            borderWidth: 2,
          },
          {
            label: "Advanced",
            data: bubbleData.filter((d) => d.y === complexityMap.Advanced),
            backgroundColor: "rgba(248, 113, 113, 0.8)",
            borderColor: "rgba(220, 38, 38, 1)",
            borderWidth: 2,
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
                weight: 600,
                family: "'Inter', sans-serif",
              },
              padding: 20,
              usePointStyle: true,
              pointStyle: "circle",
              boxWidth: 8,
              boxHeight: 8,
            },
          },
          title: {
            display: true,
            text: "Project Timeline Visualization",
            color: textColor,
            font: {
              size: 18,
              weight: 700,
              family: "'Inter', sans-serif",
            },
            padding: {
              bottom: 20,
              top: 10,
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
            cornerRadius: 8,
            titleFont: {
              weight: 600,
              size: 14,
            },
            bodyFont: {
              weight: 500,
              size: 13,
            },
            callbacks: {
              label: function (context: any) {
                const data = context.raw;
                return [
                  `Project: ${data.label}`,
                  `Level: ${data.complexity}`,
                  `Duration: ${data.time}`,
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
                weight: 600,
                size: 14,
                family: "'Inter', sans-serif",
              },
              padding: { top: 10 },
            },
            ticks: {
              color: textColor,
              stepSize: 1,
              font: {
                weight: 500,
              },
              callback: function (value) {
                if (value === 0) return "0";
                if (value === 7) return "7+";
                return value;
              },
            },
            grid: {
              color: gridColor,
              drawTicks: false,
              lineWidth: 1,
            },
            border: {
              color: gridColor,
              width: 2,
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
                weight: 600,
                family: "'Inter', sans-serif",
              },
              padding: 10,
            },
            title: {
              display: true,
              text: "Complexity Level",
              color: textColor,
              font: {
                weight: 600,
                size: 14,
                family: "'Inter', sans-serif",
              },
              padding: { bottom: 10 },
            },
            grid: {
              color: gridColor,
              drawTicks: false,
              lineWidth: 1,
            },
            border: {
              color: gridColor,
              width: 2,
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
    <section
      id="timeline"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/50"
    >
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
            Visualize the relationship between project complexity and
            development time
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

          <motion.div
            className="mt-6 flex items-center justify-between cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
            whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
              <FiInfo className="mr-2 flex-shrink-0" />
              <span>How to interpret this chart</span>
            </div>
            {showDetails ? (
              <FiChevronUp className="text-slate-500 dark:text-slate-400" />
            ) : (
              <FiChevronDown className="text-slate-500 dark:text-slate-400" />
            )}
          </motion.div>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-700/30 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                  <p className="mb-3">
                    This visualization shows the estimated time commitment
                    versus complexity level for various Django projects.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2 mt-1"></span>
                      <span>
                        <strong>X-axis</strong>: Estimated time to complete (in
                        weeks)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 bg-amber-500 rounded-full mr-2 mt-1"></span>
                      <span>
                        <strong>Y-axis</strong>: Project complexity level
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-2 mt-1"></span>
                      <span>
                        <strong>Bubble size</strong>: Indicates project scope
                        and challenge level
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Beginner Projects",
              icon: <FaChartLine className="text-green-500 text-xl" />,
              color: "text-green-600 dark:text-green-400",
              bg: "bg-green-50 dark:bg-green-900/20",
              border: "border-green-200 dark:border-green-800",
              content:
                "Focus on core concepts. Typically take 1 day to 2 weeks to complete. Great for mastering fundamentals.",
            },
            {
              title: "Intermediate Projects",
              icon: <FaClock className="text-amber-500 text-xl" />,
              color: "text-amber-600 dark:text-amber-400",
              bg: "bg-amber-50 dark:bg-amber-900/20",
              border: "border-amber-200 dark:border-amber-800",
              content:
                "Incorporate multiple concepts. Usually take 2-4 weeks. Build confidence with real-world applications.",
            },
            {
              title: "Advanced Projects",
              icon: <FaLayerGroup className="text-red-500 text-xl" />,
              color: "text-red-600 dark:text-red-400",
              bg: "bg-red-50 dark:bg-red-900/20",
              border: "border-red-200 dark:border-red-800",
              content:
                "Complex, full-featured applications. Typically 4+ weeks. Demonstrate professional-level skills.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`p-6 rounded-xl shadow-md border ${item.border} ${item.bg} flex flex-col`}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-white dark:bg-slate-700 shadow-sm mr-4">
                  {item.icon}
                </div>
                <h3 className={`text-xl font-semibold ${item.color}`}>
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mt-2">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineChart;

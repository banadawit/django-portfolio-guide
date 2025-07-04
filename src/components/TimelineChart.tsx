import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

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
  { name: "Blog App", complexity: "Intermediate", time: "3-4 weeks" },
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

    const bubbleData = projects.map((p) => ({
      x: timeMapping[p.time] || 1,
      y: complexityMap[p.complexity] || 1,
      r:
        p.complexity === "Beginner"
          ? 8
          : p.complexity === "Intermediate"
          ? 12
          : 16,
      label: p.name,
    }));

    chartInstance.current = new Chart(ctx, {
      type: "bubble",
      data: {
        datasets: [
          {
            label: "Beginner",
            data: bubbleData.filter((d) => d.y === complexityMap.Beginner),
            backgroundColor: "rgba(16, 185, 129, 0.7)",
            borderColor: "rgba(5, 150, 105, 1)",
          },
          {
            label: "Intermediate",
            data: bubbleData.filter((d) => d.y === complexityMap.Intermediate),
            backgroundColor: "rgba(245, 158, 11, 0.7)",
            borderColor: "rgba(202, 138, 4, 1)",
          },
          {
            label: "Advanced",
            data: bubbleData.filter((d) => d.y === complexityMap.Advanced),
            backgroundColor: "rgba(239, 68, 68, 0.7)",
            borderColor: "rgba(220, 38, 38, 1)",
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
              color: "#334155",
            },
          },
          title: {
            display: true,
            text: "Project Complexity vs. Time (Weeks)",
            color: "#334155",
          },
          tooltip: {
            callbacks: {
              label: function (context: any) {
                const d = context.raw;
                return `${d.label} — ${context.dataset.label}`;
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
              color: "#475569",
            },
            ticks: {
              color: "#475569",
            },
            grid: {
              color: "#cbd5e1",
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
              color: "#475569",
            },
            title: {
              display: true,
              text: "Complexity Level",
              color: "#475569",
            },
            grid: {
              color: "#cbd5e1",
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
    <section id="timeline" className="mb-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
          Project Timelines at a Glance
        </h3>
        <p className="mt-2 max-w-2xl mx-auto text-md text-slate-600 dark:text-slate-300">
          This chart compares the estimated time required for each project by
          complexity level.
        </p>
      </div>
      <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-lg">
        <div className="relative h-[400px]">
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </section>
  );
};

export default TimelineChart;

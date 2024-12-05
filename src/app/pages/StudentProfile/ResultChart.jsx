import React from "react";

export default function ResultChart({ subjects }) {
  return (
    <div className="flex flex-col p-4 items-center">
      <h3 className="text-lg font-semibold">Performance Bar Chart</h3>
      <svg viewBox="0 0 550 300" className="w-full h-auto   p-2">
        {/* Grid Lines */}
        {[20, 40, 60, 80, 100].map((yValue, index) => (
          <line
            key={index}
            x1="50"
            y1={250 - (yValue / 100) * 200}
            x2="500"
            y2={250 - (yValue / 100) * 200}
            stroke="#E2E8F0"
            strokeWidth="0.5"
          />
        ))}

        {/* Y-Axis Labels */}
        {[20, 40, 60, 80, 100].map((yValue, index) => (
          <text
            key={index}
            x="30"
            y={250 - (yValue / 100) * 200 + 5}
            fontSize="11"
            fill="#64748B"
          >
            {yValue}
          </text>
        ))}

        {/* Chart Border */}
        <rect
          x="50"
          y="50"
          width="450"
          height="200"
          fill="none"
          stroke="#CBD5E1"
          strokeWidth="1"
        />

        {/* Bars */}
        {subjects.map((subject, index) => {
          const xStep = 400 / subjects.length;
          const barWidth = 30;
          const x = 50 + index * xStep + (xStep - barWidth) / 2;
          const barHeight = (subject.score / 100) * 200;
          const y = 250 - barHeight;

          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill="url(#barGradient)"
                className="hover:opacity-80 cursor-pointer transition-opacity duration-200"
              />
              <text
                x={x + barWidth / 2}
                y={y - 5}
                fontSize="12"
                fill="#1E293B"
                textAnchor="middle"
              >
                {subject.score}
              </text>
            </g>
          );
        })}

        {/* X-Axis Labels */}
        {subjects.map((subject, index) => {
          const xStep = 400 / subjects.length;
          const x = 50 + index * xStep + xStep / 2;
          return (
            <text
              key={index}
              x={x}
              y="270"
              fontSize="12"
              fill="#64748B"
              textAnchor="middle"
              transform={`rotate(45, ${x}, 270)`}
            >
              {subject.name}
            </text>
          );
        })}

        {/* Gradient for Bars */}
        <defs>
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#34D399", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#6366F1", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

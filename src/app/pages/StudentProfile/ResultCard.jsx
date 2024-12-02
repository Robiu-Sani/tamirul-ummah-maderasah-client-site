"use client";
import { useState } from "react";

const ResultCard = () => {
  // Data for the table and chart
  const subjects = [
    { name: "Math", score: 85 },
    { name: "Science", score: 90 },
    { name: "English", score: 78 },
    { name: "History", score: 88 },
    { name: "Geography", score: 75 },
    { name: "Physics", score: 92 },
    { name: "Chemistry", score: 89 },
    { name: "Biology", score: 80 },
    { name: "Computer", score: 95 },
    { name: "Art", score: 70 },
  ];

  const [tooltip, setTooltip] = useState(null);

  // Chart dimensions
  const maxScore = 100;
  const chartWidth = 350;
  const chartHeight = 200;
  const barWidth = chartWidth / subjects.length;

  const handleMouseEnter = (subject, x, y) => {
    setTooltip({ subject, x, y });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center mb-6">
        1st semester result
      </h2>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 py-2 px-4 text-lg font-semibold">
                  Subject
                </th>
                <th className="border-b-2 py-2 px-4 text-lg font-semibold">
                  Marks
                </th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="py-2 px-4 border-b">{subject.name}</td>
                  <td className="py-2 px-4 border-b">{subject.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chart */}
        <div className="flex flex-col items-center relative">
          <h3 className="text-lg font-semibold mb-4">Performance Chart</h3>
          <svg
            width={chartWidth}
            height={chartHeight}
            className="border rounded-md bg-gray-50"
          >
            {subjects.map((subject, index) => {
              const barHeight = (subject.score / maxScore) * chartHeight;
              const barX = index * barWidth + 5;
              const barY = chartHeight - barHeight;

              return (
                <g key={index}>
                  <rect
                    x={barX}
                    y={barY}
                    width={barWidth - 10}
                    height={barHeight}
                    fill="#34D399"
                    className="transition-all duration-300 hover:fill-green-600"
                    onMouseEnter={() =>
                      handleMouseEnter(
                        `${subject.name}: ${subject.score}`,
                        barX + (barWidth - 10) / 2,
                        barY - 10
                      )
                    }
                    onMouseLeave={handleMouseLeave}
                  />
                  {/* Bar Value */}
                  <text
                    x={barX + (barWidth - 10) / 2}
                    y={barY - 5}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#333"
                  >
                    {subject.score}
                  </text>
                </g>
              );
            })}
            {/* X-axis Labels */}
            {subjects.map((subject, index) => (
              <text
                key={index}
                x={index * barWidth + barWidth / 2}
                y={chartHeight + 15}
                fontSize="10"
                textAnchor="middle"
                fill="#333"
              >
                {subject.name}
              </text>
            ))}
          </svg>

          {/* Tooltip */}
          {tooltip && (
            <div
              className="absolute bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg"
              style={{ left: tooltip.x, top: tooltip.y }}
            >
              {tooltip.subject}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
